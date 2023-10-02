let cont = document.querySelector('.container');
const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
const html = "";

let penis = async () => {

    const res = await axios.get(url);
    
    const result = res.data.filter((item) => {
        cont.insertAdjacentHTML("beforeend", `<img src="${item.thumbnailUrl}" alt="">`);
    });
}



penis();


