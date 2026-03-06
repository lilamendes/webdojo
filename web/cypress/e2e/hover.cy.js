describe('Simulando Mouseover', () => {
    it('Deve mostrar um texto ao passar o mouse por cima do link do instagran', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.contains('Isso é Mouseover!').should('not.exist') //aqui um not exist p/ deixar claro q só existe depois q eu passo o mouse (obtenho o elemento)
        cy.get('[data-cy="instagram-link"]').realHover() //passou o mouse (obteve o realHover do campo pego no data-cy)
        cy.contains('Isso é Mouseover!').should('exist')

    })



})


// como o cypress n tem suporte para simular MouseOver (aquelas mensagens que aparecem quando passo o mouse por cima de algum campo)
// tive que ir no prompt de comando e digitar: npm install cypress-real-events
//depois vim no projeto do cypress no arquivo de commands e adc o código: import 'cypress-real-events' 