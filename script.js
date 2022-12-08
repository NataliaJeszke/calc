function sumowanie() {
    if (document.querySelector("#sum")){
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);
    let sum = num1 + num2;
    // document.getElementById("wynik").value=sum;<-- rozwiązanie zadanie numer 1
            const para = document.createElement("p");
            const node = document.createTextNode(`${num1}+${num2}=${sum}`);
            para.appendChild(node);
            const element = document.getElementById("div1");
            element.appendChild(para);
    }
}


function odejmowanie(){
    if (document.querySelector("#sub")){
        let num1 = Number(document.querySelector("#num1").value);
        let num2 = Number(document.querySelector("#num2").value);
        let sub = num1 - num2;
        // document.getElementById("wynik").value = sub;<-- rozwiązanie zadanie numer 1
        const para = document.createElement("p");
        const node = document.createTextNode(`${num1}-${num2}=${sub}`);
        para.appendChild(node);
        const element = document.getElementById("div1");
        element.appendChild(para);
        }
}


function mnozenie(){
    if (document.querySelector("#multi")){
        let num1 = Number(document.querySelector("#num1").value);
        let num2 = Number(document.querySelector("#num2").value);
        let multi = num1 * num2;
        // document.getElementById("wynik").value = multi;<-- rozwiązanie zadanie numer 1
        const para = document.createElement("p");
        const node = document.createTextNode(`${num1}*${num2}=${multi}`);
        para.appendChild(node);
        const element = document.getElementById("div1");
        element.appendChild(para);
        }
}

function dzielenie(){
    if (document.querySelector("#divi")){
        let num1 = Number(document.querySelector("#num1").value);
        let num2 = Number(document.querySelector("#num2").value);
            if(num2===0){
                alert("dzielisz przez zero")
            } else {
                let divi = num1 / num2;
                // document.getElementById("wynik").value = divi;<-- rozwiązanie zadanie numer 1
                const para = document.createElement("p");
                const node = document.createTextNode(`${num1}/${num2}=${divi}`);
                para.appendChild(node);
                const element = document.getElementById("div1");
                element.appendChild(para);
            }
        }
}