let divData = document.getElementById("divData");

function getData() {
    const promesa = fetch ("https://freetestapi.com/api/v1/products", {method: "GET"});
    promesa.then((response) => {
        response.json().then(
            (data)=>{
                console.log(data);
                createCards(data);
            }).catch((error)=> console.log("Problema con el JSON", error));
    }).catch((err)=> console.log("Existió un problema con la solicitud", err));
    
}// getData


function createCards(products) {
    console.log(products.length);
    // console.log(products[0].name);    //solo fue prueba para verificar en la consola.
    //crear una Card por cada producto con sus datos esenciales
    //de preferencia forEach:  name, description, image, price
    products.forEach(p => {
       
        divData.insertAdjacentHTML("beforeend", `
        <div class="card col-sm style= padding:10px">
        <img src="${p.image}" class="card-img-top" style="objet-fit: contain;width: 100%; height: 250px; alt="${p.description}">
        <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">${p.brand}</p>
            <p class="card-text">${p.description}</p>
            <p class="card-text">${p.rating}</p>
            <button type="button" style="align-self: flex-end;" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal_${p.id}">
            Más información...
            </button>
        </div>
        </div>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal_${p.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${p.name}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                ${p.description}
                <p class ="text-end">$ ${p.price} USD </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
        </div>
        </div>
`);
    });
}//creatCards

getData();