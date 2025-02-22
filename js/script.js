'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const   promoList = document.querySelector('.promo__interactive-list'),
            formAdd = document.querySelector('form.add'),
            formInput = formAdd.querySelector('.adding__input'),
            menuItem = document.querySelectorAll('.promo__menu-item'),
            movieDB = {
                movies: [
                    "Logan",
                    "Justice League",
                    "La La Land",
                    "Whiplash",
                    "Scott Pilgrim vs..."
                ]
            };

    const changeSomeElements = () => {
        document.querySelectorAll('.promo__adv img').forEach(i => i.remove()); // Deleted ads block
        document.querySelector('.promo__genre').textContent = "Drama"; // Change genre 'Comedy' to 'Drama'
        document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")'; // Change background image
        document.querySelectorAll('a').forEach(item => item.style.textDecoration = 'none') // Removes the underline from all anchor tags
    };

    // The list of films on the page is formed based on the movieDB object
    // Film numbering introduced

    formAdd.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = formInput.value.toUpperCase();
        const favorite = formAdd.querySelector('[type="checkbox"]').checked;
        
        if (newFilm) {
            if (newFilm.length > 21) newFilm = `${newFilm.substring(0,21)}...`;
            if (favorite) console.log('Add your favorite movie');
            movieDB.movies.push(newFilm);
        }

        e.target.reset();
        
        updateList(promoList, movieDB.movies);

    });

    function updateList(list, movies) { 

        list.innerHTML = ''; 
        movies.sort();

        movies.forEach((item, i) => {
            list.innerHTML += `
                <li class="promo__interactive-item">
                    ${i+1}. ${item}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                movies.splice(i, 1);
                updateList(promoList, movieDB.movies);
            })
        });

    };

    changeSomeElements();
    updateList(promoList, movieDB.movies);

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menuItem.forEach(li => li.classList.remove('promo__menu-item_active'));
            item.classList.add('promo__menu-item_active');
        })
    });

});