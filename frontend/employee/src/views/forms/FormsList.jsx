import React, { useEffect, useState } from 'react';
import {
  Button, Container, Form, Row, Table,
} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from 'react-router-dom';

import formService from '../../services/FormService';
import schemaService from '../../services/SchemaService';

const Header = ({ setVisible }) => (
  <Row className="w-100 m-1 p-1 border-bottom">
    <Col>
      <h1>List of filled forms</h1>
    </Col>
    <Col md="auto">
      <Button
        variant="primary"
        onClick={(e) => {
          e.preventDefault();
          setVisible(true);
        }}
      >
        Create
      </Button>
    </Col>
  </Row>
);

const FormsTable = ({ forms }) => {
  const history = useHistory();

  const headers = ['#', 'Patient Name', 'Schema', 'Token']
    .map((h) => <th key={h}>{h}</th>);

  const buildPatientRow = (form, index) => (
    <tr key={form.id} onClick={() => history.push(`/forms/${form.id}`)}>
      <td>{index}</td>
      <td>{form.patientName}</td>
      <td>{form.schema.name}</td>
      <td>{form.id}</td>
    </tr>
  );
  const patientForms = forms
    .map((f, i) => buildPatientRow(f, i));

  return (
    <Row className="w-100 m-1 p-1">
      <Table striped bordered hover>
        <thead>
          <tr>
            {headers}
          </tr>
        </thead>
        <tbody>
          {patientForms}
        </tbody>
      </Table>
    </Row>
  );
};

const NewFormModal = ({
  visible, setVisible,
  schemas,
  createForm,
}) => {
  const [patientName, setPatientName] = useState('');
  const [schemaId, setSchemaId] = useState('');

  const handleClose = () => setVisible(false);
  const schemaOptions = schemas.map((s) => <option value={s.id} key={s.id}>{s.name}</option>);

  const createNewForm = (event) => {
    event.preventDefault();
    let formSchemaId = schemaId;

    if (formSchemaId === '') {
      if (schemas.length > 0) formSchemaId = schemas[0].id;
      else return;
    }

    createForm(formSchemaId, patientName);
    handleClose();
  };

  return (
    <>
      <Modal show={visible} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new patient form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formPatientName">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John Doe"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="forSchema">
              <Form.Label>Schema</Form.Label>
              <Form.Control
                as="select"
                value={schemaId}
                onChange={(e) => setSchemaId(e.target.value)}
              >
                {schemaOptions}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={createNewForm}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const FormsList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [forms, setForms] = useState([]);
  const [schemas, setSchemas] = useState([]);

  const createForm = async (schemaId, patientName) => {
    const form = await formService.createForm(schemaId, patientName);
    const newForms = forms.concat(form);
    setForms(newForms);
  };

  useEffect(() => {
    async function fetchData() {
      const formsResponse = await formService.getForms();
      setForms(formsResponse);

      const schemaResponse = await schemaService.getSchemas();
      setSchemas(schemaResponse);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Header setVisible={setModalVisible} />
      <FormsTable forms={forms} />
      <NewFormModal
        visible={modalVisible}
        setVisible={setModalVisible}
        schemas={schemas}
        createForm={createForm}
      />
    </Container>
  );
};

export default FormsList;
