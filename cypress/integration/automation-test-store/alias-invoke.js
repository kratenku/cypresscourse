///<reference types="cypress"/>

describe("Alias y invocación",()=>{
    it('Especificar el producto shampoo', () => {
        cy.visit('https://automationteststore.com/');
        
        cy.visit({
            url:'index.php?rt=product/category&path=52',
            method:'GET'
        })

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('Pthumbnail');
        cy.get('@Pthumbnail').its('length').should('be.gt', 5);
        cy.get('@Pthumbnail').should('include', 'Seaweed Conditioner');

    });

    it.only('Desafio alias e invocación', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('#featured .maintext').eq(0).invoke('text').as('section');
        cy.get('@section').its('length').should('be.gt', 4)
    });
    
})