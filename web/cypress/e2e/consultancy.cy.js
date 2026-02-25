describe('Formulário de Consultoria', () => {

    it('Deve solicitar consultoria individual', () => {
            cy.start()
            cy.submitLoginForm('papito@webdojo.com', 'katana123')
            cy.goTo('Formulários', 'Consultoria')

            cy.get('input[placeholder="Digite seu nome completo"]').type('Lila Mendes') //pegar por placeholder qdo n tem ID
            cy.get('input[type="email"]').type('elilaniamendes@gmail.com') //pegar por type email
            cy.get('input[placeholder="(00) 00000-0000"]').type('16 99766-2872')
                .should('have.value', '(16) 99766-2872')// ver se vai ficar exatamente com essa máscara



        //Select/Option (aquela caixa de seleção) ***********************************************************

            //Forma 1:  cy.get('#consultancyType').select('In Company') // um select com option pq ele n está clicando, ele está selecionando essa opção 
            //          (na linha acima no .select eu poderia usar o valor do value (value="inCompany"), ou o valor da label se caso fosse 'label = "In Company"' e n value q tivesse sido usado no htmlpara definir as opções)
            
            //Forma2: buscando pelo elemento pai
            cy.contains('label', 'Tipo de Consultoria')  //aqui pegou a label com esse nome, por meio do pai achou a div dela,
                .parent()                                        //  e na div procurou com find um select e selecionou Individual
                .find('select')
                .select('Individual')
            
        //***********************************************************

        //Radio Button ***********************************************************

            //Forma um: buscando pelo elemento pai
            // xpath: //span[text()="Pessoa Física"]/..//input
            // cy.contains('span', 'Pessoa Jurídica')
            //     .parent()
            //     .find('input')
            //     .check()

            //Forma dois: buscando pelo elemento filho
            cy.contains('label', 'Pessoa Física')
                .find('input[type=radio]')
                .click()
                .should('be.checked')

            cy.contains('label', 'Pessoa Jurídica')
                .find('input[type=radio]')
                .should('be.not.checked')

        //***********************************************************

        //Forma 1:
            // cy.get('input[placeholder="000.000.000-00"]')
            //     .type(34334359019)
            //     .should('have.value', '343.343.590-19')

            cy.contains('label','CPF')
                .parent()
                .find('input')
                .type(34334359019)
                .should('have.value', '343.343.590-19')

        // Check Box com forEach************************************************************
        //Nesse caso posso marcar várias opções de uma vez só

            const discoveryChannels = [ //constante do tupo array com a lista de canais
                'Instagram',
                'LinkedIn',
                'Udemy',
                'YouTube',
                'Indicação de Amigo'
            ]

            discoveryChannels.forEach((channel)=>{

                cy.contains('span', channel)
                .parent()
                .find('input')
                .check()
                .should('be.checked')

            })

        //botão de escolher arquivo************************************************************
        //input type="file"
        //svg > tag gralmente usada para inserir ícone / imagem ou logotip
        // site atoa para gerar pdf: https://lorempdf.com/
        //se ir no console do desenvolvedor com os elementos lá inspecionados, 
                    //ir na aba Console e usar comandos javascript do tipo document.querySelector('input[type="file"]').value ele traz elementos e valores

            cy.get('input[type="file"]') //precisei arrastar a imagem para dentro da pasta fixtures de dentro desse meu projeto
                .selectFile('./cypress/fixtures/document.pdf', {force:true}) //inseri o nome do arquivo que arrastei para dentro da pasta fixtures 

         //area de texto************************************************************
        // site atoa para gerar pdf: https://loremipsum.io/
            cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
                .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
    
    })
})

// //precisei arrastar a imagem para dentro da raiz do meu projeto
// e como cypress reclamou q o elemento da tag estava com classe p deixar ele invisível, usei o comando para forçar:               
// cy.get('input[type="file"]') 
// .selectFile('document.pdf', {force:true})



//        cy.contains('h4', 'Fomulários')
//            .parent()
//            .parent()
//            .parent()
//            .should('be.visible')
//            .click()

//        cy.get('#name').type('Lila Mendes') pegar por ID
//