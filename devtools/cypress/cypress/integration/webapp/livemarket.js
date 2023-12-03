describe('Live Market', () => {
  it('looks as expected', () => {
    // @TODO mock the backend for functional/visual tests to ensure stable data
    cy.visit('/');
    cy.matchImageSnapshot('livemarket');
    // @TODO accept / reject live orders and assert functionality and new snapshot
  });
});
