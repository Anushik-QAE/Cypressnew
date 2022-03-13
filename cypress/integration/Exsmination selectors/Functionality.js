import SelectorExam from "./Selectorexam";
const select = new SelectorExam()
class AddingNewUser {
    visit() {
        cy.visit('https://demoqa.com/');
        cy.title().should('include','ToolsQA');
    }

    visitElementPage() {
        select.elementTab().click()
        cy.url().should('include','elements');
    }

    clickOnWebTableButton() {
        select.webTablesButton().click()
        cy.url().should('include','webtables');
    }

    clickOnAddButton() {
        select.addButton().click()
        cy.get('[class="modal-content"]').should('be.visible')
    }

    fillFirstNameField() {
            select.firstNameField().type('Hannnah').should('have.value','Hannnah')

    }


    fillLastNameFiled() {
        select.lastNameField().type('Smith').should('have.value','Smith')
    }

    // fillEmailField(){
    //     select.emailField().clear()
    // }

    randomEmaill() {
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
        for (var e = 0; e < 10; e++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return string + '@gmail.com';
    }


    fillAgeField(){
        select.ageField().type('20').should('have.value','20')
    }

    fillSalaryField(){
        select.salaryField().type('5000').should('have.value','5000')
    }

    fillDepartmentField(){
        select.departmentField().type('Legal').should('have.value','Legal')
    }
    clickOnSubmitButton(){
        select.submitButton().click()
    }
    windowValidate(){
        select.window().invoke('show')
    }
    closeWindow(){
        select.closeButton().click()
    }
    deleteUser(){
        select.deleteButton().click()
    }
}

export default AddingNewUser