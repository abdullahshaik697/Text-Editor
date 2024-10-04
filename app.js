var fontPlus = document.getElementById("font-increase")
var fontMinus = document.getElementById("font-decrease")

var fontBold = document.getElementById("font-bold")
var fontItalic = document.getElementById("font-italic")

var fontColor = document.getElementById("font-color")

var fontFamily = document.getElementById("font-family")

var mainArea = document.getElementById("mainTextArea")

var fontSize = 30
function fontIncrease(){        //Increase Font
        mainArea.style.fontSize=(fontSize+1)+"px"
        fontSize=fontSize+1
}

function fontDecrease(){        //Increase Font
    mainArea.style.fontSize=(fontSize-1)+"px"
    fontSize=fontSize-1
}

var clr =["blue","red","black","yellow","green"]  //Color Array to Change Color of Font

function boldFont(){                        //Bold Font
    if(mainArea.style.fontWeight=="normal"){
        mainArea.style.fontWeight="Bold"
    }else{
        mainArea.style.fontWeight="Normal"
    }
}
function italicFont(){                      //Italic Font
    if(mainArea.style.fontStyle=="normal"){
        mainArea.style.fontStyle="Italic"
    }else{
        mainArea.style.fontStyle="Normal"
    }
}

                         

function setColor(){                        //Change color
    var rand = (Math.random()*5).toFixed();
    var oldNumber;                      // to assign random number value to oldNumber so color will not repeat  
    console.log(rand)                      //Generate Random Numbers to Change color of Font
    if(oldNumber==rand){
        setColor();
    }else{
        mainArea.style.color=clr[rand]
        oldNumber=rand;
    }
}

function setFamily(){               //Change family of font
    mainArea.style.fontFamily=fontFamily.value
}