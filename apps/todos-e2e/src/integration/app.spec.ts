//import { getGreeting } from '../support/app.po';
import { getTodos, getAddTodoButton } from '../support/app.po';

describe('TodoApps', () => {
  beforeEach(() => cy.visit('/'));

  it('should display todos', () => {
    getTodos().should(t => expect(t.length).equal(2));
    getAddTodoButton().click();
    getTodos().should(t => expect(t.length).equal(3));
  });
});


// describe('Hello Nx', () => {
//   beforeEach(() => cy.visit('/'));

//   it('should display welcome message', () => {
//     getGreeting().contains('Welcome to todos!');
//   });
// });
