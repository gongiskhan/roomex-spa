describe('Test Enter Data', () => {
  const insertNameUsernameAndCountry = () => {
    cy.visit('/enter')
    cy.get('[ng-reflect-name="name"]').type("Slim Shady")
    cy.get('[ng-reflect-name="username"]').type("slim.shady@what.com")
    cy.get('[ng-reflect-name="country"]').click().get('mat-option').contains('United Kingdom').click();
  }
  it('fails submitting invalid postCode', () => {
    insertNameUsernameAndCountry();
    cy.get('button[type="submit"]').click();
    cy.contains('Post Code is mandatory');
  })
  it('fails submitting without favorite movie', () => {
    insertNameUsernameAndCountry();
    cy.get('[ng-reflect-name="postCode"]').type("SW1W 0NY")
    cy.get('button[type="submit"]').click();
    cy.contains('Favorite Movie is mandatory');
  })
  it('succeeds submitting valid data', () => {
    cy.visit('/enter')
    insertNameUsernameAndCountry();
    cy.get('[ng-reflect-name="postCode"]').type("SW1W 0NY")
    cy.get('[ng-reflect-name="favoriteMovie"]').type("Layer Cake")
    cy.get('button[type="submit"]').click();
    cy.url().then(($url) => {
      if(!$url.includes('/thanks')) {
        throw new Error("Didn't navigate to Thank You page.")
      }
      cy.contains("Layer Cake")
    })
  })
})
