const productButtons = document.querySelectorAll("[data-product]");

productButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.getAttribute("data-product");
    const productPrice = button.getAttribute("data-price") || "";
    const message = `Hi Tomorrow, I want to enquire about ${productName} ${productPrice}. Please share availability and size options.`;

    window.open(
      `https://wa.me/919884766502?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  });
});
