document.getElementById("button").addEventListener("click", Roman)
let value;
let lgt;
let rtn1 = "";
let rtn2 = "";
let rtn3 = "";
let rtn4 = "";

function Roman(){
    value = document.getElementById("value").value;
    lgt = value.length;

    if (value <= 0){
         retnfinal = "";
    }
    else {

        switch (value[lgt-1]){
            case "1": rtn1 = "I"
            break;
            case "2": rtn1 = "II"
            break;
            case "3": rtn1 = "III"
            break;
            case "4": rtn1 = "IV"
            break;
            case "5": rtn1 = "V"
            break;
            case "6": rtn1 = "VI"
            break;
            case "7": rtn1 = "VII"
            break;
            case "8": rtn1 = "VIII"
            break;
            case "9": rtn1 = "IX"
            break;
        }

        switch (value[lgt-2]){
            case "1": rtn2 = "X"
            break;
            case "2": rtn2 = "XX"
            break;
            case "3": rtn2 = "XXX"
            break;
            case "4": rtn2 = "XL"
            break;
            case "5": rtn2 = "L"
            break;
            case "6": rtn2 = "LX"
            break;
            case "7": rtn2 = "LXX"
            break;
            case "8": rtn2 = "LXXX"
            break;
            case "9": rtn2 = "XC"
            break;
        }        

        switch (value[lgt-3]){
            case "1": rtn3 = "C"
            break;
            case "2": rtn3 = "CC"
            break;
            case "3": rtn3 = "CCC"
            break;
            case "4": rtn3 = "CD"
            break;
            case "5": rtn3 = "D"
            break;
            case "6": rtn3 = "DC"
            break;
            case "7": rtn3 = "DCC"
            break;
            case "8": rtn3 = "DCCC"
            break;
            case "9": rtn3 = "CM"
            break;
        }    

        switch (value[lgt-4]){
            case "1": rtn4 = "M"
            break;
            case "2": rtn4 = "MM"
            break;
            case "3": rtn4 = "MMM"
            break;
        }    
    }

    let rtnfinal = rtn4 + rtn3 + rtn2 + rtn1;
    document.getElementById("romanres").innerText = rtnfinal;

}