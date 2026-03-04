describe('Studio', () => {
  it('Exemplo do Cypress Studio', () => {
    cy.visit('https://example.cypress.io')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('h1')
      .should('be.visible')
      .and('have.text', 'Kitchen Sink');

    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Deve logar com sucesso', function () {    //aqui quando o cypress cria, ele usa 'function', mas pode ajeitar apagando e colocando '() =>'
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('#email')
      .type('papito@webdojo.com');

    cy.get('#password')
      .type('katana123');
    cy.get('.bg-\\[\\#8257E5\\]').click(); //n tinha ID e nem data-cy no botão, então o CypressStudio montou isso, então pegou uma classe e como
                                           //a classe tinha colchetes e rashtag, ele colocou essas barras pq é assim q ele entende c. especiais
                                           //posso trocar esse código por cy.contains('button', 'Entrar').click()
    cy.get('[data-cy="user-name"]')
      .should('have.text', 'Fernando Papito');
    /* ==== End Cypress Studio ==== */
  });
})


//Para habilitar o Cypress Studio, fui na interface do cypress (na que está sendo executada), no lado esquerdo tem o menu Settings (engrenagem)>
//Project settings> e na tela cheia busca por 'Studio': copie a chave q fica na frente da palavra Studio, nesse caso foi: experimentalStudio >
//Vai no VSCode e cola essa chave no arquivo 'cypress.config.js' fica na raiz da pasta onde está sendo rodando o Cypress, e cola aqui:
// setupNodeEvents(on, config) {
//   // implement node event listeners here
// },
// experimentalStudio: true  <<<<<<<<<<<<<<<<<<<<<<<< aqui e coloca true, tem que por uma vírgula ali depois do '}'
//Depois na interface do Cypress cria uma NewSpec e salva, depois na hora que executar o teste, vai na descrição de cada teste que aparecerá uma
//varinha mágica q ao ser clicada começa a permitir que geramos os comandos pelo Cypress Studio
//para criar novo caso de testes, coloca o cursor do mouse no nome do Describe não na descrição do 'it'

//    cy.get('#password').clear('k'); >> comando para limpar o campo

//Papito n gosta do Cypress Studio pq n automatiza tudo