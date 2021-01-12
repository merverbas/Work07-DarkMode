const darkButton = document.querySelectorAll("button")[0];
const Newbody = document.querySelector("body");

darkButton.addEventListener("click" , function(){
    darkButton.classList.toggle("dark");

    if(darkButton.classList.contains("dark")){
        Newbody.style = 'background-color : #000000 ; color : #ffffff ';
        darkButton.innerText = "Aydınlık Mod"
    }
    else{
        Newbody.style = 'background-color : #ffffff ; color : #000000 ';
        darkButton.innerText = "Karanlık Mod";

    }  
    console.log(darkButton);
    
});