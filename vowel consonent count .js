let text = "hello world";
len = text.length;
let vowelcount = 0;
let consonentcount=0;
for(let i=0;i < len ;i++){
    
    if(text[i] == 'a'|| text[i] == 'e'|| text[i] == 'i' || text[i] == 'o' || text[i] == 'u'  ){
        vowelcount++;
    }
    else{
        consonentcount++;
    }
}
console.log("vowel",vowelcount);
console.log("consonent",consonentcount);

