describe('Login', ()=>{
  it('Deve logar com sucesso',()=>{
    cy.viewport(1440,900)
    cy.visit('http://localhost:3000')

    cy.get('#email').type('papito@webdojo.com')
    cy.get('#password').type('katana123')
    cy.contains('button','Entrar').click()

    cy.wait(3000)

  })
})