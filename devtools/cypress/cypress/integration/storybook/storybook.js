context("Storybook", () => {
  it("render components as expected", () => {
    cy.visit("/").runStorybookVisualRegression({
      storiesToSkip: ["components-loading"],
    }); 
  });
});
