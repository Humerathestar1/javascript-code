 let val=121;
 let strVal = val.toString();
 let reversed = "";

 for(let i=strVal.length-1;i>=0;i--){
     reversed+=strVal[i];
 }
 if(reversed==strVal){

         console.log("It is palindrome");
 }
     else{
     console.log("It is not palindrome");
 }
