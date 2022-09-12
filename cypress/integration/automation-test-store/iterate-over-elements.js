///<reference types="Cypress" />



describe('Verificar variables jquery y comandos cypress',()=>{
    it('Información de registro para los productos', () => {
        cy.visit('https://automationteststore.com');
        const encontrar_makeup= cy.get("a[href*='product/category&path=']").contains('Hair Care');
        encontrar_makeup.click();   
        
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            cy.log("Index: "+ index +" : "+$el.text());
          });
    });

    it("Navegando en productos especificos de la pagina",()=>{
        cy.visit("https://automationteststore.com");
        const encontrar_makeup= cy.get("a[href*='product/category&path=']").contains('Hair Care');
        encontrar_makeup.click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            if($el.text().includes('Eau Parfumee au The Vert Shampoo')){
                cy.wrap($el).click()
            }
          }); 
    });  
})