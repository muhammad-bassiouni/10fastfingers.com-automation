var words = document.querySelector("#row1").querySelectorAll("span")
var input_field = document.querySelector("#inputfield")
var word_idx = 0;
var interval_per_word = 250; // in milliseconds

var full_text = []
for(const word of words){
    full_text.push(word.innerText)
}
console.log(full_text)

function automate(){
    if(word_idx<full_text.length){
        input_field.value = full_text[word_idx] + ' '
        input_field.dispatchEvent(new KeyboardEvent("keyup", {
            keyCode: 32,
            which: 32, // space key
            shiftKey: false,
            ctrlKey: false,  
            metaKey: false  
        }));
        word_idx++;
        setTimeout('automate()', interval_per_word);
    }
}
setTimeout('automate()', interval_per_word);
