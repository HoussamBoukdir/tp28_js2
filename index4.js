function somme(...t){
    let s=0;
    for(let i=0; i<t.length; i++){
        s+=t[i];
    }
    return s;
}

console.log(somme(2,3));
console.log(somme(4,3,6));
console.log(somme(2,13));

let t1=[1, 2, 4, 3];
console.log(somme(...t1));
