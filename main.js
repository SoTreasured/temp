alert("Welcome to Treasure\'s Temperature Converter");
var unit = window.prompt("Choose an option\n\n1.Celsius to Fahrenheit\n2.Fahrenheit to Celsius")
if(unit!=1 && unit!=2){
    alert("Please choose from among the given options (1 or 2)")
}else{
    var digit = window.prompt("Input the digit to be converted"); 
}
if(unit==1){
    var f = digit*1.8+32
    alert("Success!!!\n\n" + digit + "C converted from Celsius to Fahrenheit is " + f + " F ")
}else if(unit==2){
    var c = (digit-32)/1.8
    alert("Success!!!\n\n" + digit + "F converted from Celsius to Fahrenheit is " + c + "C ")
}else{alert("Please choose a valid option next time!")}