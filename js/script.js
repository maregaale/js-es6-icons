// funzioni
function injectIconInHtml(element) {
  // pulisco l'html di injectContainer
  injectContainer.html("");

  // inietto tutte le icone
  element.forEach((item) => {

    // destrutturo gli elementi dell'array
    let {name, family, prefix, category, color} = item;

    // definisco codice da iniettare in html
    let htmlInject = `
    <div>
      <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
      <div class="title">${name}</div>
    </div>
    `;

    injectContainer.append(htmlInject);
  });
}

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

  injectIconInHtml(icons);

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


  // ciclo sui Colori
  iconColors.forEach((color, index) => {
    // controllo la corrispondenza in posizione tra colori e categorie
    if (index == i) {
      for (var j = 0; j < iconsFiltered.length; j++) {
        iconsFiltered[j].color = iconColors[i];
      }
    }
  });
});

// 4. inietto in html
injectIconInHtml(icons);


// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

// 1. creo la select con le otpions riferite alle categorie
// seleziono la select in html
const select = $("#type");

// ciclo sulle categorie e inietto le options in select
iconCategories.forEach((item) => {
  let optionHtml = `<option value="${item}">${item}</option>`;

  select.append(optionHtml);
});

// 2. aggiungo l'evento alla selezione della categoria nelle select
select.change(function () {
  for (var i = 0; i < iconCategories.length; i++) {
    // controllo che il valore della option sia uguale a una delle categorie
    if ($(this).val() == iconCategories[i] ) {

      // filtro le icone in base alla categoria corrispondente al change
      var iconsFiltered = icons.filter( (item) => {

        // destrutturo gli elementi dell'array
        let {name, family, prefix, category} = item;

        return category == iconCategories[i];
      });

      injectIconInHtml(iconsFiltered);


    } else if ($(this).val() == "") {
      injectIconInHtml(icons);
    }
  }
});
