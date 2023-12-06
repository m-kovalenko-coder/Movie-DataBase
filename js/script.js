'use strict';

const movieDB = {
        movies: [
            "Logan",
            "Justice League",
            "La La Land",
            "Whiplash",
            "Scott Pilgrim vs..."
        ]
      },
      promoAdv = document.querySelectorAll('.promo__adv img'),
      promoGenre = document.querySelector('.promo__genre'),
      promoBg = document.querySelector('.promo__bg'),
      promoList = document.querySelector('.promo__interactive-list');

promoAdv.forEach(i => i.remove()); // Deleted ads block

promoGenre.textContent = "Drama"; // Change genre 'Comedy' to 'Drama'

promoBg.style.backgroundImage = 'url("../img/bg.jpg")'; // Change background image

movieDB.movies.sort(); // Sort movie list alphabetically

// The list of films on the page is formed based on the movieDB object
// Film numbering introduced
promoList.innerHTML = ''; 

movieDB.movies.forEach((item, i) => {
    promoList.innerHTML += `
        <li class="promo__interactive-item">
            ${movieDB.movies[i]}
            <div class="delete"></div>
        </li>
    `;
});
    