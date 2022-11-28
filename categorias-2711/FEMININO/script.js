let LANÇAMENTOS = [
    {
        nome:"Caneca - Escolha Sua arte",
        preco:24.99,
        url_img:"./ImagensSublimoon/canecaPai.png",
    },
    {
        nome:"Caneca - Essa caneca pertence <br>ao melhor pai do mundo",
        preco:24.99,
        url_img:"./ImagensSublimoon/canecaArte.png",
    },
    {
        nome:"Camiseta Jesus",
        preco:39.99,
        url_img:"./ImagensSublimoon/camisetaJesus.png",
    },
    {
        nome:"Camisa infantil + Canetinha lavável",
        preco:15.20,
        url_img:"./ImagensSublimoon/camisaInfantil.png",
    },
    {
        nome:"Canecas personalizadas - 12 Uni.",
        preco:264.00,
        url_img:"./ImagensSublimoon/Canecas.png",
    },
    {
        nome:"Camiseta mãe 24h",
        preco:39.99,
        url_img:"./ImagensSublimoon/camisetaMae.png",
    },
    {
        nome:"Camiseta Casal - 2 Uni.",
        preco:79.99,
        url_img:"./ImagensSublimoon/camisetaCasal.png",
    },
    {
        nome:"Garrafinha térmica personalizada",
        preco:59.99,
        url_img:"./ImagensSublimoon/garrafinha.png",
    }
]  

let FEMININO = [
    {
        nome:"Camiseta Jesus",
        preco:39.99,
        url_img:"./ImagensSublimoon/camisetaJesus.png",
    },
    {
        nome:"Camiseta mãe 24h",
        preco:39.99,
        url_img:"./ImagensSublimoon/camisetaMae.png",
    },
    {
        nome:"Camiseta Casal - 2 Uni.",
        preco:79.99,
        url_img:"./ImagensSublimoon/camisetaCasal.png",
    },

]
let MASCULINO = [
    {
        nome:"Caneca - Escolha Sua arte",
        preco:24.99,
        url_img:"./ImagensSublimoon/canecaPai.png",
    },
    {
        nome:"Caneca - Essa caneca pertence <br>ao melhor pai do mundo",
        preco:24.99,
        url_img:"./ImagensSublimoon/canecaArte.png",
    },
    {
        nome:"Camiseta Casal - 2 Uni.",
        preco:79.99,
        url_img:"./ImagensSublimoon/camisetaCasal.png",
    },

]  
let INFANTIL = [
   
    {
        nome:"Camisa infantil + Canetinha lavável",
        preco:15.20,
        url_img:"./ImagensSublimoon/camisaInfantil.png",
    },
    {
        nome:"Garrafinha térmica personalizada",
        preco:59.99,
        url_img:"./ImagensSublimoon/garrafinha.png",
    }
]  
let CANECAS = [
    {
        nome:"Caneca - Escolha Sua arte",
        preco:24.99,
        url_img:"./ImagensSublimoon/canecaPai.png",
    },
    {
        nome:"Caneca - Essa caneca pertence <br>ao melhor pai do mundo",
        preco:24.99,
        url_img:"./ImagensSublimoon/canecaArte.png",
    },
    
    {
        nome:"Canecas personalizadas - 12 Uni.",
        preco:264.00,
        url_img:"./ImagensSublimoon/Canecas.png",
    },
]  
let PERSONALIZADOS = [
    {
        nome:"Caneca - Escolha Sua arte",
        preco:24.99,
        url_img:"./ImagensSublimoon/canecaPai.png",
    },
    {
        nome:"Camisa infantil + Canetinha lavável",
        preco:15.20,
        url_img:"./ImagensSublimoon/camisaInfantil.png",
    },
    {
        nome:"Canecas personalizadas - 12 Uni.",
        preco:264.00,
        url_img:"./ImagensSublimoon/Canecas.png",
    },
    {
        nome:"Garrafinha térmica personalizada",
        preco:59.99,
        url_img:"./ImagensSublimoon/garrafinha.png",
    }
]


function itens (){
   
    let produto = document.getElementById("itens_section");
    elemento_criado = document.createElement("article");
    elemento_criado.className= "item";
    
        FEMININO.map((val)=>{
            console.log(val.nome);
            produto.innerHTML+=`
            <div class= "produto">
                <img class="imagem" src="`+val.url_img+`"/>
                <p class="item.titulo"><strong>`+val.nome+`</strong></p>
                <article class="preco-linha">
                    <p class="item-title"><strong>Preço:</strong></p>
                    <P class="item-info">R$ `+val.preco+`</p>
                </article>
            </div>`;
    
        })
} 


itens();  