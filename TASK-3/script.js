const celsiusElem = document.querySelector("#celsi");
        const degree = document.querySelector("#degree");
        const convertBtn = document.querySelector("#convert-btn");
        const con = document.querySelector("#conv");

        const tempType = document.querySelector("#temp-type");
        window.addEventListener("load", () => {
            degree.value = "";
            celsiusElem.innerHTML = "";
        });
        convertBtn.addEventListener("click", (e) => {
            e.preventDefault();
            convertToCelsius();
        });
        con.addEventListener("click", (e) => {
            e.preventDefault();
            convertTofahrenheit();
        });
        function convertToCelsius() {
            let inputValue = degree.value;

            if (tempType.value === "fahrenheit") {
                const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
                celsiusElem.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
            } else if (tempType.value === "kelvin") {
                const KelvinToCelsius = inputValue - 273.15;
                celsiusElem.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
            } else {
                const celciusTocelsius = inputValue;
                celsiusElem.innerHTML = `${celciusTocelsius} &deg;c`;
            }
        }
        function convertTofahrenheit() {
            let inputValue = degree.value;

            if (tempType.value === "celcius") {
                const CelsiusToFahrenheit = ((inputValue * (9 / 5)) + 32);
                celsiusElem.innerHTML = `${CelsiusToFahrenheit.toFixed(3)} &deg;F`;
            } else if (tempType.value === "kelvin") {
                const KelvinToFahrenheit = (inputValue - 273.15) * 9 / 5 + 32;
                celsiusElem.innerHTML = `${KelvinToFahrenheit.toFixed(3)} &deg;F`;
            } else if (tempType.value === "fahrenheit") {
                const FahrenheitToFahrenheit = inputValue;
                celsiusElem.innerHTML = `${FahrenheitToFahrenheit} &deg;F`;
            }
        }
        function fun() {
            document.getElementById("convert").reset();
        }   