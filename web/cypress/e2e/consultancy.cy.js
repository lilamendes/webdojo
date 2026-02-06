describe ('Formulário de Consultoria', ()=>{

    it('Deve solicitar consultoria individual', ()=>{
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.goTo('Formulários', 'Consultoria')

        cy.get('input[placeholder="Digite seu nome completo"]').type('Lila Mendes') //pegar por placeholder qdo n tem ID
        cy.get('input[type="email"]').type('elilaniamendes@gmail.com') //pegar por type email
        cy.get('input[placeholder="(00) 00000-0000"]').type("16 99766-2872")
            .should('have.value', '(16) 99766-2872')// ver se vai ficar exatamente com essa máscara

       // cy.get('#consultancyType').select('In Company') // um select com option pq ele n está clicando, ele está selecionando essa opção (eu poderia usar o value, ou o valor da label)
        cy.contains('label', 'Tipo de Consultoria')  //aqui pegou a label com esse nome, por meio do pai achou a div dela, e na div procurou com find um select e selecionou Individual
            .parent()
            .find('select')
            .select('In Company')

    })



})





//        cy.contains('h4', 'Fomulários')
//            .parent()
//            .parent()
//            .parent()
//            .should('be.visible')
//            .click()

//        cy.get('#name').type('Lila Mendes') pegar por ID
//