var loveTextEl = document.querySelector("#lovetext");
var visits = document.querySelector("#visits");
var formElement = document.querySelector("form");
var sliderEl = document.querySelector("#formControlRange")
var slideValueTextEL = document.querySelector("#slideValue")
var progressBar = document.querySelector("#progress-bar")
slideValueTextEL.innerHTML = sliderEl.value;
animation = true;

formElement.addEventListener('submit', function (e) {
    e.preventDefault();
    if(animation){
        animation = false;
        loveTextGen();
    }
    var sample = document.getElementById("resst");
    if (!sample.paused) {

    } else {
        console.log("Debug, I hate the new autoplay policy.")
        beat();
    }
});

window.onload = function () {
    this.pageVisits();
    this.liefdeTekstStorageSet();
    this.beat();
};

function loveTextGen() {
    var myArray = [
        "Ik hou van jou!",
        "Ik voel me altijd fijn bij jou.",
        "Jij bent de mooiste die ik ken!",
        "Er zou alleen leegte in mijn leven zijn zonder jou.",
        "Niemand is zo lief als jij bent!",
        "Ik hoop dat wij samen oud gaan worden.",
        "Ik denk de heletijd aan jou!",
        "Ik mis je heel erg.",
        "Mijn allerliefste dat ben jij, hopelijk blijf je voor altijd bij mij.",
        "De wereld is veel mooier met jou!",
        "Zonder jou in mijn leven heb ik geen strefen.",
        "Ik wens jou de wereld toe!",
        "Jij bent mijn thuis.",
        "Als jij gelukkig bent, ben ik gelukkiger.",
        "Je lach klinkt als muziek in mijn oren.",
        "Ik herriner mij niets van het leven voor jou. Het is net alsof ik voor het eerst leef.",
        "Je hebt mijn hart gestolen en ik verwacht die nooit terug te krijgen.",
        "Telkens als ik over de toekomst denk, ben jij het enige waar ik zeker over ben.",
        "Dank je voor het ja zeggen tegenmij!",
        "Elke dag ontdek ik een nieuwe reden om van je te houden.",
        "Jij geeft betekenis aan mijn leven!",
        "Jij bent mijn hoop op een mooie toekomst!",
        "Jij bent zo schattig als je lacht!",
        "Je bent het beste wat mij ooit is overkomen.",
        "Nu ik je heb gevonden, wil ik je nooit meer verliezen.",
        "Je hoeft me niet te vangen want ik zou altijd op je vallen!",
        "Ik wou dat je me nu in mijn armen vast zou kunnen houden.",
        "Ik kan je gewoon niet uit mijn gedachten krijgen!",
        "Als er een ware bestaat dan ben jij dat voor mij!",
        "Je bent mijn betere helft!",
        "Is er ook iets waar je niet goed in bent?",
        "ik voel me veilig bij jou!",
        "Je kent mij beter dan wie dan ook.",
        "Jij bent alles wat ik wil en wat ik nodig heb!",
        "Ik ben zo verliefd op jou!",
        "Je kent de weg naar mijn hart.",
        "Jij betekent alles voor mij.",
        "Ik ben voor altijd de jouwe.",
        "Niemand kan jou ooit vervangen in mijn leven.",
        "Het enige wat ik van jou wil, ben jij.",
        "Je maakt me zo gelukkig!",
        "Ik hou van je, echt heeeel veel!",
        "Ik ben er trots op de jouwe te zijn",
        "Ik wil altijd voor je zorgen.",
        "Je bent zo'n goed persoon!",
        "Ik ben zo dankbaar dat onze paden zijn gekruist.",
        "Je bent alles voor mij.",
        "Je bent zuurstof voor mijn hart.",
        "Door jou weet ik wat echte liefde is.",
        "Ik ben door jou geïnspireerd.",
        "Jij bent de enige voor mij, voor altijd.",
        "Niets doet er toe als wij samen zijn.",
        "Ik wil je gelukkig maken!"
    ];
    var arrayGen = [];

    console.log(myArray);

    for (let i = 0; i < sliderEl.value; i++) {
        var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
        myArray = myArray.filter(function (e) { return e !== randomItem })
        randomItem = randomItem + new Array(1 + 1).join(' ');
        arrayGen.push(randomItem);
    }
    arrayGen[0].replace(/\s+/g, '');

    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
                loveTextEl.value = arrayGen.join("\n");
                liefdeTekstStorage(arrayGen);
                animation = true;
                loveTextEl.rows = "" + sliderEl.value;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

sliderEl.oninput = function () {
    slideValueTextEL.innerHTML = this.value;
    localStorage.setItem('sliderValue', this.value)
}

function pageVisits() {
    var localValueVisits = localStorage.getItem('visits');

    var localVisits = Number(localValueVisits);
    if (localVisits == "") {
        localVisits = 1;

        localStorage.setItem('visits', localVisits);
        visits.value = localVisits;
    } else {
        var newLocalVisits = localVisits + 1;

        localStorage.setItem('visits', newLocalVisits)
    }

}

function liefdeTekstStorage(arrayGen) {
    localStorage.setItem('love', JSON.stringify(arrayGen))
    loveTextEl.value = arrayGen.join("\n");
}


function liefdeTekstStorageSet() {
    var localValueLiefde = localStorage.getItem('love');
    var localSliderValue = localStorage.getItem('sliderValue')

    if (localValueLiefde == null) {
        loveAr = "Genereer een lief bericht!";

        loveTextEl.value = loveAr;
    } else {
        var arLove = JSON.parse(localValueLiefde);
        loveTextEl.value = arLove.join("\n");
    }

    if(localSliderValue == null){
        slideValueTextEL.innerHTML = 10;
        loveTextEl.rows = 10;
    } else {
        loveTextEl.rows = localSliderValue;
    }

}

function beat() {
    var sample = document.getElementById("resst");
    sample.volume = 0.02;
    try {
        sample.play();
    }
    catch (err) {
        console.log(err)
        console.log("Use the generate button to start playing the beat.")
    }
}
