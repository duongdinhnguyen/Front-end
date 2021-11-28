
function getProducts(){
  fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => console.log(data));
}
getProducts();