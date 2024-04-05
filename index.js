let hist = document.getElementById("save-el");
console.log(hist)
let count = 0;
let countEl = document.getElementById("count-el");
function increment() {
    count +=1;
    countEl.innerText = count
}

function decrement(){
    count -=1;
    countEl.innertext = count
}

function save(){
    let countStr = count + "-"
    hist.innerText += countStr
}
// let uname = "prateek"
// let msg = "You're welcome here sir"

// let myGreeting = msg +', ' + uname + '!';

// console.log(myGreeting)