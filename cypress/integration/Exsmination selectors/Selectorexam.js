class SelectorExam {

    elementTab()
    {
        return cy.get('div[class="card mt-4 top-card"]:first-child')
    }

    webTablesButton()
    {
        return cy.get('[class="element-list collapse show"] :nth-child(4)')
    }

    addButton()
    {
        return cy.get('#addNewRecordButton')
    }

    firstNameField()
    {
        return cy.get('#firstName')

    }
    lastNameField()
    {
        return cy.get('#lastName')
    }
    // emailField()
    // {
    //     return cy.get('#userEmail')
    // }
    ageField()
    {
        return cy.get('#age')
    }
    salaryField()

    {
        return cy.get('#salary')
    }

    departmentField()
    {
        return cy.get('#department')
    }
    submitButton()
    {
        return cy.get('#submit')
    }
    window()
    {
        return cy.get('#userForm')
    }
    closeButton()
    {
        return cy.get('button[class="close"]')
    }
    deleteButton()
    {
        return cy.get('[id="delete-record-3"]')
    }

}

export default SelectorExam
