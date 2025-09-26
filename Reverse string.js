let text = "Humaira khan";
let reverse =0 ;
len = text.length;
for(let i =text.length-1 ; i >=0 ; i--){
    reverse = reverse+text[i];

}
console.log("Original:", text);
console.log("Reversed:", reverse);
