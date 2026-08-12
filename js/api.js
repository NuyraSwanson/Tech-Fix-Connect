<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>TechFix Connect | My Profile</title>

    <!-- Google Font -->
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">

    <!-- Main CSS -->
    <link rel="stylesheet" href="css/style.css">

    <!-- Responsive CSS -->
    <link rel="stylesheet" href="css/responsive.css">

    <!-- Font Awesome -->
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
</head>

<body>

<!-- ================= HEADER ================= -->

<header>

    <nav class="navbar">

        <a href="index.html" class="logo">
            <img src="images/logo.png" alt="TechFix Connect Logo">
            <h2>TechFix Connect</h2>
        </a>

        <button class="nav-toggle" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <ul class="nav-links">

            <li>
                <a href="index.html">Home</a>
            </li>

            <li>
                <a href="services.html">Services</a>
            </li>

            <li>
                <a href="book-repair.html">Book Repair</a>
            </li>

            <li>
                <a href="track-repair.html">Track Repair</a>
            </li>

            <li>
                <a href="sell-device.html">Sell Device</a>
            </li>

            <li>
                <a href="profile.html" class="active">Profile</a>
            </li>

            <li>
                <a href="contact.html">Contact</a>
            </li>

        </ul>

        <a href="book-repair.html" class="btn-primary">
            Book Now
        </a>

    </nav>

</header>


<!-- ================= PROFILE HERO ================= -->

<section class="hero profile-hero">

    <div class="hero-text">

        <div class="hero-badge">
            Student Account
        </div>

        <h1>Welcome to your profile.</h1>

        <p>
            Manage your personal information, track your repairs,
            view your repair history and sell your device.
        </p>

    </div>

    <div class="hero-image">
        <img
            src="images/profile-hero.png"
            alt="Student managing TechFix Connect profile">
    </div>

</section>


<!-- ================= PROFILE SECTION ================= -->

<section class="profile-section">

    <h2>My Profile</h2>

    <p class="section-intro">
        Manage your TechFix Connect account and view your activity.
    </p>


    <div class="profile-container">

        <!-- PROFILE CARD -->

        <div class="profile-card">

            <div class="profile-icon">
                <i class="fa-solid fa-user"></i>
            </div>

            <h2 id="profileName">
                Student Name
            </h2>

            <p id="profileEmail">
                student@example.com
            </p>

            <span class="profile-status">
                <i class="fa-solid fa-circle"></i>
                Active Account
            </span>

            <button
                type="button"
                class="btn-primary"
                onclick="editProfile()">

                <i class="fa-solid fa-pen"></i>
                Edit Profile

            </button>

        </div>


        <!-- PERSONAL INFORMATION -->

        <div class="profile-details">

            <h2>
                <i class="fa-solid fa-id-card"></i>
                Personal Information
            </h2>

            <div class="profile-row">

                <strong>
                    <i class="fa-solid fa-user"></i>
                    Full Name
                </strong>

                <span id="displayName">
                    Student Name
                </span>

            </div>


            <div class="profile-row">

                <strong>
                    <i class="fa-solid fa-id-badge"></i>
                    Student Number
                </strong>

                <span id="studentNumber">
                    CPUT000000
                </span>

            </div>


            <div class="profile-row">

                <strong>
                    <i class="fa-solid fa-envelope"></i>
                    Email
                </strong>

                <span id="displayEmail">
                    student@example.com
                </span>

            </div>


            <div class="profile-row">

                <strong>
                    <i class="fa-solid fa-phone"></i>
                    Phone
                </strong>

                <span id="displayPhone">
                    +27 00 000 0000
                </span>

            </div>


            <div class="profile-row">

                <strong>
                    <i class="fa-solid fa-calendar"></i>
                    Member Since
                </strong>

                <span id="memberSince">
                    August 2026
                </span>

            </div>

        </div>

    </div>

</section>


<!-- ================= QUICK ACTIONS ================= -->

