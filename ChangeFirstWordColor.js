function changeColor(){
            var paraWords = document.getElementsByTagName('p');
            paraWords.forEach = [].forEach;
            paraWords.forEach(function (value){
            var firstWord = value.innerHTML.split(" ");
            var change = '<span style=color:'+randomColor()+'>'+firstWord[0]+'</span>';
			firstWord[0]=change;
			value.innerHTML=firstWord.join(" ");
            })
}
function randomColor() {
    return "#" + Math.floor((Math.random() * 1000000) + 1); 
}

(function() {
    changeColor();
})();