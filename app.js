let textCategoryHome = document.querySelector(".home-category");
let textBrandHome = document.querySelector(".home-brands");
let textBrandComputers = document.querySelector(".category-brands");
let textCategoryComputers = document.querySelector(".category-categories");
let textProducts = document.querySelector(".main-products");

let pagenumber = 2;
let maxpages = 7;

let pageButtonFront = document.querySelector("#paginationFront");
let pageButtonPrevious = document.querySelector("#paginationPrevious");
let pageButtonNext = document.querySelector("#paginationNext");
let pageButtonBack = document.querySelector("#paginationBack");
let pageNumber = document.querySelector("#paginationNumber");

if (pageNumber !== null) {
  pageNumber.innerHTML = `<p>${pagenumber}</p>`;

  pageButtonNext.addEventListener("click", function () {
    if (pagenumber < maxpages) {
      pagenumber += 1;
      pageNumber.innerHTML = `<p>${pagenumber}</p>`;
    }
  });
  pageButtonPrevious.addEventListener("click", function () {
    if (pagenumber > 1) {
      pagenumber -= 1;
      pageNumber.innerHTML = `<p>${pagenumber}</p>`;
    }
  });
}

function writeProducts() {}

if (textCategoryHome !== null) {
  fetch("./json/categories-home.json")
    .then((response) => response.json())
    .then((categories) => {
      for (const category of categories) {
        textCategoryHome.innerHTML += `
        <a class="main-first-section-list-item nodec" href="${category.linkpath}">
        <img class="main-first-section-list-item-image" src="${category.imagepath}" alt="">
        <h1 class="main-first-section-list-item-title">${category.name}</h1>
        </a>
        `;
      }
    });
}

if (textBrandHome !== null) {
  fetch("./json/brands-home.json")
    .then((response) => response.json())
    .then((brands) => {
      for (const brand of brands) {
        textBrandHome.innerHTML += `
      <a class="main-second-section-list-item nodec" href="#">
      <img class="main-second-section-list-item-image" src="${brand.imagepath}" alt="">
      <h1 class="main-second-section-list-item-title">${brand.name}</h1>
      </a>
      `;
      }
    });
}

if (textBrandComputers !== null) {
  fetch("./json/brands-computers.json")
    .then((response) => response.json())
    .then((brands) => {
      for (const brand of brands) {
        textBrandComputers.innerHTML += `
      <a class="secondary-second-section-list-item nodec" href="#">
      <img class="secondary-second-section-list-item-image ${brand.class}" src="${brand.imagepath}" alt="">
      </a>
      `;
      }
    });
}

if (textCategoryComputers !== null) {
  fetch("./json/categories-computers.json")
    .then((response) => response.json())
    .then((categories) => {
      for (const category of categories) {
        textCategoryComputers.innerHTML += `<a class="main-first-section-list-item-alt2 nodec" href="${category.linkpath}">
      <img class="main-first-section-list-item-image-alt2" src="${category.imagepath}" alt="">
      <h1 class="main-first-section-list-item-title-alt2">${category.name}</h1>
      </a>
      `;
      }
    });
}

if (textProducts !== null) {
  fetch("./json/products-computers.json")
    .then((response) => response.json())
    .then((products) => {
      for (const product of products) {
        if (product.page == pagenumber) {
          console.log("correct page");
          console.log(product.page);
          textProducts.innerHTML += `
          <div class="product-card">
            <div class="product-image"><img class="w-150" src="${product.imagepath}" alt=""></div>
            <h1 class="product-text">${product.name}</h1>
          </div>`;
        }
      }
    });
}

// `
// <div class="main-first-section-list-item-alt">
// <img class="main-first-section-list-item-image-alt" src="${category.imagepath}" alt="">
// </div>
// ``
// <div class="main-third-section-list-item">
// <img class="main-third-section-list-item-image" src="${seenbefore.imagepath}" alt="test image">
// <h1 class="main-third-section-list-item-title">${seenbefore.name}</h1>
// </div>
// ``
// <div class="brand-filter-group">
// <input class="brand-filter-checkbox" type="checkbox" name="brand.${category.brand}" id="${category.brand}" value="${category.brand}">
// <label class="brand-filter-text" for="${category.brand}">${category.brand}</label>
// </div>
// `;
