const radioMainContent = document.querySelector(".cards-wrap");
const radioFooterContent = document.querySelector(".footer");

fetch("https://teclead.de/recruiting/radios")
  .then(response => response.json())
  .then((data => {

     data.radios.map(radio => {

      const content = `
      <div class="row m-0 w-100">
          <div class="radio border-radio">
            <p>${radio.name}</p>
            <p>${radio.frequency}</p>
          </div>
         <div class="image-display hide-box">
         <i class="fas fa-minus-circle"></i>
          <img src="${radio.image}">
          <i class="fas fa-plus-circle"></i>
        </div>
      </div>`;

      const footerContent = `
        <div class="footer-text hide-box">
         <h2>Currently Playing</h2>
          <p>${radio.name}</p>
         </div>`;

     })


  });
