
describe('Form', () => {
  beforeEach(() => cy.visit('http://localhost:4200'));

  it('should be true', () => {
    expect(true).to.equal(true)
  });

  it('should update value of input', () => {
    cy.get('input[type="text"]')
      .type('Read engineering bookclub book')
      .should('have.value', 'Read engineering bookclub book')
  });

  it('should update todo list with input value', () => {
    cy.get('li')
      .should('have.length', 2)
      .get('input[type="text"]').type('Read your book')
      .get('button').click()
      .get('li')
      .should('have.length', 3)
  });
});

describe('List', () => {
  beforeEach(() => cy.visit('http://localhost:4200'));

  it('should be able to mark todo items', () => {
    cy.get('label').first()
      .should(($input) => {
        expect($input).to.not.have.attr('checked')
      })
  });

  it('should mark items completed', () => {
    cy.get('input[type="checkbox"]').first().click()
      .get('label').first()
      .should('have.css', 'text-decoration')
      .and('includes', 'line-through')
  });
});

describe('Quote', () => {
  beforeEach(() => cy.visit('http://localhost:4200'));
  
  it('should display default quote', () => {
    cy.get('p').first()
      .should('have.text', '"Finish your work!"')
  });

  it('should display new quote when todo is added', () => {
    cy.intercept('GET', 'https://type.fit/api/quotes/', { fixture: 'mock-call.json' })
    cy.get('input[type="text"]')
      .type('Read Grokking Simplicity')
      .get('button').first().click()

    cy.get('p').first()
      .should('have.text', '"You can observe a lot just by watching."')
  });

});