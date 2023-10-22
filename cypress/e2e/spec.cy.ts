
  // it('types on the form', () => {
  //   cy.visit('http://localhost:3000/')
  //   cy.get('form > .flex-row > .flex').type('plant')
  //   cy.get('.w-20 > .m-auto').click()

  // })

  it('clicks on dark mode', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#flexSwitchCheckDefault').click()
    cy.contains('.bg-yellow-400')
  }
  )