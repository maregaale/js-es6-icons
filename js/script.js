// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];


// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

// 1. seleziono l'elemento dove iniettare nell'html
const injectContainer = $(".icons");

// 2. ciclo sull'array 'icons' e inietto in html
icons.forEach((item) => {
  // destrutturo gli elementi dell'array
  let {name, family, prefix, category} = item;

  // definisco codice da iniettare in html
  let htmlInject = `
  <div>
    <i class="${family} ${prefix}${name}"></i>
    <div class="title">${name}</div>
  </div>
  `;

  // inietto
  injectContainer.append(htmlInject);
});


// Milestone 2
// Coloriamo le icone per tipo

// 1. aggiungo l'array dei Colori
const iconColors = ["#00FFFF", "#CD853F", "#000080"];

// 2. determino l'array delle categorie prese una volta sola
// definisco l'array vuoto delle categorie
let iconCategories = [];

// ciclo sull'array icons
icons.forEach((item, i) => {
  // controllo che non venga presa più volte la stessa categoria
  if (!(iconCategories.includes(item["category"]))) {
    iconCategories.push(item["category"]);
  }
});

// 3. filtro attraverso le categorie
// ciclo sulle categorie
iconCategories.forEach((item, i) => {

  // filtro le icone in base alle categorie
  var iconsFiltered = icons.filter( (item) => {

    // destrutturo gli elementi dell'array
    let {name, family, prefix, category} = item;

    return category == iconCategories[i];
  });
  console.log(iconsFiltered);
});
