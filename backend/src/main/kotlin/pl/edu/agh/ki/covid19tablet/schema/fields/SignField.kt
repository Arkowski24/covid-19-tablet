package pl.edu.agh.ki.covid19tablet.schema.fields

import pl.edu.agh.ki.covid19tablet.schema.fields.dto.SignFieldDTO
import javax.persistence.Entity
import javax.persistence.Id

typealias SignFieldId = Long

@Entity
data class SignField(
    @Id
    val id: SimpleFieldId? = null,
    val order: Int,
    val description: String
)

fun SignField.toDTO() =
    SignFieldDTO(
        id = id!!,
        order = order,
        description = description
    )