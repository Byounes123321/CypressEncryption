//Variables
var homePage = './index.html';
var userName = 'Bassil';
var pasWrd = 'Test123';

describe('Test to Pass' , ()=>{

describe('login and input data', () => {

  it('Should open to the login page', () => {
    cy.visit(homePage)
  })
  it("should be able to enter a username and password", () =>{

    cy.get('input[name="userAuth__username"]').type(userName).should('have.value', userName)

    cy.get('input[name="userAuth__password"]').type(pasWrd).should('have.value', pasWrd)
  })
})
describe("submit form and view data", ()=> {

  it("should log in when 'submit' is clicked",() =>{
    cy.get('#user-auth__button').click();
  })
  it("should show the hidden div and show username and password", () => {
    cy.get('#output').should('be.visible')
    cy.get('#output__username').should('contain', userName)
    cy.get('#output__password').should('contain', pasWrd)
  })
})
describe("validate that the user has entered username & password", ()=>{

  it('should see the username background turn red and that the focus is set there if there is nothing inputted', ()=>{
    cy.visit(homePage)
    cy.get('#user-auth__button').click();
    cy.get('input[name="userAuth__username"]').should('have.css', 'background-color', 'rgb(255, 0, 0)').should('have.focus')
  })
  it('should see the password background turn red and that the focus is set there if there is nothing inputted', ()=>{
    cy.visit(homePage)
    cy.get('input[name="userAuth__username"]').type(userName)
    cy.get('#user-auth__button').click();
    cy.get('input[name="userAuth__password"]').should('have.css', 'background-color', 'rgb(255, 0, 0)').should('have.focus')
  })
})
})