export const DEPOSITE = "DEPOSITE";
export const WITHDRAW = "WITHDRAW";
export const DEPOSITE_ASYNC = "DEPOSITE_ASYNC";
export const depositeMoney =(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:"DEPOSITE",
            payload:amount
        })
    }
}


export const withdrawMoney =(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:"WITHDRAW",
            payload:amount
        })
    }
}
