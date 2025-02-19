function appendToScreen(value) {
    document.getElementById('result').value += value;
}

function clearScreen() {
    document.getElementById('result').value = "";
}

function deleteChar() {
    let input = document.getElementById('result').value;
    document.getElementById('result').value = input.slice(0, -1);
}

function calculate() {
    let input = document.getElementById('result').value;
    try {
        let result = eval(input);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = "Error";
    }
}
