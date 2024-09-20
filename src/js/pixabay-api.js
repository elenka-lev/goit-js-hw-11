export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '46051705-d89a9592eef32bc9448824550';

export function fetchImages(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query, 
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true'
    });
    return fetch(`${BASE_URL}?${params.toString()}`) // Добавлен .toString()
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}