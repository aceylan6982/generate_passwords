const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let passOne = document.getElementById("passOne-el")
let passTwo = document.getElementById("passTwo-el")
let getPasswords = document.getElementById("get-Passwords")
var scr1=[]
var scr2=[]


getPasswords.addEventListener("click", function () {

    for (let i = 0; i < 15; i += 1) {
        let randomindex1 = Math.floor(Math.random() * characters.length)
        scr1 += characters[randomindex1]
        let randomindex2 = Math.floor(Math.random() * characters.length)
        scr2 += characters[randomindex2]
    }

    passOne.textContent = scr1
    passTwo.textContent = scr2
})
    
