/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("/");
});

it("E2E test", () => {
  cy.get("p").contains("Glenn Visser");
  cy.get("div").contains(
    "By day I am a programmer with experience in languages, such as C# and TypeScript. By night I usually play some video games. I am also a huge movie and music nerd."
  );
  cy.get("div").contains("Denis Villeneuve");
  cy.get("div[id='settings']").first().click();
  cy.get("button").contains("Dutch").click();
  cy.get("button").contains("Licht").click();
  cy.get("button[tabindex='0']").click();
  cy.get("div[id='projects']").click();
  cy.get("h2").contains("School Projecten");
  cy.get("button").contains("Lees verder...").click();
  cy.get("div").contains(
    "Een ticket kan besteld worden door stoelen te selecteren en enkele persoonlijke gegevens in te voeren. Beheerders van het systeem kunnen ook films toevoegen en verwijderen. Elke film heeft zijn eigen pagina, met een beschrijving, trailer en meer. Alle gegevens worden opgeslagen in een lokale database met behulp van SQLite."
  );
  cy.get("button[tabindex='0']").click();
  cy.get("div[id='skills']").click();
  cy.get("h2").contains("Pagina niet gevonden!");
  cy.get("button").contains("Home").click();
  cy.get("h1").contains("Hi, ik ben Glenn");
});
