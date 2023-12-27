document.write("15.to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference."+"<br>");
function test15(n){
    if(n<=13){
        return (13-n);
    }
    else{
        return (n-13)*2;
    }
}
document.write("The number is : 20"+"<br>")
document.write("Answer: "+test15(20)+"<br>");