var a = '';
var b = '';
var num = [];
var ans;

//all the numbers and operators will be stores in an array "num using function "sendNum()"
function sendNum(digit) {
    num.push(digit);

    if (num.length != 1){
        a = '';
        document.getElementById('screen').innerHTML = a; //clearing the screen.

    }
    for(i=0; i<num.length; i++){
        a = a + num[i];    //concatenate the elements of the array "num" into a single string, which will be displayed on the screen
    }
        document.getElementById('screen').innerHTML = a;  //displaying the concatienated string
}

function equalTo(){
    document.getElementById('screen').innerHTML = '';

    for(i=0; i<num.length; i++){
        b += num[i];    //concatenating the array "num" into a single string.
    }
    ans = eval(b);

    document.getElementById('screen').innerHTML = ans;     //result display
    
    while (num.length > 0){
        num.pop();  //emptying the array "num"
    }
    num.push(ans.toString());
}

//when user presses AC, the funtion clearScr() is used
function clearScr(){
    document.getElementById('screen').innerHTML = '';

    while (num.length > 0){
        num.pop();  //emptying the array "num"
    }
    a = '';
    b = '';
}