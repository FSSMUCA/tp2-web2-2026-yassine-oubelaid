let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];
let N = nombres.length;
for(let i = 0; i < N; i++)
{
    let n = nombres[i];
    switch(true)
    {
        case Number.isNaN(n):
            console.log(`${n} -> INVALIDE`);
            break;
        case n === Infinity || n === -Infinity:
            console.log(`${n} -> INFINI`);
            break;
        case n === 0 && 1/n === -Infinity:
            console.log(`${n} -> ZERO NEGATIF`);
            break;
        case Number.isInteger(n) && Number.isSafeInteger(n):
            console.log(`${n} -> ENTIER SUR`);
            break;
        case Number.isInteger(n) && !Number.isSafeInteger(n):
            console.log(`${n} -> ENTIER HORS LIMITES`);
            break;

        default:
            console.log(`${n} -> DECIMAL`);
    }
}