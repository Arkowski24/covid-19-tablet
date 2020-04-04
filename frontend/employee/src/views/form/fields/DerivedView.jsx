import React from 'react';
import { Container, Form, Row } from 'react-bootstrap';

import derivedHelper from '../../../helper/DerivedHelper';

const Header = ({ message }) => (
  <div className="m-2 p-1 border-bottom">
    <h1>{message}</h1>
  </div>
);

const InfoMessage = ({ message }) => (
  <div className="m-2 p-2 overflow-auto" style={{ maxHeight: '30vh' }}>
    <p className="text-justify">{message}</p>
  </div>
);

const InputForm = ({ text, setText }) => (
  <div className="m-2 p-1">
    <Form>
      <Form.Control
        as="textarea"
        rows={1}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </Form>
  </div>
);

const OneField = ({
  derivedType, index,
  title, description,
  input, setInput,
}) => {
  const setNewInput = (value) => {
    const newInput = input.slice();
    newInput[index] = value;
    const newValues = derivedHelper.calculateDerived(derivedType, index, newInput);
    setInput(newValues);
  };

  return (
    <div className="w-100 m-1 p-1">
      <Header message={title} />
      <InfoMessage message={description} />
      <InputForm text={input[index]} setText={setNewInput} />
    </div>
  );
};

const DerivedView = ({
  derivedType,
  titles, descriptions,
  input, setInput,
  highlighted,
}) => {
  const fields = titles.map((t, i) => (
    <Row key={i}>
      <OneField
        key={i}
        derivedType={derivedType}
        index={i}
        title={t}
        description={descriptions[i]}
        input={input}
        setInput={setInput}
      />
    </Row>
  ));

  return (
    <Container className={`w-100 m-1 p-1 rounded border ${highlighted ? 'border-primary shadow-sm' : ''}`}>
      {fields}
    </Container>
  );
};
export default DerivedView;