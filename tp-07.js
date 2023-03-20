// Ecrire une fonction qui compte le nombre d'une lettre definie dans une chaine

// exemple : countLetter("e", "Hello There !"); // 3

function countLetter(letter, str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === letter.toLowerCase()) {
        count++;
      }
    }
    return count;
  }

  console.log(countLetter("e", "hello there")); // 3

  // str[i].toLowerCase() === letter.toLowerCase() vérifie si le caractère de la chaîne à l'indice i, converti en minuscule, est égal à la lettre spécifiée, également convertie en minuscule.

// Si cette condition est vraie, cela signifie qu'une occurrence de la lettre spécifiée a été trouvée dans la chaîne, et donc la variable count est incrémentée de 1.