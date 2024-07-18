// it will print 
console.log("calculator works..");
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
console.log(document.body.children);

//it will get element by id 
const inputValue = document.getElementById("userInput");
// inputValue.style.background="Red";

//it will select multiple values
document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerHTML.trim();  // removes the leading whitespaces
    });
});

//for each incoming value it checks the condition and will give the result
document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        let lastValue = inputValue.innerText.substring(inputValue.innerText.length - 1);

        if (!isNaN(parseInt(lastValue)) && e.target.innerHTML === "=") {
            inputValue.innerText = eval(inputValue.innerText);
        } else if (e.target.innerHTML === "AC") {
            inputValue.innerText = "0";
        } else if (e.target.innerHTML === "DEL") {
            inputValue.innerText = inputValue.innerText.substring(0, inputValue.innerText.length - 1);
            if (inputValue.innerText.length === 0) {
                inputValue.innerText = "0";
            }
        } else if (e.target.innerHTML === "X^2") {
            let currentValue = parseFloat(inputValue.innerText);
            let squaredValue = currentValue * currentValue;
            inputValue.innerText = squaredValue.toString();
        }
        else {
            if (!isNaN(parseInt(lastValue))) {
                inputValue.innerText += e.target.innerHTML;
            }
        }
    });
});
