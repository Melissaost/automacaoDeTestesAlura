describe('Usabilidade tela inicial', () => {

    beforeEach(() => {
      cy.visit('/')

     })
    
     it('Verifica nome da aplicação na tela inicial', () => {
      cy.contains('a', 'ALURAPIC').should('be.visible');
     })

     it('Verifica menu clicavel na tela inicial', () => {
      cy.get('.navbar-brand > .fa').click();
      cy.get('.menu-bar > .fa').should('be.visible');
     })


})

