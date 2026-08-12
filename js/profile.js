document.addEventListener("DOMContentLoaded", loadProfile);


async function loadProfile() {

    try {

        const userId = localStorage.getItem("userId");

        if (!userId) {

            window.location.href = "login.html";

            return;
        }

        const user = await apiRequest(`/users/${userId}`);

        document.getElementById("profileName").textContent =
            user.fullName;

        document.getElementById("displayName").textContent =
            user.fullName;

        document.getElementById("profileEmail").textContent =
            user.email;

        document.getElementById("displayEmail").textContent =
            user.email;

        document.getElementById("studentNumber").textContent =
            user.studentNumber;

        document.getElementById("displayPhone").textContent =
            user.phone;

        if (user.memberSince) {

            document.getElementById("memberSince").textContent =
                user.memberSince;
        }

    } catch (error) {

        console.error("Error loading profile:", error);

        alert(
            "Unable to load your profile. Please try again."
        );
    }
    let currentUser = null;


document.addEventListener("DOMContentLoaded", loadProfile);


async function loadProfile() {

    try {

        const userId = localStorage.getItem("userId");

        if (!userId) {

            window.location.href = "login.html";

            return;
        }

        currentUser = await apiRequest(`/users/${userId}`);

        displayProfile(currentUser);

    } catch (error) {

        console.error(error);

        alert("Unable to load your profile.");
    }
}


function displayProfile(user) {

    document.getElementById("profileName").textContent =
        user.fullName;

    document.getElementById("displayName").textContent =
        user.fullName;

    document.getElementById("profileEmail").textContent =
        user.email;

    document.getElementById("displayEmail").textContent =
        user.email;

    document.getElementById("studentNumber").textContent =
        user.studentNumber;

    document.getElementById("displayPhone").textContent =
        user.phone;

    document.getElementById("fullName").value =
        user.fullName;

    document.getElementById("studentNumberInput").value =
        user.studentNumber;

    document.getElementById("email").value =
        user.email;

    document.getElementById("phone").value =
        user.phone;

    if (user.memberSince) {

        document.getElementById("memberSince").textContent =
            user.memberSince;
    }
}


function editProfile() {

    const section =
        document.getElementById("editProfileSection");

    section.style.display = "block";

    section.scrollIntoView({
        behavior: "smooth"
    });
}


function cancelEdit() {

    document.getElementById("editProfileSection").style.display =
        "none";
}


document
    .getElementById("profileForm")
    .addEventListener("submit", async function(event) {

        event.preventDefault();

        const userId =
            localStorage.getItem("userId");

        const updatedUser = {

            fullName:
                document.getElementById("fullName").value,

            studentNumber:
                document.getElementById("studentNumberInput").value,

            email:
                document.getElementById("email").value,

            phone:
                document.getElementById("phone").value
        };


        try {

            const response = await apiRequest(
                `/users/${userId}`,
                {
                    method: "PUT",
                    body: JSON.stringify(updatedUser)
                }
            );

            currentUser = response;

            displayProfile(currentUser);

            document.getElementById(
                "editProfileSection"
            ).style.display = "none";

            alert("Profile updated successfully.");

        } catch (error) {

            console.error(error);

            alert(
                "Unable to update your profile."
            );
        }

    });
}