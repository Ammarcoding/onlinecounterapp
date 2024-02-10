let countEL = document.getElementById("Count-el")
let saveEL = document.getElementById("saved-count")
let count = 0

function add() {
     count += 1
     countEL.textContent = count
}

function save(){
    let dashSp = count + " - "
    saveEL.textContent += dashSp
    countEL.textContent= 0
    count = 0
}

function reset(){
    countEL.textContent = 0
    saveEL.textContent = "previous entries: "
    count = 0

}