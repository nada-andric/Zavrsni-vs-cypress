/// <reference types= "Cypress" />


import { loginPage} from "../page_object/loginPage";

   
  



describe("Login test cases", () => {
    before("'https://cypress.vivifyscrum-stage.com/'", () => {
        cy.visit("/");
   

})


    

    it("Login with valid email", () => {

        loginPage.login()
        
    })

    it('Login without  required requirements', () => {
        loginPage.submitButton.click()
      })


    it('Login', () => {
        loginPage.login()
    })

})

