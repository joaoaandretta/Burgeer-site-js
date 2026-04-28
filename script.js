const showAllButtons = document.getElementById("showAll");
const mapButton = document.getElementById("map");
const reduceButton = document.getElementById("reduce");
const filterButton = document.getElementById("filter");

showAllButtons.addEventListener("click", () => {
    console.log("Mostrar tudo");
    
    const ul = document.querySelector("ul");
    
    menuOptions.forEach(produto => {
        const newLi = document.createElement("li");
        newLi.className = "item-price";
        newLi.innerHTML = `
            <img src="${produto.src}">
            <p>${produto.name}</p>
            <p class="item-price">R$ ${produto.price},00</p>
        `;
        ul.appendChild(newLi);
    });
    });

mapButton.addEventListener("click", () => {
    console.log("Mapear com desconto de 10%");
    
    const ul = document.querySelector("ul");
    ul.innerHTML = "";
    
    const precoComDesconto = menuOptions.map(produto => produto.price * 0.9);
    
    menuOptions.forEach((produto, index) => {
        const newLi = document.createElement("li");
        newLi.className = "item-price";
        newLi.innerHTML = `
            <img src="${produto.src}">
            <p>${produto.name}</p>
            <p class="item-price">R$ ${precoComDesconto[index].toFixed(2)}</p>
        `;
        ul.appendChild(newLi);
    });
});