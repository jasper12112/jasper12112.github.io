var loveName1 = document.querySelector("#inputName1");
var loveName2 = document.querySelector("#inputName2");
var formElement = document.querySelector("form");
var loveLabel = document.querySelector("#lovelabel2");

window.onload = function () {

};

formElement.addEventListener('submit', function (e) {
    e.preventDefault();
    love();
    var sample = document.getElementById("resst");
    if (!sample.paused) {

    } else {
        console.log("Debug, I hate the new autoplay policy.")
    }
});

function love(){
    var name1 = loveName1.value;
    var name2 = loveName2.value;
    name1 = name1.toLowerCase();
    name2 = name2.toLowerCase();

    if((name1 == "jasper" && name2 == "shakira")||(name1 == "shakira" && name2 == "jasper") || (name1 == "adi" && name2 == "claudia") || (name1 == "claudia" && name2 == "adi")){
        finalScore = "∞";
    }
    else if((name1 == "jasper" && name2 != "shakira")||(name1 == "shakira" && name2 != "jasper")||(name1 != "shakira" && name2 == "jasper")||(name1 != "jasper" && name2 == "shakira")){
        finalScore = "0";
    }
    else{
        function getNum(A){
            outputNum=0;
            for(i=0;i<A.length;i++)
                {outputNum+=A.charCodeAt(i)}
            return outputNum
        }
        
        function trimAll(A)
        {
        while(A.substring(0,1)==" ")
            {A=A.substring(1,A.length)}

        while(A.substring(A.length-1,A.length)==" ")
            {A=A.substring(0,A.length-1)}
        return A
        }

        cnameone=trimAll(name1);
        cnametwo=trimAll(name2);
        cnameone=cnameone.toLowerCase();
        cnametwo=cnametwo.toLowerCase();

        totalNum=getNum(cnameone)*getNum(cnametwo);
        finalScore=totalNum%100;
        if(finalScore >= 96){
            finalScore = "∞";
        }
    }
    loveLabel.innerHTML = "Your changes: " + finalScore;
    console.log(finalScore)
}