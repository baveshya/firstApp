function randomiseParagraphColor() {
    var paraArray = document.getElementsByTagName('p');
    // or can also do paraArray.forEach = [].forEach as paraArray doesnt have forEach method by default
    [].forEach.call(paraArray, function(value, index) {
        value.style.color = randomColor();
    });
}

function randomColor() {
    return "#" + Math.floor((Math.random() * 1000000) + 1); 
}

(function() {
    randomiseParagraphColor();
})();
