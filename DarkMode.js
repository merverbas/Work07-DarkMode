const darkButton = document.querySelectorAll("button")[0];
const newBody = document.body;

darkButton.addEventListener("click" , function(){
    darkButton.classList.toggle("dark");
    newBody.classList.toggle("darkmode");

    if(darkButton.classList.contains("dark")){        
        darkButton.innerText = "Aydınlık Mod"
    }
    else{
        darkButton.innerText = "Karanlık Mod";

    }  
    console.log(newBody);
    
});