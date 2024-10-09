const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

let document;

beforeEach(() => {
  const filePath = path.join(__dirname, "canchas.html");
  const htmlContent = fs.readFileSync(filePath, "utf8");

  const dom = new JSDOM(htmlContent);
  document = dom.window.document;
});

test("debería haber un elemento de logo en el header", () => {
  const logo = document.querySelector("p.logo");
  expect(logo).not.toBeNull();
  expect(logo.textContent).toBe("LOGO");
});

test("el input de búsqueda de cancha debería tener un placeholder", () => {
  const searchInput = document.querySelector('.barra input[type="text"]');
  expect(searchInput).not.toBeNull();
  expect(searchInput.placeholder).toBe("Ingrese el nombre de la cancha ");
});
