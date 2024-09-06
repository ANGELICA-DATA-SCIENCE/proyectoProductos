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
        <div class="card col style= padding:10px">
        <img src="${p.image}" class="card-img-top" style="objet-fit: contain;width: 100%; height: 250px; alt="${p.description}">
        <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">${p.brand}</p>
            <p class="card-text">${p.description}</p>
            <p class="card-text">${p.rating}</p>
            <a href="" class="btn btn-primary">Más informacion...</a>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">Más información...</button>
                </div>




            
        </div>
        </div>


        `);
    });
}//creatCards

getData();