package pl.edu.agh.ki.covid19tablet.schema.fields

import pl.edu.agh.ki.covid19tablet.formState.fields.ChoiceFieldState
import pl.edu.agh.ki.covid19tablet.schema.fields.dto.ChoiceFieldDTO
import javax.persistence.ElementCollection
import javax.persistence.Entity
import javax.persistence.Id

typealias ChoiceFieldId = Long

@Entity
data class ChoiceField(
    @Id
    val id: ChoiceFieldId? = null,
    val fieldNumber: Int,
    val description: String,
    @ElementCollection
    val choices: List<String> = listOf(),
    val isMultiChoice: Boolean = false
)

fun ChoiceField.toDTO() =
    ChoiceFieldDTO(
        id = id!!,
        fieldNumber = fieldNumber,
        description = description,
        choices = choices,
        isMultiChoice = isMultiChoice
    )

fun ChoiceField.buildInitialState() =
    ChoiceFieldState(
        field = this,
        values = choices.map { false }
    )
