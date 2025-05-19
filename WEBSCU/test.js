alert('外部js檔');

function myfunction() {
    var p = document.getElementById('text');
    p.innerHTML = '<b>Nice try boiiiiiiiiii</b>';
}
//------------------------------
function addbook() {
    console.log("List element running");
    var list = document.getElementById('list');
    var book = document.getElementById('book');
    list.innerHTML += '<li>' + book.value + '</li>';
}
//------------------------------
function randomtest() {
    var randata = Math.random();
    document.getElementById("ex1").innerHTML = "Random Number is = " + randata;
    if (randata > 0.5) {
        document.getElementById("ex2").innerHTML = "TOOOOOOOO Bigggggggggggggg";
    } else {
        document.getElementById("ex2").innerHTML = "TOOOOOOOO Smalllllllllllll";
    }
}
//------------------------------
function timefunction() {
    var timehour = new Date().getHours();
    var minutes = new Date().getMinutes();

    document.getElementById("hr").innerHTML = "Hour = " + timehour + "<br>Minutes = " + minutes;

    if (timehour < 12) {
        document.getElementById('t').innerHTML = '上午';
    } else if (timehour === 12) {
        document.getElementById('t').innerHTML = '中午';             // 這裡代表現在是中午 12 點整
    } else {
        document.getElementById('t').innerHTML = '下午';
    }
}
//------------------------------
function weekfunction(){
    var dayweek = new Date().getDay();
    switch(dayweek){
    case 0:
        document.getElementById('w').innerHTML = 'Sunday';
        break;
    case 1:
        document.getElementById('w').innerHTML = 'Monday';
        break;
    case 2:
        document.getElementById('w').innerHTML = 'Tuesday';
        break;
    case 3:
        document.getElementById('w').innerHTML = 'Wednesday';
        break;
    case 4:
        document.getElementById('w').innerHTML = 'Thursday';
        break;
    case 5:
        document.getElementById('w').innerHTML = 'Friday';
        break;
    case 6:
        document.getElementById('w').innerHTML = 'Saturday';
        break;
    default:
        document.getElementById('w').innerHTML ='????????????????????????';

    }

}