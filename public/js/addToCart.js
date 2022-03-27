// Script para agregar articulos al carrito

const button = document.querySelectorAll(".CTA");
for (let index = 0; index < button.length; index++) {
  const addToCartButton = button[index];
  addToCartButton.addEventListener("click", function (event) {
    let buttonClicked = event.target;
    buttonClicked.style.backgroundColor = "green";
    // alert("product added successfully");
  });
}
