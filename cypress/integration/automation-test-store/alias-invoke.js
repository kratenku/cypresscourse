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

    it('Desafio alias e invocación', () => {
        cy.visit('https://automationteststore.com/');
        //cy.get('#featured .maintext').eq(0).invoke('text').as('section');
        //cy.get('@section').its('length').should('be.gt', 4)
        cy.get('.thumbnail').as('thumb')
        cy.get('@thumb').should('have.length',16)
        cy.get('@thumb').find('.productcart').invoke('attr','title').should('include','Add to Cart')
        
    });

    it.only('Calcular productos normales y ofertas de productos', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('thumb');
        /*cy.get('@thumb').find('.oneprice').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            /*if($el.text().includes('Eau Parfumee au The Vert Shampoo')){
                cy.wrap($el).click();
            }
            cy.log($el.text())
            
          }); */
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('@itemPrice').then( $linkText => {
            const itemPrice = $linkText.split('$'); 
            var i;
            for (i=0; i < itemPrice.length ; i++){
                cy.log(itemPrice[i])
            }
        })
        
    });
    
})