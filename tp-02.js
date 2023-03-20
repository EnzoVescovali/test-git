const users = [
    {
        firstname: "John",
        lastname: "DOE",
        age: 15
    },
    {
        firstname: "Bruce",
        lastname: "WAYNE",
        age: 80
    },
    {
        firstname: "John",
        lastname: "McLane",
        age: 60
    },
];

// Affiche les nom et prenom des utilisateurs ayant plus de 21 ans

for (let i = 0; i < users.length; i++){
// console.log(users[i]);
// console.log( users[i].age );
    if (users[i].age >= 21) {
        console.log( users[i]);
        // Pour juste voir le nom et prénom des personnes ayant plus de 21 ans
        console.log( `${users[i].firstname} ${users[i].lastname}`);
    }
}