# Credit Card Display and Form

## Description
This project is a React application that displays a credit card with its details and includes a form to input the card information.

## Screenshots

<img width="1440" alt="Screenshot 2024-06-22 at 11 21 27 PM" src="https://github.com/AbdallahAhmadd/Interactive-Card-Info/assets/101679255/3282ab7e-2f1e-44d6-94eb-fc41661a6066">
<img width="1440" alt="Screenshot 2024-06-22 at 11 21 59 PM" src="https://github.com/AbdallahAhmadd/Interactive-Card-Info/assets/101679255/aefd9193-22de-4c9c-991d-d8261fef3434">



## Technologies Used
- ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=white)
- ![CSS](https://img.shields.io/badge/-CSS-1572B6?style=flat&logo=css3&logoColor=white)
- ![HTML](https://img.shields.io/badge/-HTML-E34F26?style=flat&logo=html5&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)



## Features
- Display of credit card details including card number, cardholder name, expiry date, and CCV.
- Input form for entering credit card information.
- Real-time update of card details as they are entered in the form.
- Automatic formatting of the card number to include two spaces after every four digits.

## Components
### MainPage
The main component that holds the state for the card details and renders the `Cards` and `Form` components.

### Cards
A component that displays the front and back views of the credit card using the provided details.

### FrontCard
A component that displays the front view of the credit card, showing the card number, expiry date, and cardholder name.

### BackCard
A component that displays the back view of the credit card, showing the CCV.

### Form
A component that provides input fields for entering the card number, cardholder name, expiry date, and CCV. It updates the state in `MainPage` in real-time as the user types.

## File Structure
