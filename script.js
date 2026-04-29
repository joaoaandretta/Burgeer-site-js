const showAllButtons = document.getElementById("showAll");
const mapButton = document.getElementById("map");
const reduceButton = document.getElementById("reduce");
const filterButton = document.getElementById("filter");

showAllButtons.addEventListener("click", () => {
    console.log("Mostrar tudo");
    
    const ul = document.querySelector("ul");
    ul.innerHTML = "";
    
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

reduceButton.addEventListener("click", () => {
    console.log("Somar todos os preços");
    
    const ul = document.querySelector("ul");
    ul.innerHTML = "";
    
    const totalPrice = menuOptions.reduce((acumulador, produto) => {
        return acumulador + produto.price;
    }, 0);
    
    const newLi = document.createElement("li");
    newLi.className = "item-price";
    newLi.innerHTML = `
        <p>A soma de todos os itens do menu é:</p>
        <p class="item-price">R$ ${totalPrice},00</p>
    `;
    ul.appendChild(newLi);
});

filterButton.addEventListener("click", () => {
    console.log("Filtrar itens veganos");
    
    const ul = document.querySelector("ul");
    ul.innerHTML = "";
    
    const produtosVeganos = menuOptions.filter(produto => produto.vegan === true);
    
    produtosVeganos.forEach(produto => {
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