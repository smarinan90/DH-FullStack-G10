window.addEventListener("load", function () {
  // The idea of the script is ready, now I gotta communicate the shop side with the cart side of things and make everything respond to one another.

  // Script to verify if localStorage has already the item

  // Pending...

  // Script para agregar y eliminar artículos del cart
  // Requiring every input needed for the logic
  const addToCartButtons = document.getElementsByClassName("CTA");

  const addToCartClicked = async (event) => {
    try {
      const addButtonClicked = await event.target;
      const shopItem = await addButtonClicked.parentElement;
      const title = await shopItem.getElementsByClassName("albumName")[0]
        .innerText;
      const price = await parseInt(
        shopItem.getElementsByClassName("albumPriceInteger")[0].innerText
      );
      const imageSource = await shopItem.getElementsByClassName(
        "album-picture"
      )[0].src;
      let cart = (await localStorage.getItem("productsInCart")) || "[]";
      cart = await JSON.parse(cart);
      cart.push({ title, price, imageSource });
      localStorage.setItem("productsInCart", JSON.stringify(cart));
      addButtonClicked.innerText = "In cart";
      addButtonClicked.style.backgroundColor = "var(--m4)";
      addButtonClicked.disabled = true;
    } catch (errors) {
      console.log(errors);
    }
    // addItemToCart(title, price, imageSource);
    // updateCartTotal();
  };

  for (let i = 0; i < addToCartButtons.length; i++) {
    const addToCartButton = addToCartButtons[i];
    addToCartButton.addEventListener("click", addToCartClicked);
  }
});
