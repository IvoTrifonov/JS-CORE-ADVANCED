function solve(inputName, inputAge, inptWeight, inputHeight) {
    let person = {
        name: inputName,
        personalInfo: {
            age: inputAge,
            weight: inptWeight,
            height: inputHeight
        },
        BMI: getBMI(inptWeight, inputHeight),
    };

    person["status"] = getStatus(person["BMI"]);

    if (person["status"] === "obese") {
        person["recommendation"] = "admission required";
    }

    function getBMI(weight, height) {
        return Math.round(weight / (height / 100) ** 2);
    }

    function getStatus(bmi) {
        let status = "underweight";

        bmi >= 18.5 && bmi < 25 ? status = "normal" :
        bmi >= 25 && bmi < 30 ? status = "overweight" :
        bmi >= 30 ? status = "obese" : status = "underweight";
        
        return status;
    }

    return person;
}

solve("Honey Boo Boo", 9, 57, 137);