describe('Test App Boots Up', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Welcome to Roomex SPA')
  })
})
