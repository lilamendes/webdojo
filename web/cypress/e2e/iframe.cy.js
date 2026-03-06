describe('iFrame', () => {
    it('Deve poder tocar o video de exemplo', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.contains('h4', 'Video').click()

        cy.get('iframe[title="Video Player"]')  //obtendo a página desse iframe
            .should('exist')                    //verificando se existe
            .its('0.contentDocument.body')      //to pegando o body do conteúdo do iframe
            .then(cy.wrap)                      //pegando essa informação e transformando em um objt cypress
            .as('iFramePlayer')                 //gravando dentro de um aliasing

        cy.get('@iFramePlayer')
            .find('.play-button')
            .click()

        cy.get('@iFramePlayer')
            .find('.pause-button')
            .should('be.visible')

        //its é uma função do cypress que pode ser usada para obter propriedades de elementos, objetos ao testar apis propriedades das janelas,
        // do local storage, dos coockies e também do iFrame (o zero dentro do its representa a primeira posição - o iframe q aparece 
        // primeiro ta na posição zero) 

        //.then(cy.wrap) : recurso do cypress para você conseguir pega o valor de um objeto, de um array ou de um elemento q está dentro de uma
        //página do HTML, ele pega esse valor e transforma em um objeto cypress permitindo que você use os comandos do cypress dentro desse objt

    })

})