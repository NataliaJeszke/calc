  function sumowanie() {
        if (document.querySelector("#sum")){
        let num1 = Number(document.querySelector("#num1").value);
        let num2 = Number(document.querySelector("#num2").value);
        let sum = num1 + num2;
        document.getElementById("wynik").value = sum;
        }
    }


    function odejmowanie(){
        if (document.querySelector("#sub")){
            let num1 = Number(document.querySelector("#num1").value);
            let num2 = Number(document.querySelector("#num2").value);
            let sub = num1 - num2;
            document.getElementById("wynik").value = sub;
            }
    }


    function mnozenie(){
        if (document.querySelector("#multi")){
            let num1 = Number(document.querySelector("#num1").value);
            let num2 = Number(document.querySelector("#num2").value);
            let multi = num1 * num2;
            document.getElementById("wynik").value = multi;
            }
    }

    function dzielenie(){
        if (document.querySelector("#divi")){
            let num1 = Number(document.querySelector("#num1").value);
            let num2 = Number(document.querySelector("#num2").value);
                if(num1===0 || num2===0){
                    alert("dzielisz przez zero")
                } else {
                    let divi = num1 / num2;
                    document.getElementById("wynik").value = divi;
                }
            }
    }
