let type = "";
let search = document.getElementById("searchInput");
let select = document.querySelector("#selecter");
let option = document.querySelectorAll("option");
let filterbtn = document.getElementById("Filter-btn");
let rightDiv = document.querySelector("#pok");
let reSet = document.getElementById("resetbtn");

let pokeArr = [];
for (let i = 1; i <= 151; i++) {
    let apiUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
    pokeArr.push(fetch(apiUrl).then(res => res.json()));
}
let imgLink = [];
for (let i = 1; i <= 151; i++) {
    imgLink.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${i}.png`);
}

let types = [
    "Grass", "Fire", "Water", "Bug", "Normal", "Poison", "Electric", "Ground", "Fairy", "Fighting", "Psychic", "Rock", "Ghost", "Ice", "Dragon"
];

select.addEventListener("change", () => {
    type = select.value;
});

filterbtn.addEventListener("click", () => {
    pokeArr.forEach((e) => {
        rightDiv.innerHTML = "";
        e.then(res => {
            if (type.toLowerCase() === res.types[0].type.name) {
                let div = document.createElement("div");
                div.setAttribute("id", "card");
                div.setAttribute("class", `${res.types[0].type.name}`);
                let img = document.createElement("img");
                img.src = res.sprites.front_default;
                let p = document.createElement("p");
                p.innerText = res.name.toUpperCase();
                p.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
                let group = document.createElement("p");
                group.innerText = res.types[0].type.name.toUpperCase();
                group.style.fontFamily = " 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
                group.style.fontWeight = "700";
                group.style.backgroundColor = "White";
                group.style.borderRadius = "20px";
                group.style.padding = "10px"
                rightDiv.append(div);
                div.append(img);
                div.append(p);
                div.append(group);
            }

        });

    });
})

async function loded() {
    rightDiv.innerHTML = "";
    types.forEach((e) => {
        select.innerHTML += `<option value=${e}>${e}</option>`;
    })


    pokeArr.forEach((e) => {
        e.then(res => {
            let div = document.createElement("div");
            div.setAttribute("id", "card");
            div.setAttribute("class", `${res.types[0].type.name}`);
            let img = document.createElement("img");
            img.src = res.sprites.front_default;
            let p = document.createElement("p");
            p.innerText = res.name.toUpperCase();
            p.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
            let group = document.createElement("p");
            group.innerText = res.types[0].type.name.toUpperCase();
            group.style.fontFamily = " 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
            group.style.fontWeight = "700";
            group.style.backgroundColor = "White";
            group.style.borderRadius = "20px";
            group.style.padding = "10px"
            rightDiv.append(div);
            div.append(img);
            div.append(p);
            div.append(group);
            // console.log(res);
        });

    });

}

window.onload = () => loded();

function myDebouncing(call, delley) {
    let timer;
    return function () {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            call();
        }, delley);
    }
}

let searchIt = myDebouncing(() => {
    pokeArr.forEach((e) => {
        rightDiv.innerHTML = "";
        e.then(res => {
            if (search.value.toLowerCase() == res.types[0].type.name) {
                let div = document.createElement("div");

                div.setAttribute("id", "card");
                div.setAttribute("class", `${res.types[0].type.name}`);
                let img = document.createElement("img");
                img.src = res.sprites.front_default;
                let p = document.createElement("p");
                p.innerText = res.name.toUpperCase();
                p.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
                let group = document.createElement("p");
                group.innerText = res.types[0].type.name.toUpperCase();
                group.style.fontFamily = " 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
                group.style.fontWeight = "700";
                group.style.backgroundColor = "White";
                group.style.borderRadius = "20px";
                group.style.padding = "10px"
                rightDiv.append(div);
                div.append(img);
                div.append(p);
                div.append(group);
            } else if (search.value.toLowerCase() == res.name) {
                let div = document.createElement("div");

                div.setAttribute("id", "card");
                div.setAttribute("class", `${res.types[0].type.name}`);
                let img = document.createElement("img");
                img.src = res.sprites.front_default;
                let p = document.createElement("p");
                p.innerText = res.name.toUpperCase();
                p.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
                let group = document.createElement("p");
                group.innerText = res.types[0].type.name.toUpperCase();
                group.style.fontFamily = " 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
                group.style.fontWeight = "700";
                group.style.backgroundColor = "White";
                group.style.borderRadius = "20px";
                group.style.padding = "10px"
                rightDiv.append(div);
                div.append(img);
                div.append(p);
                div.append(group);
            }
        });
    });
}, 1000);

