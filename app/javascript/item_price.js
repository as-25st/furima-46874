function calcPrice (){
  const priceInput = document.getElementById("item-price");
  const addTaxDom = document.getElementById("add-tax-price");
  const profitDom = document.getElementById("profit");

  priceInput.addEventListener("input", () => {
    const inputValue = priceInput.value;
    const price = Number(inputValue);
    const tax = Math.floor(price * 0.1);
    const profit = Math.floor(price - tax);
    addTaxDom.textContent = tax.toLocaleString();
    profitDom.textContent = profit.toLocaleString();
  });
};

window.addEventListener('turbo:load', calcPrice);
window.addEventListener("turbo:render", calcPrice);