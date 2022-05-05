//to see what is written in history paragraph with innerHTML
function getHistory(){
    return document.getElementById("history-value").innerText;

}
//alert(getHistory("to check its working or not"));

function printHistory(num){
    document.getElementById("history-value").innerText=num;
}  //printHistory("9*9+6");



  function getOutput(){
    return document.getElementById("output-value").innerText;
}



//to see what is written in output paragraphfunction 



// function printOutput(){
//     return document.getElementById("output-value").innerText;

// }
function printOutput(num){
       //we can't write  <--printOutput("");--> statement outside of this fun other wise it will make the output blank
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        //make output with comma separated
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
    
}  //printOutput(568);
function getFormattedNumber(num){
    if(num=="-"){
        return "";

    } //for -ve number can be back-spaced

    
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
} // printOutput("58952355");==>output will be==>58,952,355


//to make actual operation we need without comma numbers
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
//alert(reverseNumberFormat(getOutput()));


var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener("click",function(){
       if(this.id=="clear"){
           printHistory("");
           printOutput("");
       }
      else if(this.id=="backspace"){
        var output=reverseNumberFormat(getOutput()).toString();
       
             if(output){ //if output has a value
               output=output.substr(0,output.length-1);
               printOutput(output);
           }
       }
       else{
           var output=getOutput();
           var history=getHistory();
           if(output=="" && history!=""){
               if(isNaN(history[history.length-1])){
                   history=history.substr(0,history.length-1);
               }
           }
          if(output!="" || history!=""){
               output=(output=="")? output:reverseNumberFormat(output); //ternary opr..
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else {
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");

                }
           }

       }
       
    });
}

var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener("click",function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){
            output=output+this.id; // as we adding number like string
            printOutput(output);
        }
    });
}





