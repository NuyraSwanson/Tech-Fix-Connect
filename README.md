# 🔧 Tech Fix Connect

> An affordable, convenient, and student-focused platform for repairing, buying, and selling technology.

## 📖 About the Project

Tech Fix Connect is a web-based platform designed to help university students access affordable and reliable technology services.

Students rely heavily on laptops, smartphones, and tablets for their academic work, and a damaged or unreliable device can negatively affect their studies. Tech Fix Connect addresses this problem by providing students with a convenient platform where they can book device repairs, track repair progress, explore available services, and access a student-focused technology marketplace.

The platform also allows students to **buy and sell technology**. Students can submit their devices to Tech Fix Connect for assessment, after which the device can be evaluated and assigned an appropriate selling price. Inspected devices can then be made available for other students to purchase at affordable prices.

---

## 🎯 Problem Statement

University students often struggle to find affordable and reliable technology services when their devices break or when they need to replace or upgrade their devices.

Existing repair and resale options can be expensive, time-consuming, unreliable, or located off campus. Students may also struggle to determine a fair price when selling their used technology.

Tech Fix Connect addresses these problems by providing a convenient student-focused platform for:

- Device repairs
- Repair tracking
- Buying affordable technology
- Selling used technology
- Device assessment and valuation

This helps students reduce disruption to their academic work while providing a trusted way to access and exchange technology.

---

## ✨ Features

- 🏠 Responsive Home Page
- 📅 Online Repair Booking
- 🔍 Repair Tracking
- 🛠️ Services & Pricing
- 🛒 Buy Devices
- 💰 Sell Your Device
- 🔎 Device Assessment & Valuation
- 📞 Contact & Support
- 👤 User Profile
- 📱 Mobile-Friendly Design

---

## 🛒 Student Tech Marketplace

The Tech Fix Connect marketplace allows students to buy and sell technology through the platform.

### 💻 Buy a Device

Students can browse available devices that have been assessed by Tech Fix Connect.

Potential marketplace listings can include:

- Laptops
- Smartphones
- Tablets
- Other technology devices

Each listing can provide information such as:

- Device name and model
- Condition
- Specifications
- Selling price
- Device images

### 💰 Sell Your Device

Students can submit their devices to Tech Fix Connect for assessment.

The process includes:

1. Student submits their device information.
2. Tech Fix Connect assesses the device.
3. The device's condition and specifications are evaluated.
4. A suitable selling/purchase price is determined.
5. The student can accept or decline the offered price.
6. Accepted devices can be added to the marketplace for resale.

This creates a trusted process where devices are assessed before being offered to other students.

---

## 💻 Technologies Used

- HTML
- CSS
- JavaScript
- Git
- GitHub

---

## 📂 Project Structure

```text
TechFixConnect/
│
├── index.html
├── services.html
├── book-repair.html
├── track-repair.html
├── buy-device.html
├── sell-device.html
├── contact.html
├── profile.html
├── design.html
│
├── css/
│   ├── style.css
│   └── responsive.css
│
├── js/
│   └── script.js
│
├── images/
│
└── README.md

                      REPAIRS
                         │
             ┌───────────┼───────────┐
             │           │           │
          Book Repair  Track Repair  Repair Info
             │           │           │
             ▼           ▼           ▼
          No account  Repair ID    No account
          required    required     required



                    MARKETPLACE
                         │
                         ▼
                 Browse Devices
                         │
              ┌──────────┴──────────┐
              │                     │
         Just browsing         Want to sell?
              │                     │
              ▼                     ▼
       View listings          Is user logged in?
                                    │
                              ┌─────┴─────┐
                              │           │
                             NO          YES
                              │           │
                              ▼           ▼
                     Register / Login   Sell Device
                              │           │
                              ▼           ▼
                         Sell Device   Create Listing
