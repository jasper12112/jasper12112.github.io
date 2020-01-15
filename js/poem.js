var loveTextEl = document.querySelector("#lovetext");
var formElement = document.querySelector("form");
var loveNameEL = document.querySelector("#inputName")

formElement.addEventListener('submit', function (e) {
    e.preventDefault();
    poem();
});

function poem(){
    var name = loveNameEL.value;
    var poems = [
        "Lieve "+name+", \nJij bent de leukste die ik ken, en ik lijk wel echt een fan. \nSamen met jou zijn is wat ik wil. En dat vind ik ook erg chill. \nSamen oud worden lijkt me ook leuk. En samen liggen in een deuk. \nIk hou van jou."
        ]
    loveTextEl.innerHTML = poems;
}