const BASE_URL = 'https://api.thecatapi.com/v1/images/search/';
const BTN_CAT = document.getElementById('change_cat_button');

const loadCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json[0]['url'];
    } catch (e) {
        console.log(e.message);
    }
} 

const loadImg = async () => {
    const CAT_IMG = document.getElementById('cat');
    CAT_IMG.src = await loadCats();
}

BTN_CAT.addEventListener('click', loadImg);

loadImg();