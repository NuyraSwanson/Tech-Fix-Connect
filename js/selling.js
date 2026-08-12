document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("sellDeviceForm");

    const result =
        document.getElementById("valuationResult");


    form.addEventListener("submit", (event) => {

        event.preventDefault();


        const type =
            document.getElementById("deviceType").value;

        const age =
            parseInt(document.getElementById("age").value);

        const condition =
            document.getElementById("condition").value;

        const battery =
            document.getElementById("battery").value;

        const power =
            document.getElementById("power").value;


        let basePrice = 0;


        if (type === "laptop") {

            basePrice = 6000;

        } else if (type === "phone") {

            basePrice = 5000;

        } else if (type === "tablet") {

            basePrice = 3500;

        }


        // Age deduction

        if (age === 1) {

            basePrice -= 500;

        } else if (age === 2) {

            basePrice -= 1000;

        } else if (age === 3) {

            basePrice -= 1800;

        }


        // Condition adjustment

        if (condition === "excellent") {

            basePrice += 500;

        } else if (condition === "fair") {

            basePrice -= 700;

        } else if (condition === "poor") {

            basePrice -= 1500;

        }


        // Battery adjustment

        if (battery === "fair") {

            basePrice -= 300;

        } else if (battery === "poor") {

            basePrice -= 700;

        }


        // Power adjustment

        if (power === "no") {

            basePrice -= 1500;

        }


        if (basePrice < 500) {

            basePrice = 500;

        }


        result.innerHTML = `

            <h2>Estimated Device Value</h2>

            <div class="valuation-price">

                R${basePrice.toLocaleString()}

            </div>

            <p>

                This is an estimated value only.

                A technician must inspect the device

                before the final selling price is confirmed.

            </p>

            <button class="btn-primary"
                    onclick="submitAssessment()">

                Submit For Technician Assessment

            </button>

        `;

        result.style.display = "block";

    });

});


function submitAssessment() {

    alert(
        "Your device has been submitted for technician assessment."
    );

}