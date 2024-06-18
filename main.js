 const carData = {
            "Audi": ["A6 C5 1999", "A4 B6 2004", "A4 B7 2007", "A5 8T 2001", "A6 C7 2012", "A3 8V 2015", "A4 B8 2015", "A4 B9 2017", "A3 8V 2018", "A6 C8 2019", "A4 B9 2020", "A3 8Y 2020", "A7 4K 2021", "RS E-trone GT 2022", "A5 F5 2022", "R8 GT 2023", "A4 B7 2009", "R8 Coupe", "RS6 C8 2022", "A4 B5 1999"],
            "Honda": [],
            "Porsche": [],
            "Mercedes": [],
            "Nissan": [],
            "BMW": [],
            "Infiniti": [],
            "Lamborgini": [],
            "Mazda": [],
            "McLaren": [],
            "Индивидуальный дизайн": ["Индивидуальный дизайн"],
            "Mitsubishi": [],
            "Toyota": []
        };

 function updateModels() {
            const makeSelect = document.getElementById("make");
            const modelSelect = document.getElementById("model");
            const selectedMake = makeSelect.value;

            // Clear existing options in the model select
            modelSelect.innerHTML = "";

            // Populate model options based on the selected make
            if (selectedMake && carData[selectedMake]) {
                carData[selectedMake].forEach(model => {
                    const option = document.createElement("option");
                    option.value = model;
                    option.textContent = model;
                    modelSelect.appendChild(option);
                });
            }
        }

        // Populate make options on page load
        window.onload = function() {
            const makeSelect = document.getElementById("make");
            for (const make in carData) {
                const option = document.createElement("option");
                option.value = make;
                option.textContent = make;
                makeSelect.appendChild(option);
            }
        }