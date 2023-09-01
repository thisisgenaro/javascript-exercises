const leapYears = function(year) {
    let ans = false;
    /*return year % 4 === 0 ? (year % 100 === 0 ? (year % 400 === 0) : false) : false;*/
    if(Number.isInteger(year))
    {
        if(year % 4 === 0)
        {
            if(year % 100 === 0 && year % 400 != 0)
            {
                return ans;
            }
            else
            {
                ans = true;
            }
        }
    }
    return ans;
};

// Do not edit below this line
module.exports = leapYears;
