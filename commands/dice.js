const ops = ["+", "-", "*", "/"];



/**
 * Parse the provided dice roll request
 * 
 * @param  dice 
 * @returns 
 */
function parseRoll(dice){
    let diceStr = dice.replace(" ", "");
    let diceArr = diceStr.split("d");
    let numDice = parseInt(diceArr[0]);
    let sideParse = getSides(diceArr[1]);
    let numSides = sideParse[0];
    let strInd = int(sideParse[1]);

    let totalArr = roll(numDice, numSides);
    let total = totalArr[0];
    let dispStr = "/r " + input + " = ("  + totalArr[1] + ")";

    if (strInd !== diceArr.length){
        curNum = "";
        curOp = diceArr[1];

        for(let x = (strInd + 1); x < diceArr[1].length; x++){
            if (ops.some(op => diceArr[1][x].includes(op))){
                total = doMath(total, parseInt(curNum), curOp);
                dispStr = dispStr + " " + curOp + " " + curNum;
                curNum = "";
                curOp = diceArr[x];
            }
            else{
                curNum = curNum + diceArr[x];
            }
        }

        total = doMath(total, parseInt(curNum), curOp);
        dispStr = dispStr + " " + curOp + " " + curNum + " = " + "**" + (total) + "**";
    }
    else{
        dispStr = dispStr + " = " + "**" + total + "**";
    }

    return dispStr;
}



/**
 * Get the number of sides on the requested dice
 * 
 * @param  input 
 * @returns 
 */
function getSides(input){
    let ind = 0;
    let intStr = "";

    for(let x = 0; x < input.length; x++){
        if (ops.some(op => input[x].includes(op))){
            break;
        }
        else{
            intStr = intStr + input[x];
        }
    }

    ind = ind + 1;
    let result = [int(intStr), ind];
    return result;
}


/**
 * Do any extra math requested on the dice result
 * 
 * @param  total 
 * @param  newVal 
 * @param  op 
 * @returns 
 */
function doMath(total, newVal, op){
    let result = "";
    
    if (op === '+'){
        result = total + newVal;
    }
    else if (op === '-'){
        result = total - newVal;
    }
    else if (op === '*'){
        result = total * newVal;
    }
    else if (op === '/'){
        result = total / newVal;
    }

    return result;
}



/**
 * Roll the dice
 * @param  numDice 
 * @param  numSides 
 * @returns 
 */
function roll(numDice, numSides){
    let total = 0;
    let rollStr = "";

    for (x = 0; x < numDice; x++){
        let r = randomInt(1, numSides);
        if (x === 0){
            rollStr = str(r);
        }
        else{
            rollStr = rollStr + "+" + str(r);
        }

        total += r;
    }

    return [total, rollStr];
}


module.exports = { parseRoll };