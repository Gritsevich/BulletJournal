function getDates(current) {
    var week= new Array(); 
    // Starting Monday not Sunday
    current.setDate((current.getDate() - current.getDay() +1));
    for (var i = 0; i < 7; i++) {
        week.push(
            new Date(current)
        ); 
        current.setDate(current.getDate() +1);
    }
    return week; 
}

module.exports = {
    getDates
}