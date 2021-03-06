package pl.edu.agh.ki.covid19tablet.user.employee

import pl.edu.agh.ki.covid19tablet.form.Form
import pl.edu.agh.ki.covid19tablet.user.dto.EmployeeDTO
import javax.persistence.CascadeType
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.OneToMany
import javax.persistence.Table
import javax.persistence.UniqueConstraint

typealias EmployeeId = Long

@Entity
@Table(
    uniqueConstraints = [UniqueConstraint(columnNames = ["username"])]
)
data class Employee(
    @Id
    @GeneratedValue
    val id: EmployeeId? = null,
    val username: String,
    val passwordHash: String,

    val fullName: String? = null,
    val role: EmployeeRole = EmployeeRole.EMPLOYEE,

    @OneToMany(mappedBy = "createdBy", cascade = [CascadeType.ALL])
    val forms: MutableList<Form> = mutableListOf()
)

fun Employee.toDTO() = EmployeeDTO(
    id = id!!,
    username = username,
    fullName = fullName,
    role = role
)
