let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

console.log(`nom ?? valeur par défaut ->, ${nom ?? "valeur par défaut"}`);
console.log(`age ?? valeur par défaut ->, ${age ?? "valeur par défaut"}`);
console.log(`ville ?? valeur par défaut ->, ${ville ?? "valeur par défaut"}`);
console.log(`score ?? valeur par défaut ->, ${score ?? "valeur par défaut"}`);
console.log(`actif ?? valeur par défaut ->, ${actif ?? "valeur par défaut"}`);

console.log("-------------------------------------------------------------");

console.log(`nom ?? valeur par défaut ->,   ${nom || "valeur par défaut"}`);
console.log(`age ?? valeur par défaut ->,   ${age || "valeur par défaut"}`);
console.log(`ville ?? valeur par défaut ->, ${ville || "valeur par défaut"}`); 
console.log(`score ?? valeur par défaut ->, ${score || "valeur par défaut"}`);
console.log(`actif ?? valeur par défaut ->, ${actif || "valeur par défaut"}`);
 
console.log("-------------------------------------------------------------");

let defaut = "valeur par défaut";

let resultat;
if ((nom ?? defaut) === (nom || defaut))
{
    resultat = "même résultat";
} else {
    resultat = "résultat différent";
}
console.log(`nom : ?? et || -> ${resultat}`);


if ((age ?? defaut) === (age || defaut)) 
{
    resultat = "même résultat";
} else {
    resultat = "résultat différent";
}
console.log(`age : ?? et || -> ${resultat}`);

if ((ville ?? defaut) === (ville || defaut))
{
    resultat = "même résultat";
} else {
    resultat = "résultat différent";
}
console.log(`ville : ?? et || -> ${resultat}`);

if ((score ?? defaut) === (score || defaut))
{
    resultat = "même résultat";
} else {
    resultat = "résultat différent";
}
console.log(`score : ?? et || -> ${resultat}`);

if ((actif ?? defaut) === (actif || defaut))
{
    resultat = "même résultat";
} else {
    resultat = "résultat différent";
}
console.log(`actif : ?? et || -> ${resultat}`);