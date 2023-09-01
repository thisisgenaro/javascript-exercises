const sumAll = function(num1,num2) {
    if(Number.isInteger(num1) && Number.isInteger(num2) && Math.min(num1,num2) >= 0)
    {
        let result = Math.min(num1,num2);
        for(let i = result + 1; i <= (Math.max(num1,num2)); i++)
        {
            result += i;
        }
        return result;
    }
    else
    {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
