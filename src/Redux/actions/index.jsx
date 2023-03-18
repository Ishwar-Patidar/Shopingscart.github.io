export const incNumber = (Num) => { 
    return {
        type : "INCREMENT",
        payload : Num
    }
}
export const decNumber = (Num) => { 
    return {
        type : "DECREMENT",
        payload : Num
    }
}