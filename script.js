let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
const quantityInput = document.getElementById('quantity');
const subtotalElement = document.getElementById('subtotal');
const cartSubtotalElement = document.getElementById('cart-subtotal');
const cartTotalElement = document.getElementById('cart-total');

quantityInput.addEventListener('input', updateCart);

function updateCart() {
  const quantity = parseInt(quantityInput.value);
  const price = 250000;
  const subtotal = price * quantity;

  subtotalElement.textContent = Rs. ${subtotal.toLocaleString()};
  cartSubtotalElement.textContent = Rs. ${subtotal.toLocaleString()};
  cartTotalElement.textContent = Rs. ${subtotal.toLocaleString()};
}

fetch('./api.json')
    .then(response => response.json())
    .then(data=> {
        data.forEach(post => {
            
        });
    })
