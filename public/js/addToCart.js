window.addEventListener("load", function () {
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
  };

  for (let i = 0; i < addToCartButtons.length; i++) {
    const addToCartButton = addToCartButtons[i];
    addToCartButton.addEventListener("click", addToCartClicked);
  }
});
