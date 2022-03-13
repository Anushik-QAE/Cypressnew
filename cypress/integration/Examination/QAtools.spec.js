import AddingNewUser from "../Exsmination selectors/Functionality";

describe ('Tools QA page functionality',function (){
    const ad = new AddingNewUser()

    beforeEach('Visit Tools QA page',function (){
        ad.visit();
        ad.visitElementPage();
        ad.clickOnWebTableButton();
        ad.clickOnAddButton();
    });


    it('Verify fields activity  ',function (){
        ad.fillFirstNameField();
        ad.fillLastNameFiled();
        cy.get('#userEmail').clear().type(ad.randomEmaill())
        ad.fillAgeField();
        ad.fillSalaryField();
        ad.fillDepartmentField();
    });

    it('Adding new user ',function (){
        ad.fillFirstNameField();
        ad.fillLastNameFiled();
        cy.get('#userEmail').clear().type(ad.randomEmaill())
        ad.fillAgeField();
        ad.fillSalaryField();
        ad.fillDepartmentField();
        ad.clickOnSubmitButton();
    });


    it ('Verify that error validations are shown',function (){
        ad.clickOnSubmitButton();
        ad.windowValidate();
        ad.closeWindow();
    });

    it( 'Deleting user ',function (){
        ad.closeWindow();
        ad.deleteUser();
    });
});