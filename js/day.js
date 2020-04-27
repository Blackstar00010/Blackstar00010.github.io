
var dt = new Date();
var today;
if (dt===1) {
    $('.mon').css('background-color', '#aaaaaa')
}
elseif (dt===2) {
    today="Tue"
}
elseif (dt===3) {
    today="Wed"
}
elseif (dt===4) {
    today="Thu"
}
elseif (dt===5) {
    today="Fri"
}
else {
    today="Weekend"
}
document.write("getDay() : " + dt.getDay() );
