window.onload = (function() {
    const form = document.querySelector("form");
    form.onsubmit = (function(event){
        event.preventDefault();
       
        let food = document.getElementById("input[type=radio][name='quest1']:checked").value;
        let drink = document.getElementById("input[type=radio][name='quest2']:checked").value;
        let stat = document.getElementById("input[type=radio][name='quest3']:checked").value;
        let powere = document.getElementById("input[type=radio][name='quest4']:checked").value;
        let shoe = document.getElementById("input[type=radio][name='quest5']:checked").value;

        let result;
        if (food === "a" && drink === "1" && stat === "1" && powere === "1" && shoe === "1") {
            result = "javaScript";
        } else if (food === "2" && drink === "3" && stat === "2" && powere === "1" && shoe === "2") {
            result = "javaScript";
        } else if (food === "3" && drink === "1" && stat === "1" && powere === "1" && shoe === "1") {
            result = "javaScript";
        } else (food === "1" && drink === "2" && stat === "3" && powere === "2" && shoe === "3"); {
            result = "javaScript";
        }
        
        document.getElementById("answere").innerText = result

        
    });
});