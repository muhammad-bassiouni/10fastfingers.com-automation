var words = document.querySelector(".place").querySelectorAll("span")
var input_field = document.querySelector("input")
var word_idx = 0;
var interval_per_word = 700; // in milliseconds

var full_text = []
for(const word of words){
    full_text.push(word.innerText)
}
console.log(full_text)

function automate(){
    if(word_idx<full_text.length){
        input_field.value = full_text[word_idx] + ' '
        input_field.dispatchEvent(new KeyboardEvent("keyup", {
            keyCode: 32, // space key
            which: 32,
            shiftKey: false, 
            ctrlKey: false,  
            metaKey: false   
        }));
        word_idx++;
        setTimeout('automate()', interval_per_word);
    }
}
setTimeout('automate()', interval_per_word);
