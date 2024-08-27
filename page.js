// javascript


let francobolli = [
    {
        nome: "FrancobolloA",
        descrizione: "Vintage",
        anno: 1900,
        valore: 25
    },
    {
        nome: "FrancobolloB",
        descrizione: "Moderno",
        anno: 2020,
        valore: 20
    },
    {
        nome: "FrancobolloC",
        descrizione: "Raro",
        anno: 1942,
        valore: 50
    },
];


let francobolloPiuVecchio = francobolli[0];

francobolli.forEach(francobollo => {
    if (francobollo.anno < francobolloPiuVecchio.anno) {
        francobolloPiuVecchio = francobollo;
    }
});

let francobolloPiuValore = francobolli[0];

francobolli.forEach(francobollo => {
    if (francobollo.valore > francobolloPiuValore.valore) {
        francobolloPiuValore = francobollo;
    }
});


// scope solo all'interno dell'arrow fucntion ```console.log(francobollo);```


console.log(`Il francobollo più vecchio è: ${francobolloPiuVecchio.nome} - Anno: ${francobolloPiuVecchio.anno}`);
console.log(`Il francobollo con più valore è: ${francobolloPiuValore.nome} - Valore: ${francobolloPiuValore.valore}`);



