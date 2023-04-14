//PRICE RANGE FUNCTIONALITY
// Get range input element, output element, and list element
const priceRange = document.getElementById('priceRange');
const priceOutput = document.getElementById('priceOutput');
const priceList = document.getElementById('priceList');

// Add event listener for input changes
priceRange.addEventListener('input', function() {
  // Get range value
  var rangeValue = parseInt(priceRange.value);

  // Update output element
  priceOutput.innerHTML = 'Price: &#8369;300 - &#8369;' + rangeValue;

  // Get list items and loop through them
  var listItems = priceList.getElementsByTagName('article');
  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
    var price = parseInt(listItem.getAttribute('data-price'));
    
    // Check if price is within range
    if (price <= rangeValue) {
      listItem.style.display = '';
    } else {
      listItem.style.display = 'none';
    }
  }
});

// Trigger input event to set initial output and filter
priceRange.dispatchEvent(new Event('input'));

//END

//SHOPS FUNCTIONALITY
const plants = [
    {
      id: 1,
      img: "/images/shop/plants/1.jpg",
      name: "bamboo palm",
      price: "1,500",
      categories: ["all plants", "indoor plants", "tall", "pet"],
    },
    {
      id: 2,
      img: "/images/shop/plants/2.jpg",
      name: "baston fern",
      price: "500",
      categories: ["all plants", "indoor plants", "table", "medium", "pet"],
    },
    {
      id: 3,
      img: "/images/shop/plants/3.jpg",
      name: "breath easy bundle",
      price: "650",
      categories: ["all plants", "indoor plants", "specials", "table", "sets"],
    },
    {
      id: 4,
      img: "/images/shop/plants/4.jpg",
      name: "brighten your day bundle",
      price: "750",
      categories: ["all plants", "indoor plants", "specials", "table", "sets"],
    },
    {
      id: 5,
      img: "/images/shop/plants/5.jpg",
      name: "butterfly palm",
      price: "1,200",
      categories: ["all plants", "indoor plants", "tall", "pet"],
    },
    {
      id: 6,
      img: "/images/shop/plants/19.jpg",
      name: "cactus",
      price: "800",
      categories: ["all plants", "medium"],
    },
    {
      id: 7,
      img: "/images/shop/plants/6.jpg",
      name: "dracaena anita",
      price: "1,200",
      categories: ["all plants", "indoor plants", "tall"],
    },
    {
      id: 8,
      img: "/images/shop/plants/7.jpg",
      name: "dwarf sansevieria | snake plant",
      price: "300",
      categories: ["all plants", "indoor plants", "specials", "table"],
    },
    {
      id: 9,
      img: "/images/shop/plants/20.jpg",
      name: "fiddle-leaf fig",
      price: "3,500",
      categories: ["all plants", "medium", "tall"],
    },
    {
      id: 10,
      img: "/images/shop/plants/8.jpg",
      name: "golden pothos",
      price: "300",
      categories: ["all plants", "indoor plants", "table"],
    },
    {
      id: 11,
      img: "/images/shop/plants/17.jpg",
      name: "heartleaf philodendron",
      price: "500",
      categories: ["all plants", "table"],
    },
    {
      id: 12,
      img: "/images/shop/plants/9.jpg",
      name: "heartleaf philodendron | special pot",
      price: "400",
      categories: ["all plants", "indoor plants", "specials", "table"],
    },
    {
      id: 13,
      img: "/images/shop/plants/25.jpg",
      name: "licuala grandis",
      price: "1,500",
      categories: ["all plants", "tall", "pet"],
    },
    {
      id: 14,
      img: "/images/shop/plants/21.jpg",
      name: "livistona",
      price: "1,200",
      categories: ["all plants", "indoor plants", "medium", "tall", "pet", "outdoor"],
    },
    {
      id: 15,
      img: "/images/shop/plants/26.jpg",
      name: "macArthur palm",
      price: "1,500",
      categories: ["all plants", "tall"],
    },
    {
      id: 16,
      img: "/images/shop/plants/11.jpg",
      name: "moonshine sansevieria | snake plant",
      price: "400",
      categories: ["all plants", "indoor plants", "specials", "table"],
    },
    {
      id: 17,
      img: "/images/shop/plants/12.jpg",
      name: "peace lily",
      price: "1,300;",
      categories: ["all plants", "indoor plants", "medium"],
    },
    {
      id: 18,
      img: "/images/shop/plants/18.jpg",
      name: "peperomia obtusifolia",
      price: "500",
      categories: ["all plants", "table", "pet"],
    },
        {
      id: 19,
      img: "/images/shop/plants/22.jpg",
      name: "philodendron giganteum",
      price: "1,500",
      categories: ["all plants", "indoor plants", "medium"],
    },
    {
      id: 20,
      img: "/images/shop/plants/23.jpg",
      name: "philodendron selloum",
      price: "1,000",
      categories: ["all plants", "indoor plants", "medium"],
    },
    {
      id: 21,
      img: "/images/shop/plants/27.jpg",
      name: "podocarpus macrophyllus 'Maki'",
      price: "1,000",
      categories: ["all plants", "tall", "outdoor"],
    },
    {
      id: 22,
      img: "/images/shop/plants/13.jpg",
      name: "potted plants collection",
      price: "500",
      categories: ["all plants", "indoor plants", "specials", "table", "gifts"],
    },
    {
      id: 23,
      img: "/images/shop/plants/24.jpg",
      name: "rhapis excelsa",
      price: "1,000",
      categories: ["all plants", "indoor plants", "medium", "pet"],
    },
    {
      id: 24,
      img: "/images/shop/plants/14.jpg",
      name: "snake plant bundle",
      price: "650",
      categories: ["all plants", "indoor plants", "specials", "table", "sets"],
    },
    {
      id: 25,
      img: "/images/shop/plants/15.jpg",
      name: "two hearts bundle",
      price: "750",
      categories: ["all plants", "indoor plants", "specials", "table", "sets"],
    },
    {
      id: 26,
      img: "/images/shop/plants/28.jpg",
      name: "various hebrs",
      price: "450",
      categories: ["all plants", "herbs"],
    },
  ];
  
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

//display all items when page  loads
window.addEventListener("DOMContentLoaded", function() {
    displayPlantItems(plants);
});

displayPlantItems = (plantItems) => {
    let displayPlants = plantItems.map(function(item) {

        return `<article class="plant-item" data-price=${item.price.replace(/,/g, "")};>
            <div class="img-container">
              <img src=${item.img} alt=${item.name} class="photo"/>
            </div>
            <div class="item-info">
                <p class="item-next">${item.name}</p>
                <p>&#8369;${item.price}</p>
            </div>
        </article>`;        
    });
    displayPlants = displayPlants.join("");

    sectionCenter.innerHTML = displayPlants;
}