let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

let nomCorrige = nom.trim();
if(nomCorrige == ""){
    nomCorrige = "Inconnu";
}

let ageCorrige = parseInt(age);
let ageInfo = "";

if(isNaN(ageCorrige) || ageCorrige <= 0){
    ageInfo = "invalide";
}else{
    ageInfo = "valide";
}

let emailInfo = "";
let posArobase = email.indexOf("@");
let posPoint = email.indexOf(".", posArobase);

if(posArobase != -1 && posPoint != -1){
    emailInfo = "valide";
}else{
    emailInfo = "invalide : pas de point après @";
}

let scoreCorrige = parseInt(scoreJeu);
if(isNaN(scoreCorrige)){
    scoreCorrige = 0;
}

let adminBool = false;
if(estAdmin === "true"){
    adminBool = true;
}

let derniere = "";
if(derniereConnexion == null){
    derniere = "Jamais connecté";
}else{
    derniere = derniereConnexion;
}

let nb = parseInt(nombreConnexions);
let nbTexte = "";

if(nb === 0){
    nbTexte = "Aucune connexion";
}else{
    nbTexte = nb;
}

console.log("===== RAPPORT UTILISATEUR =====");
console.log('nom               : "' + nomCorrige + '" (corrigé : espaces supprimés)');
console.log("age               :", ageCorrige, "(" + ageInfo + ")");
console.log('email             : "' + email + '" (' + emailInfo + ')');
console.log('scoreJeu          :', scoreCorrige, '(extrait depuis "' + scoreJeu + '")');
console.log('estAdmin          :', adminBool, '(attention : Boolean("false") = true, conversion manuelle req)');
console.log('derniereConnexion : "' + derniere + '" (valeur par défaut via ??)');
console.log('nombreConnexions  : "' + nbTexte + '" (0 après conversion)');
console.log("===============================");