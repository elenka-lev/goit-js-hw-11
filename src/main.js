import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from './js/pixabay-api';
import { renderImages, showLoader, hideLoader } from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
let lightbox = null;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputValue = form.elements.query.value.trim();

    if (inputValue === '') {
        iziToast.error({
            title: '',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            backgroundColor: '#EF4040',
            maxWidth: '432px',
            messageColor: '#fff',
            iconColor: '#fff'
        });
        return;
    };
    gallery.innerHTML = '';

    showLoader();

        fetchImages(inputValue)
        .then(images => {
            if (images.hits.length === 0) {
                iziToast.error({
                    title: '',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    backgroundColor: '#EF4040',
                    maxWidth: '432px',
                    messageColor: '#fff',
                    iconColor: '#fff'
                });
                return;
            } else {
                renderImages(images);
            }

            if (!lightbox) {
                lightbox = new SimpleLightbox('.gallery a', {
                    captionsData: 'alt',
                    captionPosition: 'bottom',
                    captionDelay: 250,
                });
            } else {
                lightbox.refresh();
            }
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            hideLoader();
            form.reset();
        });
});


