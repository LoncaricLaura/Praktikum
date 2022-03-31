let myYear = {
     0: 0,
     1: 31,
     2: 59, 
     3: 90, 
     4: 120, 
     5: 151,
     6: 181, 
     7: 212,
     8: 243,
     9: 273,
     10: 304, 
     11: 334,
     12: 365
};

function dayOfYear( year, month, day) {
    return day + myYear[month-1] + (month > 2 && year % 4 == 0 ? 1 : 0)
}

module.exports = dayOfYear

  