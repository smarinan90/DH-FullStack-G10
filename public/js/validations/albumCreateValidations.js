window.addEventListener("load", () => {
  const form = document.getElementById("albumCreateForm");
  const firstName = document.getElementById("first_name");
  const releaseDate = document.getElementById("release_date");
  const price = document.getElementById("price");
  const stock = document.getElementById("stock");
  const discount = document.getElementById("discount");
  const coverImage = document.getElementById("cover_image");
  let errorList = document.getElementById("errors");

  const inputValidations = (event) => {
    let errors = [];
    if (firstName.value === "" || firstName.value == null) {
      errors.push("Please enter the album name");
    }
    if (releaseDate.value === "" || releaseDate.value == null) {
      errors.push("Please enter a valid release date");
    }
    if (price.value === "" || price.value == null) {
      errors.push("Please enter a valid price");
    }
    if (stock.value === "" || stock.value == null) {
      errors.push("Please enter the stock");
    }
    if (discount.value === "" || discount.value == null) {
      errors.push("Please enter the discount");
    }
    if (coverImage.value === "" || coverImage.value == null) {
      errors.push("Please enter the cover image");
    }
    if (errors.length > 0) {
      event.preventDefault();
      errorList.innerText = errors.join(" \n ");
    }
  };
  form.addEventListener("submit", inputValidations);
});
