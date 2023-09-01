const repeatString = function(str,num) {

    let output = "";
    if(num === 0)
    {}
    else if(num < 0 || isNaN(num))
    {
        output = "ERROR"
    }
    else{
        for(let i=0 ;i < Math.abs(num); i++)
    {
        output += str;
    }
    }
    return output
};

// Do not edit below this line
module.exports = repeatString;
