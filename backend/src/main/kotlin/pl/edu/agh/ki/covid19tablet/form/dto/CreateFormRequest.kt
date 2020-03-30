package pl.edu.agh.ki.covid19tablet.form.dto

import pl.edu.agh.ki.covid19tablet.schema.SchemaId

data class CreateFormRequest(
    val schemaId: SchemaId,
    val patientName: String
)