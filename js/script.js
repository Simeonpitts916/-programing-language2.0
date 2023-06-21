window.onload = function() {
    const form = document.querySelector("form");
    form.onsubmit = (function(event) {
        event.preventDefault();
       
        let food = document.querySelector("input[type=radio][name='quest1']:checked").value;
        let drink = document.querySelector("input[type=radio][name='quest2']:checked").value;
        let stat = document.querySelector("input[type=radio][name='quest3']:checked").value;
        let powere = document.querySelector("input[type=radio][name='quest4']:checked").value;
        let shoe = document.querySelector("input[type=radio][name='quest5']:checked").value;

        let result;
        if (food === "1" && drink === "1" && stat === "1" && powere === "1" && shoe === "1") {
            result = "java";
        } else if (food === "2" && drink === "3" && stat === "2" && powere === "1" && shoe === "2") {
            result = "java";
        } else if (food === "3" && drink === "1" && stat === "1" && powere === "1" && shoe === "1") {
            result = "c#";
        } else (food === "1" && drink === "2" && stat === "3" && powere === "2" && shoe === "3"); {
            result = "python";
        }
        
        document.getElementById("answere").innerText = result
    });
}