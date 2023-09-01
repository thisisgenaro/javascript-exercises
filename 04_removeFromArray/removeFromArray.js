const removeFromArray = function(arr,...args) {
    let outArr = [];
    if(Array.isArray(arr))
    {
        for(let j = 0; j < arr.length; j++)
        {
            let inside = false;
            for(let i = 0; i < args.length; i++)
            {
                if(arr[j] === args[i])
                {
                    inside = true;
                }
            }
            if(!inside)
            {
                outArr.push(arr[j]);
            }
        }
    }

    return outArr;
};

// Do not edit below this line
module.exports = removeFromArray;
