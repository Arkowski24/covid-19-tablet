package pl.edu.agh.ki.covid19tablet.form.state.fields.dto

import pl.edu.agh.ki.covid19tablet.form.state.fields.ChoiceFieldStateId
import pl.edu.agh.ki.covid19tablet.schema.fields.ChoiceFieldId

data class SignFieldStateDTO(
    val id: ChoiceFieldStateId,
    val fieldId: ChoiceFieldId,
    val value: String
)
