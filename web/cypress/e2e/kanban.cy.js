describe('Kanban Board', () => {
    it('Deve mover uma tarefa de Todo para Done e atualizar o board', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.contains('h4', 'Kanban').click()


        const dataTransfer = new DataTransfer()    //esse é um recurso do javascript q serve exatamente para transferir o elemento HTML
        //de uma sessão para outro elemento do HTML, outra sessão (de uma coluna p outra por ex)

        cy.contains('div[draggable="true"]', 'Documentar API') //peguei o elemento que quero arrastar e soltar
            .trigger('dragstart', { dataTransfer })  //esse código simula o clique e arratar

        cy.get('.column-done')
            .trigger('drop', { dataTransfer })   //soltar na coluna que busquei com o cy.get
            .find('h3')
            .should('have.text', 'Done (4)')

        cy.get('.column-done') //verificar se as informações estão agora nessa coluna
            .and('include.text', 'Documentar API')
            .and('include.text', 'Criar documentação da API com Swagger')



    })




})

// Drag and drop = arrastar de uma coluna apagando dessa e inserindo na outra (arrastar de um lado para o outro)
//draggable="true"   elemento q permite arrastar e soltar (o elemento de uma coluna para outra, por exemplo)