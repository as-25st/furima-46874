const pay = () => {
  const publicKey = gon.public_key
  const payjp = Payjp(publicKey)

  const form = document.getElementById('charge-form')
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
};

window.addEventListener("turbo:load", pay);