// Selección de todos los platos y bebidas
const amanida = { name: 'Amanida', price: 7.00, ingredients: 'Lechuga, tomate, cebolla, aceitunas, aderezo' };
const espaguetis = { name: 'Espaguetis al pesto', price: 8.00, ingredients: 'Espaguetis, albahaca, piñones, queso parmesano, ajo, aceite de oliva' };
const macarrons = { name: 'Macarrons a la bolognesa', price: 8.00, ingredients: 'Macarrones, carne de res, tomate, cebolla, zanahoria, apio, vino tinto, especias' };
const melo = { name: 'Meló amb pernil', price: 11.00, ingredients: 'Melón, jamón ibérico' };

const costelles = { name: 'Costelles de cabrit', price: 18.00, ingredients: 'Costillas de cabrito, especias, salsa barbacoa' };
const entrecot = { name: 'Entrecot amb verdures', price: 16.00, ingredients: 'Entrecot, verduras variadas, especias' };
const gambes = { name: 'Gambes a la plancha', price: 23.00, ingredients: 'Gambas, aceite de oliva, ajo, limón, perejil' };
const peix = { name: 'Lluç al forn', price: 13.00, ingredients: 'Lluç (merluza), patatas, cebolla, aceite de oliva, limón, especias' };

const coulant = { name: 'Coulant', price: 8.00, ingredients: 'Chocolate, mantequilla, azúcar, huevo, harina' };
const macedonia = { name: 'Macedonia', price: 12.00, ingredients: 'Frutas variadas (melón, sandía, piña, plátano, fresas)' };
const mango = { name: 'Recontrucció de mango', price: 23.00, ingredients: 'Mango, crema pastelera, bizcocho, gelatina de mango' };
const tiramisu = { name: 'Tiramisú', price: 11.00, ingredients: 'Café, bizcochos de soletilla, queso mascarpone, cacao en polvo, licor' };

const aigua = { name: 'Aigua', price: 2.50, ingredients: 'Agua' };
const refrescos = { name: 'Refresc', price: 4.00, ingredients: 'Agua carbonatada, azúcar, saborizantes' };
const vins = { name: 'Vi', price: 22.00, ingredients: 'Uvas fermentadas' };
const champagne = { name: 'Champagne', price: 30.00, ingredients: 'Vino espumoso, levadura' };

// Creación de arrays para cada categoría
const primers = [amanida, espaguetis, macarrons, melo];
const segons = [costelles, entrecot, gambes, peix];
const postres = [coulant, macedonia, mango, tiramisu];
const begudes = [aigua, refrescos, vins, champagne];

// Selección de todas las cartas
const ticketComponent = document.querySelector('ticket-component');
const addButtons = document.querySelectorAll('.btn-add');
const infoButtons = document.querySelectorAll('.btn-info');

// Agregar evento de clic a cada botón "Afegir"
addButtons.forEach((addButton, index) => {
  addButton.addEventListener('click', () => {
    let category, item;
    if (index < primers.length) {
      category = 'Primers';
      item = primers[index];
    } else if (index < primers.length + segons.length) {
      category = 'Segons';
      item = segons[index - primers.length];
    } else if (index < primers.length + segons.length + postres.length) {
      category = 'Postres';
      item = postres[index - primers.length - segons.length];
    } else {
      category = 'Begudes';
      item = begudes[index - primers.length - segons.length - postres.length];
    }

    const quantity = 1; // Cantidad fija en 1

    const totalPrice = item.price * quantity;
    ticketComponent.addOrder({ name: item.name, price: totalPrice, category });
  });
});

// Agregar evento de clic a cada botón "Info"
infoButtons.forEach((infoButton, index) => {
  infoButton.addEventListener('click', () => {
    let item;
    if (index < primers.length) {
      item = primers[index];
    } else if (index < primers.length + segons.length) {
      item = segons[index - primers.length];
    } else if (index < primers.length + segons.length + postres.length) {
      item = postres[index - primers.length - segons.length];
    } else {
      item = begudes[index - primers.length - segons.length - postres.length];
    }

    const ingredients = item.ingredients;
    alert(ingredients);
  });
});