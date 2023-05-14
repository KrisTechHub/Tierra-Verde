const categorySelect = document.querySelector('#catbtn-container');
  
  // Display initial products and pagination on page load
const showDiv = document.querySelector('.showDiv')
showDiv.addEventListener("click", () => {
    if (categorySelect.style.display === "flex") {
        categorySelect.style.display = "none";
    } else {
        categorySelect.style.display = "flex";
        categorySelect.style.flexDirection = "column";
    };


});



const categories = [];
for (const product of products) {
    for (const cat of product.categories) {
        const isExists = categories.includes(cat)
        if (!isExists) {
            categories.push(cat)
        };

    }
};


for (const cat of categories) {
    const optionBtn = document.createElement("button")
    optionBtn.append(cat)
    categorySelect.appendChild(optionBtn)

    optionBtn.classList.add("filterbtn");
    optionBtn.setAttribute("onclick", `showItems(${cat})`);
    optionBtn.setAttribute("data-category", cat);
    optionBtn.setAttribute("type", "button");

    console.log(cat)
}

const filterBtn = categorySelect.querySelector(".filterbtn");

function showItems(cat) {
    const items = categorySelect.getElementsByTagName("button");

    for (let i = 0; i < items.length; i++) {
        const itemCategory = items[i].getAttribute("data-category");

        if (itemCategory === cat) {
            items[i].style.display = "flex";
        } else {
            items[i].style.display = "none";
        }
    }
}




