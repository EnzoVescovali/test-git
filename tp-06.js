// Créer un tableau initial avec 2 véhicules
let vehicles = ['Tesla Model y', 'Renault Zoe'];

// Afficher le tableau
console.log('Tableau initial :', vehicles);

// Ajouter 2 nouveaux véhicules
vehicles.push('Mustang Mach-E', 'Polestar 2');

// Afficher le tableau
console.log('Tableau après ajout de 2 véhicules :', vehicles);

// Supprimer le véhicule à l'index 1
vehicles.splice(1, 1);

// Afficher le tableau
console.log('Tableau après suppression du véhicule à l\'index 1 :', vehicles);

// Trier le tableau par marques
vehicles.sort();

// Afficher le tableau
console.log('Tableau trié par marques :', vehicles);

// Supprimer le dernier véhicule
vehicles.pop();

// Afficher le tableau
console.log('Tableau après suppression du dernier véhicule :', vehicles);

// Les données:

// Tesla: Model y
// Renault: zoe
// Mustang: mach-e
// Polestar: Polestar 2


