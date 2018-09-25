// cd into the 'integration' folder and run `http-server -p 3333` first
Cypress.config('baseUrl', 'http://localhost:3333')

describe('Checkbox testing', () => {
	beforeEach(() => {
		cy.visit('/checkbox.html')
	})

	// Unable to check Kendo checkboxes without using
	it('Cannot check a Kendo checkbox with .check()', () => {
		cy.log('THIS WILL FAIL 👇')
		cy.get(':checkbox')
			.check()
			.should('be.checked')
	})

	it('You have to use `{ force: true }`', () => {
		cy.log('THIS WILL PASS 👇')
		cy.get(':checkbox')
			.check({ force: true })
			.should('be.checked')
	})

	it('Using `.check({ force: true })` on a checkbox that is already checked will fail', () => {
		cy.log('THIS WILL PASS 👇')
		cy.get(':checkbox')
			.check({ force: true })
			.should('be.checked')

		cy.log('THIS WILL FAIL 👇')
		cy.get(':checkbox')
			.check({ force: true })
			.should('be.checked')
	})
})
