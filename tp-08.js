// écrire un document html

// -> une balise <div id="parent"
// -> bouton <button xxxx>Click Me</button>

const bouton = document.querySelector('#boutonUwu')
const parent = document.querySelector('#parent')

let compteurDeClics = 0

parent.innerHTML = "Tu m'as cliqué  "+ compteurDeClics + " dessus UwU";

bouton.addEventListener('click', () => {
    compteurDeClics++;
    parent.innerHTML = "Tu m'as cliqué  "+ compteurDeClics + " dessus UwU";
})

