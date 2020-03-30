package pl.edu.agh.ki.covid19tablet.schema.fields

import pl.edu.agh.ki.covid19tablet.schema.fields.dto.TextFieldDTO
import javax.persistence.Entity
import javax.persistence.Id

typealias TextFieldId = Long

@Entity
data class TextField(
    @Id
    val id: TextFieldId? = null,
    val fieldNumber: Int,
    val description: String,
    val isMultiline: Boolean
)

fun TextField.toDTO() =
    TextFieldDTO(
        id = id!!,
        fieldNumber = fieldNumber,
        description = description,
        isMultiline = isMultiline
    )
