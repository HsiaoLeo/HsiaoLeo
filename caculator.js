function getp(op){
    switch(op){
        case '*':case '/':
            return 2;
        case '+':case '-':
            return 1;
        default:
            return 0;
    }
}
function infixToPofix(infix){
    let infixArr=infix.split(/\s+/);
    let operatorStack=[];
    let output=[];
    for(let op of infixArr){
        if(op==='('){
            operatorStack.push(op);
        }
        else if(op===')'){
            while(true){
                let p=operatorStack.pop();
                if(p==='(')break;
                output.push(p);
            }
        }
        else if(getp(op)>0){
            while(operatorStack.length>0){
                      let topop=operatorStack.pop();
                      if(getp(op)<=getp(topop)){
                          output.push(topop)
                      }
                      else{
                          operatorStack.push(topop);
                          break;
                      }
            }
            operatorStack.push(op)
        }
        else output.push(op);
    }
    while(operatorStack.length>0) output.push(operatorStack.pop());
    return output;
}
function opcal(st,operator){
    let operand2=st.pop();
    let operand1=st.pop();
    return eval(`${operand1}${operator}${operand2}`)
}
function postfixCal(pofix){
    let tempStack=[];
    for(let op of pofix){
<<<<<<< HEAD
        if(getp(op)>0) tempStack.push(opcal(tempStack,op))
=======
        if(getp(op)>0)tempStack.push(opcal(tempStack,op))
>>>>>>> b2cc120 (some condition optimization)
        else tempStack.push(Number(op));
    }
    return tempStack.pop();
}