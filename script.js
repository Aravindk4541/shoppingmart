
document.addEventListener("DOMContentLoaded", function () {
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");
  const buttons = document.querySelectorAll(".product-card button");

  let count = 0;
  let total = 0;

  if (localStorage.getItem("cartCount")) {
    count = parseInt(localStorage.getItem("cartCount"));
    total = parseFloat(localStorage.getItem("cartTotal"));
    cartCount.textContent = count;
    cartTotal.textContent = total.toFixed(2);
  }

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const productCard = this.parentElement;
      const priceText = productCard.querySelector("p").textContent;
      const price = parseFloat(priceText.replace("$", ""));

      count++;
      total += price;

      cartCount.textContent = count;
      cartTotal.textContent = total.toFixed(2);

      localStorage.setItem("cartCount", count);
      localStorage.setItem("cartTotal", total.toFixed(2));
    });
  });
});

function resetCart() {
  localStorage.removeItem("cartCount");
  localStorage.removeItem("cartTotal");
  document.getElementById("cart-count").textContent = "0";
  document.getElementById("cart-total").textContent = "0.00";
}
