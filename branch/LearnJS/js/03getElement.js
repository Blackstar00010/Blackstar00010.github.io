var lis = document.getElementsByTagName('li');
for (var i=0; i<lis.length; i++) {
    lis[i].style.color='red';
}

var htmls = document.getElementsByClassName('html');
for (var i=0; i<htmls.length; i++) {
    htmls[i].style.color='blue';
}

var csss = document.getElementById('css');
csss.style.color='green';

var asdf = document.querySelector('.asdf');
asdf.style.color='yellow';

var qwer = document.querySelectorAll('.qwer');
for(var name in qwer) {
    qwer[name].style.color='orange';
}
