// Ecrire une fonction permettant de générere un mot de passe
// inspiré de : https://stackoverflow.com/questions/1497481/javascript-password-generator

// Les paramètres à prendre en entré sont:
// - Longueur du mot de passe finale (number)
// - Integration des majuscules (bool)
// - Integration des nombre de 0 à 9 (bool)
// - Integration des caractères spéciaux ($=+;.!-_§|) (bool)

// Exemple d'utilisation: 
// generatePassword(16, true, true, false);


function generatePassword(longueur, majuscules, chiffres, caracteresSpeciaux) {
    let caracteres = "abcdefghijklmnopqrstuvwxyz";
    let password = "";
    if (majuscules) {
      caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (chiffres) {
      caracteres += "0123456789";
    }
    if (caracteresSpeciaux) {
      caracteres += "$=+;.!-_§|";
    }
    for (let i = 0; i < longueur; i++) {
      let index = Math.floor(Math.random() * caracteres.length);
      password += caracteres.charAt(index);
    }
    return password;
  }
  
  // Exemple d'utilisation : génère un mot de passe de 16 caractères avec des majuscules et des chiffres
  let motDePasse = generatePassword(16, true, true, false);
  console.log(motDePasse);