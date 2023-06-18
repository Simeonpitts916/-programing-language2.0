window.onload = function() {
    const form = document.querySelector("form");
    form.onsubmit = function(event){
        event.preventDefault();
       
        let food = document.getElementById("input[type=radio][name='quest1']:checked").value;
        let drink = document.getElementById("input[type=radio][name='quest2']:checked").value;
        let stat = document.getElementById("input[type=radio][name='quest3']:checked").value;
        let powere = document.getElementById("input[type=radio][name='quest4']:checked").value;
        let shoe = document.getElementById("input[type=radio][name='quest5']:checked").value;

        
        
        
    }
}