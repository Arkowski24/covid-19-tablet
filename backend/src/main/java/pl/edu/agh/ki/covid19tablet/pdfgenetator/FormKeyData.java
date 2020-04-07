package pl.edu.agh.ki.covid19tablet.pdfgenetator;

import pl.edu.agh.ki.covid19tablet.form.Form;
import pl.edu.agh.ki.covid19tablet.pdfgenetator.containers.PersonalDataContainer;
import pl.edu.agh.ki.covid19tablet.pdfgenetator.containers.QuestionContainer;
import pl.edu.agh.ki.covid19tablet.pdfgenetator.containers.SignaturesContainer;

public class FormKeyData {

    private final String hospitalName = "Krakowski Szpital Sppcjalistyczny im. Jana Pawła II";

    private String creationDate;
    private String title;
    private PersonalDataContainer personalData;
    private QuestionContainer questions;
    private SignaturesContainer signatures;

    public FormKeyData(Form form, String creationDate) {
        this.creationDate = creationDate;
        this.title = form.getSchema().getName();
        this.personalData = new PersonalDataContainer(form);
        this.questions = new QuestionContainer(form);
        this.signatures = new SignaturesContainer(form);
    }

    public String getHospitalName() {
        return hospitalName;
    }

    public String getCreationDate() {
        return creationDate;
    }

    public String getTitle() {
        return title;
    }

    public PersonalDataContainer getPersonalData() {
        return personalData;
    }

    public QuestionContainer getQuestions() {
        return questions;
    }

    public SignaturesContainer getSignatures() {
        return signatures;
    }
}
