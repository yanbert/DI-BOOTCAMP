// exercie 1
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
 // 1 Supprimez Banana du tableau.
 delete fruits[0];
// 2 Triez le tableau par ordre alphabétique.
fruits.sort();
console.log(fruits);
// 3 Ajoutez « Kiwi » à la fin du tableau.
fruits.push("kiwi");
console.log(fruits);
// 4 Supprimez « Apples » de la matrice. N’utilisez pas la même méthode que dans la partie 1.
fruits.splice(0,1)
console.log(fruits);
// 5  Triez le tableau dans l’ordre inverse.
fruits.reverse();
console.log(fruits)

// Exercice 2

/*****************************
Correcteur: Yannick GOUGUIA

Merci de revoir cet exercice
******************************/
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(fruits[2]);
