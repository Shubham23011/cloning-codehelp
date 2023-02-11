// using text animation in Babbar and Love
function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve , ms));
}
var phrases = ["Love" , "Babbar"];
var el = document.querySelector(".bb");
var sleepTime = 100;
var index = 0;
var loop = async() => {
    while(true){
        var word = phrases[index];
        for(var i = 0 ; i < word.length ; i++){
            el.innerText = word.substring(0 , i+1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime*10);
        for(var i = word.length ; i > 0 ; i--){
            el.innerText = word.substring(0 , i-1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime*5);
        if(index === phrases.length - 1){
            index = 0;
        }else{
            index++;
        }
    }
};
loop();