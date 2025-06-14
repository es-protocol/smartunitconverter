// Smart Unit Converter
// Author: Thomas Tamba Smart (Mr. Protocol)
// Description: A natural-language based unit converter using vanilla JavaScript

//Smart input Conversion
function parseAndConvert(input){
    input = input.toLowerCase();

    //Extract number from the input (first number found)
    const numberMatch = input.match(/[\d\.]+/);
    if(!numberMatch)
        return "please include a number to convert";

    const value = parseFloat(numberMatch[0]);

    //conversion logic
    if(input.includes("celsius") && input.includes("fahrenheit")){
        //celsius to fahrenheit
        const f = (value * 9/5) + 32;
        return `${value}° celsius = ${f.toFixed(2)}° Fahrenheit`;
    }
    if(input.includes("kilogram") || input.includes("kg") && input.includes("pound") || input.includes("pounds")) {
        //kilogram to pounds
        const pounds = value * 2.205;
        return `${value} kg = ${pounds.toFixed(2)} pounds`;
    }
    if ((input.includes("kilometer") || input.includes("km")) && input.includes("mile")) {
        // Kilometers to Miles
        const miles = value / 1.609;
        return `${value} km = ${miles.toFixed(2)} miles`;
    }

    return "Sorry, I can only convert Celsius to Fahrenheit, kilograms to pounds, and kilometers to miles.";
}

function getConversionExplanation(input) {
    input = input.toLowerCase();

    if (input.includes("celsius") && input.includes("fahrenheit")) {
        return "Formula: (Celsius × 9/5) + 32 = Fahrenheit";
    }
    if ((input.includes("kilogram") || input.includes("kg")) && input.includes("pound")) {
        return "Formula: Kilograms × 2.205 = Pounds";
    }
    if ((input.includes("kilometer") || input.includes("km")) && input.includes("mile")) {
        return "Formula: Kilometers ÷ 1.609 = Miles";
    }
    return "";
}


//smart convert button listener
document.getElementById("smartBtn").addEventListener("click", () => {
    const userInput = document.getElementById("smartBox").value;
    const result = parseAndConvert(userInput);
    const explanation = getConversionExplanation(userInput);

    document.getElementById("smartResult").innerHTML = result + (explanation ? `<br/><small>${explanation}</small>` : "");
});

// Temperature: Celsius to Fahrenheit (Original converter)
document.querySelector("button#temperature").addEventListener("click", () => {
    const celsius = parseFloat(document.getElementById("celsius").value);
    if (isNaN(celsius)) return alert("Please enter a valid Celsius value.");
    
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("farenhiet").value = fahrenheit.toFixed(2);
});

// Weight: Kilograms to Pounds (Original converter)
document.querySelector("button#weight").addEventListener("click", () => {
    const kg = parseFloat(document.getElementById("kilo").value);
    if (isNaN(kg)) return alert("Please enter a valid kilogram value.");

    const pounds = kg * 2.205;
    document.getElementById("pounds").value = pounds.toFixed(2);
});

// Distance: Kilometers to Miles (Original converter)
document.querySelector("button#distance").addEventListener("click", () => {
    const km = parseFloat(document.getElementById("km").value);
    if (isNaN(km)) return alert("Please enter a valid kilometer value.");

    const miles = km / 1.609;
    document.getElementById("miles").value = miles.toFixed(2);
});


