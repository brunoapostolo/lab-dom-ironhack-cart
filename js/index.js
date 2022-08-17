// ITERATION 1

function updateSubtotal(product) {
  const quantity = product.querySelector(".quantity input");
  let subTotal = product.querySelector(".subtotal span");
  const preco = product.querySelector(".price span").textContent;
  const celular = product.querySelector(".subtotal")
  let thesubTotal = parseFloat(quantity.value)*parseFloat(preco);
  return subTotal.innerText=thesubTotal;

}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  //updateSubtotal(singleProduct);
  console.log(products);
  let totaltotal = 0
  products.forEach((element)=>{
    totaltotal += updateSubtotal(element) 
  })
  const totalAbsoluto = document.querySelector("#total-value span");
  totalAbsoluto.innerText=totaltotal;

  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

 
}
  
// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
