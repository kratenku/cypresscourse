/// <reference types="cypress" />

describe("Prueba variables",()=>{


 it("Encontrar listas de productos",()=>{
    
    cy.visit('https://automationteststore.com');
    const encontrar_makeup= cy.get("a[href*='product/category&path=']").contains('Makeup');
    encontrar_makeup.click();
    const skincare= cy.get("a[href*='product/category&path=']").contains('Skincare');
    skincare.click();
 }) 

 it("Navegando en productos especificos de la pagina",()=>{

    
    cy.visit("https://automationteststore.com");
    const encontrar_makeup= cy.get("a[href*='product/category&path=']").contains('Makeup');
    encontrar_makeup.click();

    /*const header=cy.get("h1 .maintext");
    cy.log(header.text())*/

    cy.get("h1 .maintext").then(($headerText)=>{
        const  headerText=$headerText.text()
        cy.log("Encontrar la cabecera del texto "+headerText)
        expect(headerText).is.eq('Makeup');

    })

 })

 it.only('Validar las propiedades de la vista contactanos', () => {
    cy.visit('https://automationteststore.com/')
         cy.visit({
             url:'/index.php?rt=content/contact',
             method:'GET',
         })
    
    cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name')     

    //jquery
    cy.contains('#ContactUsFrm','Contact Us Form').then(text=>{
        const textoprimernombre=text.find('#field_11').text()
        expect(textoprimernombre).to.contains('First name')

        //comando embebido

        cy.get('#field_11').then(fnText=>{
            cy.log(fnText.text())
            cy.log(fnText)
        })
    })

 });
    
});