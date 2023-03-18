

const Add = (a,b) => {
let Sum = a+b;
return Sum
}
const Sub = (a,b) => {
let Sub = a-b;
return Sub
}
const Div = (a,b) => {
let Div = a/b;
Div = Div.toFixed(2)
return Div
}
const Mult = (a,b) => {
let Mult = a*b;
return Mult
}

export {Add, Sub, Div, Mult}