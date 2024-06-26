let textCategoryHome = document.querySelector(".home-category");
let textBrandHome = document.querySelector(".home-brands");
let textBrandComputers = document.querySelector(".category-brands");
let textCategoryComputers = document.querySelector(".category-categories");
let textProductsComputers = document.querySelector(".main-products__computers");
let textProductsLaptops = document.querySelector(".main-products__laptops");
let filtersCategoryComputers = document.querySelector(
  ".brand-filters__computers"
);
let filtersCategoryLaptops = document.querySelector(".brand-filters__laptops");

let pagenumber = 1;
let maxpages;
let pageButtonFront = document.querySelector("#paginationFront");
let pageButtonPrevious = document.querySelector("#paginationPrevious");
let pageButtonNext = document.querySelector("#paginationNext");
let pageButtonBack = document.querySelector("#paginationBack");
let pageNumber = document.querySelector("#paginationNumber");

if (filtersCategoryComputers !== null) {
  fetch("./json/computer-filters.json")
    .then((response) => response.json())
    .then((filters) => {
      for (const filter of filters) {
        filtersCategoryComputers.innerHTML += `
          <div class="brand-filter-group">
          <input class="brand-filter-checkbox" type="checkbox" name="${filter.name}" id="${filter.name}"
          value="${filter.name}">
          <label class="brand-filter-text" for="${filter.name}">${filter.name}</label>
          </div>
          `;
      }

      let filterCheckbox = document.querySelectorAll(".brand-filter-checkbox");
      let selectedFilter2 = [];
      filterCheckbox.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
          if (checkbox.checked) {
            selectedFilter2 = checkbox.id;
            drawProductsComputers();
          } else {
            drawProductsComputers();
            selectedFilter2 = "";
          }
        });
      });
      if (textProductsComputers !== null) {
        let pagenumber = 1;
        let maxpages = 3;
        let open = false;
        function drawProductsComputers() {
          textProductsComputers.innerHTML = "";
          fetch("./json/products-computers.json")
            .then((response) => response.json())
            .then((products) => {
              for (const product of products) {
                if (product.page == pagenumber) {
                  if (
                    product.filters == selectedFilter2 ||
                    selectedFilter2 == ""
                  ) {
                    textProductsComputers.innerHTML += `
                    <div class="product-card">
                              <div class="product-image"><img class="w-150" src="${product.imagepath}" alt=""></div>
                              <h1 class="product-text">${product.name}</h1>
                              <section class="product-popup hidden">
                                <div class="product-description__review">
                                  <img class="close-button" id="close" src="./images/close.svg" alt="">
                                  <div class="product-description">
                                    <h1 class="product-description-text">Description</h1>
                                    <p>${product.description}</p>
                                  </div>
                                  <div class="product-review">
                                    <h1>Reviews</h1>
                                    <div class="review-stars">
                                      <h1 class="star" id="star-1">&#9733;</h1>
                                      <h1 class="star" id="star-2">&#9733;</h1>
                                      <h1 class="star" id="star-3">&#9733;</h1>
                                      <h1 class="star" id="star-4">&#9733;</h1>
                                      <h1 class="star" id="star-5">&#9734;</h1>
                                    </div>
                                    <p>${product.review}</p>
                                  </div>
                                </div>
                              </section>
                            </div>`;
                  }
                }
              }
              let productcard = document.querySelector(".product-card");
              let popup = document.querySelector(".product-popup");
              if (productcard !== null) {
                productcard.addEventListener("click", function () {
                  if (open == false) {
                    popup.classList.remove("hidden");
                    popup.classList.add("shown");
                    open = true;
                  }
                });
              }
              let closebutton = document.querySelector("#close");
              if (closebutton !== null) {
                closebutton.addEventListener("click", function () {
                  if (open == true) {
                    popup.classList.remove("shown");
                    popup.classList.add("hidden");
                    open = false;
                  }
                });
              }
            });
        }
        if (pageNumber !== null) {
          pageNumber.innerHTML = `<p>${pagenumber}</p>`;

          pageButtonNext.addEventListener("click", function () {
            if (pagenumber < maxpages) {
              pagenumber += 1;
              pageNumber.innerHTML = `<p>${pagenumber}</p>`;
              drawProductsComputers();
            }
          });
          pageButtonPrevious.addEventListener("click", function () {
            if (pagenumber > 1) {
              pagenumber -= 1;
              pageNumber.innerHTML = `<p>${pagenumber}</p>`;
              drawProductsComputers();
            }
          });
        }
        drawProductsComputers();
      }
    });
}
if (filtersCategoryLaptops !== null) {
  fetch("./json/laptop-filters.json")
    .then((response) => response.json())
    .then((filters) => {
      for (const filter of filters) {
        filtersCategoryLaptops.innerHTML += `
          <div class="brand-filter-group">
          <input class="brand-filter-checkbox" type="checkbox" name="${filter.name}" id="${filter.name}"
          value="${filter.name}">
          <label class="brand-filter-text" for="${filter.name}">${filter.name}</label>
          </div>
          `;
      }

      let filterCheckbox = document.querySelectorAll(".brand-filter-checkbox");
      let selectedFilter2 = [];
      filterCheckbox.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
          if (checkbox.checked) {
            selectedFilter2 = checkbox.id;
            drawProductsLaptops();
          } else {
            drawProductsLaptops();
            selectedFilter2 = "";
          }
        });
      });
      if (textProductsLaptops !== null) {
        let pagenumber = 1;
        let maxpages = 4;
        function drawProductsLaptops() {
          textProductsLaptops.innerHTML = "";
          fetch("./json/products-laptops.json")
            .then((response) => response.json())
            .then((products) => {
              for (const product of products) {
                if (product.page == pagenumber) {
                  if (
                    product.filters == selectedFilter2 ||
                    selectedFilter2 == ""
                  ) {
                    textProductsLaptops.innerHTML += `
                    <div class="product-card">
                      <div class="product-image"><img class="w-150" src="${product.imagepath}" alt=""></div>
                      <h1 class="product-text">${product.name}</h1>
                    </div>`;
                  }
                }
              }
            });
        }
        if (pageNumber !== null) {
          pageNumber.innerHTML = `<p>${pagenumber}</p>`;

          pageButtonNext.addEventListener("click", function () {
            if (pagenumber < maxpages) {
              pagenumber += 1;
              pageNumber.innerHTML = `<p>${pagenumber}</p>`;
              drawProductsLaptops();
            }
          });
          pageButtonPrevious.addEventListener("click", function () {
            if (pagenumber > 1) {
              pagenumber -= 1;
              pageNumber.innerHTML = `<p>${pagenumber}</p>`;
              drawProductsLaptops();
            }
          });
        }
        drawProductsLaptops();
      }
    });
}

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