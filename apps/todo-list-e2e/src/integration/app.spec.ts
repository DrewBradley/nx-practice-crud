
describe('Form', () => {
  beforeEach(() => cy.visit('http://localhost:3000'));

  it('should be true', () => {
    expect(true).to.equal(true)
  });

  it('should update value of input', () => {
    cy.get('input[type="text"]')
      .type('Read engineering bookclub book')
      .should('have.value', 'Read engineering bookclub book')
  });

  it('should update todo list with input vale', () => {
    cy.get('ul')
      .should('have.length', 2)
      .get('input[type="text"]').type('Read your book')
      .get('button').click()
      .get('ul')
      .should('have.length', 3)
  });

});
