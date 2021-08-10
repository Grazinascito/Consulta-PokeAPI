const inputDigitado = document.querySelector("#poke");
const inputName = document.querySelector(".nomePoke");
const inputImg = document.querySelector(".imgPoke");
const inputHabilidade = document.querySelector(".habilidadePoke");

inputDigitado.addEventListener('change', () => {
    const feitaPromise = fetch(`https://pokeapi.co/api/v2/pokemon/${inputDigitado.value}/`);
    console.log(feitaPromise)

    
    
    feitaPromise.then((promiseDoBody) => {
        if(!promiseDoBody.ok){
            alert(`Pokemon não existe!`);
            return;
        }
        const body = promiseDoBody.json();

        body.then((bodyPronto) => {
            console.log(bodyPronto.name)

            inputName.textContent = bodyPronto.name;
            inputImg.src = bodyPronto.sprites.front_default;
            inputHabilidade.textContent = bodyPronto.abilities[0].ability.name;


        });
    });
});