<section class="profile-actions">

    <h2>My TechFix Connect</h2>

    <p class="section-intro">
        Quickly access your repairs, device sales and account activity.
    </p>


    <div class="cards">


        <!-- REPAIRS -->

        <div class="card">

            <i class="fa-solid fa-screwdriver-wrench"></i>

            <h3>
                My Repairs
            </h3>

            <p>
                Track your current repairs and check the latest
                repair status.
            </p>

            <a
                href="track-repair.html"
                class="btn-secondary">

                Track Repairs

            </a>

        </div>


        <!-- BOOK REPAIR -->

        <div class="card">

            <i class="fa-solid fa-calendar-check"></i>

            <h3>
                Book a Repair
            </h3>

            <p>
                Submit a new repair request for your laptop,
                smartphone or tablet.
            </p>

            <a
                href="book-repair.html"
                class="btn-secondary">

                Book Repair

            </a>

        </div>


        <!-- SELL DEVICE -->

        <div class="card">

            <i class="fa-solid fa-laptop"></i>

            <h3>
                Sell a Device
            </h3>

            <p>
                Submit your laptop, phone or tablet for a
                functionality assessment and estimated selling price.
            </p>

            <a
                href="sell-device.html"
                class="btn-secondary">

                Sell Device

            </a>

        </div>


        <!-- HISTORY -->

        <div class="card">

            <i class="fa-solid fa-clock-rotate-left"></i>

            <h3>
                Repair History
            </h3>

            <p>
                View your previous repair requests and completed
                services.
            </p>

            <a
                href="repair-history.html"
                class="btn-secondary">

                View History

            </a>

        </div>

    </div>

</section>


<!-- ================= ACCOUNT SETTINGS ================= -->

<section class="account-settings">

    <h2>Account Settings</h2>

    <div class="cards">

        <div class="card">

            <i class="fa-solid fa-lock"></i>

            <h3>
                Password & Security
            </h3>

            <p>
                Keep your account secure by managing your password
                and security settings.
            </p>

            <a
                href="security.html"
                class="btn-secondary">

                Security Settings

            </a>

        </div>


        <div class="card">

            <i class="fa-solid fa-bell"></i>

            <h3>
                Notifications
            </h3>

            <p>
                Manage notifications about repairs, device assessments
                and account activity.
            </p>

            <button
                type="button"
                class="btn-secondary"
                onclick="manageNotifications()">

                Manage Notifications

            </button>

        </div>


        <div class="card">

            <i class="fa-solid fa-right-from-bracket"></i>

            <h3>
                Log Out
            </h3>

            <p>
                Sign out of your TechFix Connect account securely.
            </p>

            <button
                type="button"
                class="btn-secondary"
                onclick="logoutUser()">

                Log Out

            </button>

        </div>

    </div>

</section>


<!-- ================= FOOTER ================= -->

<footer>

    <div class="footer-content">

        <div>

            <h3>
                TechFix Connect
            </h3>

            <p>
                Fast, affordable and reliable device repairs
                designed specifically for university students.
            </p>

        </div>


        <div>

            <h3>
                Quick Links
            </h3>

            <ul>

                <li>
                    <a href="index.html">Home</a>
                </li>

                <li>
                    <a href="services.html">Services</a>
                </li>

                <li>
                    <a href="book-repair.html">Book Repair</a>
                </li>

                <li>
                    <a href="track-repair.html">Track Repair</a>
                </li>

                <li>
                    <a href="sell-device.html">Sell Device</a>
                </li>

                <li>
                    <a href="profile.html">Profile</a>
                </li>

                <li>
                    <a href="contact.html">Contact</a>
                </li>

            </ul>

        </div>


        <div>

            <h3>
                Contact
            </h3>

            <p>
                Email: support@techfixconnect.co.za
            </p>

            <p>
                Phone: +27 21 555 1234
            </p>

            <p>
                Cape Town, South Africa
            </p>

        </div>

    </div>

    <hr>

    <p class="copyright">
        © 2026 TechFix Connect. All Rights Reserved.
    </p>

</footer>


<!-- ================= JAVASCRIPT ================= -->

<script src="js/script.js"></script>

<script>

    function editProfile() {

        const name = prompt(
            "Enter your full name:",
            document.getElementById("displayName").textContent.trim()
        );

        if (!name) {
            return;
        }

        document.getElementById("displayName").textContent = name;
        document.getElementById("profileName").textContent = name;

        localStorage.setItem("profileName", name);

        alert("Profile updated successfully.");

    }


    function manageNotifications() {

        alert(
            "Notification settings will be available when the backend is connected."
        );

    }


    function logoutUser() {

        const confirmLogout = confirm(
            "Are you sure you want to log out?"
        );

        if (confirmLogout) {

            localStorage.removeItem("loggedInUser");

            window.location.href = "login.html";

        }

    }


    document.addEventListener("DOMContentLoaded", () => {

        const savedName =
            localStorage.getItem("profileName");

        if (savedName) {

            document.getElementById("profileName").textContent =
                savedName;

            document.getElementById("displayName").textContent =
                savedName;

        }

    });

</script>

</body>

</html>