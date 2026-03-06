let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];
let N = valeurs.length;
for (let i = 0; i < N; i++) {

  let v = valeurs[i];

  let chekValue;
  if (v === "") 
  {
    chekValue = "(chaine vide)";
  }
  else
  {
    chekValue = String(v);
  }

  if (v) {
    console.log(`${chekValue} -> truthy`);
  } else {
    console.log(`${chekValue} -> falsy`);
  }

}