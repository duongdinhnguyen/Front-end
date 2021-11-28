// function getProducts(){
//     fetch('http://localhost:3000/products')
//         .then(response => response.json())
//         .then(data => {
//             var html =``;
//             data.forEach(element => {
//                 html += `<li>
//                     <h3>Sản phẩm thứ: ${element.id}</h3>
//                     <p>${element.name}</p>
//                 </li>`;
//             });
//             document.getElementById("comment-box").innerHTML = html;
//         });
// }

function getProducts(callback){
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(callback);
}
function showProducts(data){
    var html = ``;
    data.forEach(element => {
        html += `<li>
            <h3>Sản phẩm thứ : ${element.id}</h3>
            <p>${element.name}</p>
            <button onclick="removeProduct(${element.id})">Xóa</button>
        </li>`;

    });
    document.getElementById("comment-box").innerHTML = html;
}
function addProduct(){
    var submit = document.querySelector("input[type='button']");
    submit.onclick = function(event){
        var product = document.querySelector("input[name='product']");
        console.log(product.value);
        // vì product gồm key và value nên tạo data để truyền vào createProduct
        var data = {
            name : product.value,
        };
        creatProduct(data);
    }
}
function creatProduct(data){
    
    // create new 1 object from: data
    // using fetch-POST to create
    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            //console.log('Success:', data);
          })
}
// Bắt sự kiện click và truyền id vào để xử lý
function removeProduct(data){
        console.log(data);
        fetch(`http://localhost:3000/products/${data}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        })
        .then(response => response.json())
        .then(data => {
            //console.log('Success:', data);
          })
         
}

function startWeb(){
    getProducts(showProducts);
    addProduct();
    //setTimeout(removeProduct(),5000);
}
startWeb();