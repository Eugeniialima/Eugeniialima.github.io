const menus = [
    {
        'comida': "Hambúrguer de costela",
        'preco': 29.90,
        'ingredientes': "Pão australiano, Costelinha, Bacon, Queijo cheddar, Cebola caramelizada",
        'vegano': false,
        'imagem': "image/hamburguer.jpg",
        'video': "https://receitas.globo.com/regionais/rpc/estudio-c/receita-de-hamburguer-de-costela-de-um-jeito-simples-de-fazer-g.ghtml"
    }, {
        'comida': "Hambúrguer gourmet",
        'preco': 28.90,
        'ingredientes': "Pão brioche, Carne bovina, Bacon, Queijo cheddar, Cebola caramelizada",
        'vegano': false,
        'imagem': "image/hamburguerGourmet.png",
        'video': "https://www.youtube.com/watch?v=r9zS2evwoOo"
    }, {
        'comida': "Hambúrguer de frango",
        'preco': 25.90,
        'ingredientes': "Pão brioche, Filé de frango, Alface, Tomate, Queijo prato",
        'vegano': false,
        'imagem': "image/hamburguer_de_frango.png",
        'video': "https://www.youtube.com/watch?v=r9zS2evwoOo"
    }, {
        'comida': "Hambúrguer vegano",
        'preco': 26.90,
        'ingredientes': "Pão brioche, Hambúrguer de falafel, Alface, Tomate, Cebola",
        'vegano': true,
        'imagem': "image/hamburguerVegano.png",
        'video': "https://www.receitasnestle.com.br/receitas/hamburguer-vegetariano-de-aveia-e-quinoa"

    }, {
        'comida': "Hambúrguer americano",
        'preco': 26.90,
        'ingredientes': "Pão brioche, 2 smash burgers de 80g cada, cheddar, alface americana, picles de pepino e molho especial ",
        'vegano': true,
        'imagem': "image/hamburguersmash.png",
        'video': "https://www.receitasnestle.com.br/receitas/hamburguer-vegetariano-de-aveia-e-quinoa"

    }]

addEventListener('load', (event) => {

    montarItens(menus);

    //item 2
    function relatarMenu(menu) {
        let lanche = ""
        for (key in menu) {
            lanche += `${key}: ${menu[key]}\n`
        }
        return lanche

    }
    //item 4 
    function relatarArrayeString(menus, vegano) {
        let menuString = "";

        for (const menu of menus.filter(w => w.vegano === vegano)) {
            menuString += `${relatarMenu(menu)}\n`
        }

        return menuString
    }

    // Item 2 e 3
    for (const menu of menus) {
        console.log(relatarMenu(menu))
    }

    // Item 4
    const resultado = relatarArrayeString(menus, true)
    if (resultado.length === 0)
        alert('Nenhum menu encontrado')
});




// const mediaPreco = (preco + preco2 + preco3 + preco4) / 4
// console.log(`A média dos preço da lanchonete é R$${ mediaPreco }`)

// const verificarVegano = (vegano && vegano2 && vegano3 && vegano4)
// console.log(`Todos são veganos ? ${ verificarVegano }.`)

// console.log(`${ comida.toUpperCase() }
// R$ ${preco}
// Ingredientes:${ingredientes}
// É vegano?${vegano}`)

// console.log(`${comida2.toUpperCase()}
// R$${preco2}
// Ingredientes:${ingredientes2}
// É vegano?${vegano2}`)

// console.log(`${comida3.toUpperCase()}
// R$${preco3}
// Ingredientes:${ingredientes3}
// É vegano?${vegano3}`)

// console.log(`${comida4.toUpperCase()}
// R$${preco4}
// Ingredientes:${ingredientes4}
// É vegano?${vegano4}`)

function pesquisar(e) {
    const expressaoBusca = document.getElementById("expressaoBusca");

    montarItens(menus.filter(w => w.comida.includes(expressaoBusca.value)));
}

function montarItens(itens) {

    const conteiner = document.getElementsByClassName("conteiner-hamburg")[0];
    conteiner.innerHTML = "";
    for (const item of itens) {
        const divPrincipal = document.createElement("div");
        divPrincipal.classList.add("hamburguer");
        conteiner.appendChild(divPrincipal);

        const divLink = document.createElement("div");
        divLink.classList.add("hamburguer-link");
        divPrincipal.appendChild(divLink);

        const imagem = document.createElement("img");
        imagem.setAttribute("alt", "foto de hamburguer");
        imagem.setAttribute("src", item.imagem);
        divLink.appendChild(imagem);

        const a = document.createElement("a");
        a.setAttribute("href", item.video);
        a.setAttribute("target", "_blank")
        divLink.appendChild(a);
        const aTexto = document.createTextNode(item.comida);
        a.appendChild(aTexto);

        const listaCaracteristicas = document.createElement("ul");
        divPrincipal.appendChild(listaCaracteristicas);

        const preco = document.createElement("li");
        const precoTexto = document.createTextNode(`Preço:  ${item.preco}`);
        preco.appendChild(precoTexto);
        listaCaracteristicas.appendChild(preco);


        const ingredientes = document.createElement("li");
        const ingredientesTexto = document.createTextNode(`Ingredientes:  ${item.ingredientes}`);
        ingredientes.appendChild(ingredientesTexto);
        listaCaracteristicas.appendChild(ingredientes);

        const vegano = document.createElement("li");
        const veganoTexto = document.createTextNode(`Vegano:  ${item.vegano ? "sim" : "não"}`);
        vegano.appendChild(veganoTexto);
        listaCaracteristicas.appendChild(vegano);




    }
}

