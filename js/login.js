const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;

    if (!email || !password) {

        loginMessage.textContent =
            "Please enter your email and password.";

        loginMessage.className =
            "form-message error";

        return;
    }

    try {

        const response = await fetch(
            "http://localhost:8080/api/auth/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        );

        if (!response.ok) {

            throw new Error(
                "Invalid email or password."
            );
        }

        const user = await response.json();

        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );

        loginMessage.textContent =
            "Login successful!";

        loginMessage.className =
            "form-message success";

        setTimeout(() => {

            window.location.href =
                "profile.html";

        }, 1000);

    } catch (error) {

        loginMessage.textContent =
            error.message;

        loginMessage.className =
            "form-message error";
    }

});