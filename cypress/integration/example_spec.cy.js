
// Exemple de spec générée
describe('Login Feature', () => {
  it('should allow user to login with valid credentials', () => {
    cy.visit('https://www.amazon.fr')
    cy.get('#nav-link-accountList').click()
    cy.get('input[type="email"]').type('utilisateur@test.com')
    cy.get('input[type="submit"]').click()
    cy.get('input[type="password"]').type('MotDePasseValide123')
    cy.get('input[type="submit"]').click()
    cy.contains('Bonjour, Utilisateur').should('be.visible')
  })
})
        