package pl.edu.agh.ki.covid19tablet.schema.fields

import pl.edu.agh.ki.covid19tablet.form.state.fields.SignFieldState
import pl.edu.agh.ki.covid19tablet.schema.fields.dto.SignFieldDTO
import javax.persistence.Entity
import javax.persistence.Id

typealias SignFieldId = Long

@Entity
data class SignField(
    @Id
    val id: SimpleFieldId? = null,
    val fieldNumber: Int,
    val description: String
)

fun SignField.toDTO() =
    SignFieldDTO(
        id = id!!,
        fieldNumber = fieldNumber,
        description = description
    )

fun SignField.buildInitialState() =
    SignFieldState(
        field = this,
        value = byteArrayOf()
    )
