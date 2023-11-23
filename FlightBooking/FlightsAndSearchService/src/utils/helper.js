function compareDate(date1String,date2String) {
    let date1 = new Date(date1String);
    let date2 = new Date(date2String);
    return date1.getTime()>date2.getTime();
}



module.exports = {
    compareDate
}