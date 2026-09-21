# ✈️ Skyscanner — Software Engineering Job Simulation

## 📌 Overview

This repository contains my completed work from the **Skyscanner Software Engineering Job Simulation** on **Forage**.

The repository includes the implementation work completed for the simulation's frontend and mobile-development activities, using **React, JavaScript, Skyscanner Backpack, Kotlin, and Android**.

## 🎯 Completed Forage Task Deliverables

### 1. 🌐 React + Skyscanner Backpack — Flight Date Selection

**Deliverable:** Implemented the flight-date selection interface using **React** and **Skyscanner Backpack styling**.

#### Work completed

* Created the React application in `my-app/`
* Implemented the flight schedule interface in `src/App.js`
* Built an **August 2026 calendar**
* Generated the 31 calendar dates programmatically
* Added weekday headings from Sunday through Saturday
* Correctly positioned the first day of August 2026 on Saturday
* Implemented selectable date buttons
* Added React state using `useState` to track the selected date
* Added visual feedback for the selected date
* Displayed the currently selected date to the user
* Implemented the **Continue** interaction
* Added validation when Continue is pressed without selecting a date
* Displayed the selected date after confirmation
* Added responsive styling in `App.scss`
* Used Skyscanner Backpack web packages and styling utilities

#### Main files

```text
my-app/
├── src/
│   ├── App.js
│   ├── App.scss
│   ├── App.test.js
│   └── index.js
├── public/
└── package.json


#### Technologies

`React` `JavaScript` `SCSS` `Skyscanner Backpack`



### 2. 📱 Android — Flight Itinerary Application

**Deliverable:** Created the initial Android **Flight Itinerary** application structure as part of the mobile-development work.

#### Work completed

* Created an Android Studio project named `FlightItinerary`
* Configured the Android application module
* Implemented `MainActivity.kt`
* Created the main Android layout in `activity_main.xml`
* Configured the application manifest
* Added AndroidX dependencies
* Configured ConstraintLayout
* Configured Material Components
* Implemented edge-to-edge Android UI
* Added system-bar inset handling using `WindowInsetsCompat`
* Configured Android themes and application resources
* Included unit-test and Android instrumentation-test structures
* Configured the project using Gradle Kotlin DSL

#### Main files

```text
FlightItinerary/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/example/flightitinerary/
│   │   │   │       └── MainActivity.kt
│   │   │   ├── res/
│   │   │   │   ├── layout/
│   │   │   │   │   └── activity_main.xml
│   │   │   │   ├── drawable/
│   │   │   │   ├── values/
│   │   │   │   └── xml/
│   │   │   └── AndroidManifest.xml
│   │   ├── test/
│   │   └── androidTest/
│   └── build.gradle.kts
├── build.gradle.kts
├── settings.gradle.kts
└── gradlew


#### Technologies

`Kotlin` `Android` `AndroidX` `ConstraintLayout` `Material Components` `Gradle`


## 🛠️ Technical Skills Demonstrated

### Frontend Development

* React component development
* React state management
* Dynamic UI generation
* User input handling
* Input validation
* Responsive styling
* SCSS

### Design System

* Skyscanner Backpack
* Design-system-based styling
* Responsive breakpoints
* Spacing and layout utilities

### Android Development

* Kotlin
* Android Activity lifecycle basics
* XML layouts
* AndroidX
* ConstraintLayout
* Material Components
* Edge-to-edge UI
* Window inset handling
* Gradle Kotlin DSL



## 📂 Repository Structure

```text
skyscanner-backpack-task-main/
│
├── my-app/                    # React + Backpack implementation
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.scss
│   │   ├── App.test.js
│   │   └── index.js
│   └── package.json
│
├── FlightItinerary/           # Android implementation
│   ├── app/
│   │   ├── src/
│   │   │   ├── main/
│   │   │   ├── test/
│   │   │   └── androidTest/
│   │   └── build.gradle.kts
│   ├── build.gradle.kts
│   ├── settings.gradle.kts
│   └── gradlew
│
└── README.md




## ▶️ Run the React Application

```bash
cd my-app
npm install
npm start
```

The React application will start on the local development server.



## ▶️ Run the Android Application

Open:

```text
FlightItinerary/
```

in **Android Studio**.

Then:

1. Allow Gradle to synchronize.
2. Select an emulator or connected Android device.
3. Build the application.
4. Run the `app` configuration.



## 📚 Key Learning Outcomes

Completing the simulation gave me practical exposure to:

* Translating requirements into working UI
* Building interactive React components
* Managing component state
* Creating dynamic calendar interfaces
* Implementing user validation
* Working with an established design system
* Building and configuring Android applications
* Working with Kotlin and AndroidX
* Structuring projects for maintainability
* Using Git/GitHub for software-development work



## 🎓 About the Simulation

**Company:** Skyscanner
**Platform:** Forage
**Program:** Software Engineering Job Simulation

This repository contains my implementation work from the simulation rather than simply the completion certificate.



## 👩‍💻 About Me

I'm a **B.Tech Electronics & Computer Science student** interested in:

* 🤖 Artificial Intelligence & Machine Learning
* 💻 Software Engineering
* 🌐 Web Development
* 🧠 Data Structures & Algorithms
* 🚀 Building real-world projects

I actively work on projects, hackathons, coding challenges, and industry-oriented simulations to strengthen my software engineering skills.



⭐ **If you found this project useful, feel free to star the repository!**
