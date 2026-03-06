describe('Links abrindo nova guia/janela', () => {

    it('Validando o atributo do link do Instagran', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.get('[data-cy="instagram-link"]')
            .should('have.attr', 'href', 'https://www.instagram.com/qapapito')  //valida o endereço de destino, mas n clica pq n precisa
            .and('have.attr', 'target', '_blank') //e abriria uma nova página

    })

    it.only('Acessa link de termos de uso removendo o target blank', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.contains('Formulários').click()

        cy.contains('a', 'termos de uso')
            .invoke('removeAttr','target') //remover o target para qdo clicar no link, n abrir uma nova janela, ele acessa ela ali mesmo
            .click()                        //na interface do cypress

        cy.contains('Ao acessar e usar nossos serviços, você concorda em cumprir estes termos de uso. Se você não concordar com algum aspecto destes termos, não utilize nossos serviços.')
            .should('be.visible')

    })

})


//no HTML, é essa propriedade que faz com que o sistema acesse uma nova aba: target="_blank"
//para validar link eu posso usar as propriedades target="_blank" e href="https://www.instagram.com/qapapito"
//o cypress n suporta troca de telas, então

