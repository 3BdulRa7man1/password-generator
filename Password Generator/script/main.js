let passwordElements = [
    [1,2,3,4,5,6,7,8,9,0],
    ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    ['!','@','#','$','%','^','&','*','_','-','+']
];

// the generate button
let startBtn =  document.getElementById('generate');

// to prevent the page from reloading
startBtn.addEventListener('click',(event)=>{
    event.preventDefault();
});

// adding an event listner to start the function when the button clicked
startBtn.addEventListener('click',(passwordLength)=>{

    passwordLength = document.getElementById('passwordLength').value;
    console.log(passwordLength);

    let thePassword = '' ;    
        
    for(let i = 0; i <= passwordLength-1; i++){

        let randomForType = Math.floor(Math.random() * 4);
        console.log(randomForType);
        

        randomChoose();
        function randomChoose(){
            
            let theChoosedType =  passwordElements[randomForType];
            console.log(theChoosedType);

            if (theChoosedType == passwordElements[0]) {
                let randomForNums =  Math.floor(Math.random() * 10);
                console.log(randomForNums);
        
                let theChoosedCharacter =  theChoosedType[randomForNums];
                thePassword+=theChoosedCharacter;
            }
            else if(theChoosedType == passwordElements[1]) {
                let randomForCapitalChars = Math.floor(Math.random() * 26);
                console.log(randomForCapitalChars);

                let theChoosedCharacter =  theChoosedType[randomForCapitalChars];
                thePassword+=theChoosedCharacter;
            }
            else if(theChoosedType == passwordElements[2]) {
                let randomForSmallChars = Math.floor(Math.random() * 26);
                console.log(randomForSmallChars);
        
                let theChoosedCharacter =  theChoosedType[randomForSmallChars];
                thePassword+=theChoosedCharacter;
            }
            else if (theChoosedType == passwordElements[3]) {
                let randomForSympols = Math.floor(Math.random() * 11);
                console.log(randomForSympols);
                let theChoosedCharacter =  theChoosedType[randomForSympols];
                thePassword+=theChoosedCharacter;
            }
            
        }
        
    }
    
    console.log(thePassword)
    let passwordPlace = document.getElementById('passwordPlace');
    passwordPlace.innerText = thePassword;
});
