function alertfunc() {
    location = "file:///Users/jamesrichard/github/Blackstar00010.github.io/branches/LearnJS/test.html?id=10#asdf";
    alert("protocol : " + location.protocol);
    alert("host : " + location.host);
    alert("pathname : " + location.pathname);
    alert("search : " + location.search);
    alert("hash : " + location.hash);
}
function confirmfunc() {
    if(confirm('ok?')) {
        alert('thnx');
    }
    else {
        alert('fuck off');
    }
}
function promptfunc() {
    if(prompt('name?') === "james") {
        alert('hello');
    }
    else {
        alert('fuck off');
    }
}
