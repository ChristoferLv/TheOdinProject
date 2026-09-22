# Form Validation Practice

Practical form validation exercise with JavaScript, based on the [Form Validation with JavaScript](https://www.theodinproject.com/lessons/node-path-javascript-form-validation-with-javascript#a-little-more-practice) lesson from The Odin Project.

This project is not a main project of the path like Library, Tic Tac Toe, or Restaurant Page. It was developed as a complementary exercise suggested at the end of the lesson to practice the **Constraint Validation API** and custom frontend validation.

## Activity Objective

The main objective was to practice:
- Form validation using JavaScript
- Using the `novalidate` attribute to control all validation in JS
- Visual feedback for valid and invalid fields
- Custom error messages for each field
- Real-time validation while typing and on submit

## What Was Implemented

Form with the following fields:
- Email
- Country
- Postal code
- Password
- Confirm Password

Validation rules applied:
- **Email**: validation with a regular expression
- **Postal code**: validation by country (Switzerland, France, Germany, and the Netherlands)
- **Password**: minimum of 3 alphanumeric characters (according to the current implementation)
- **Confirm Password**: must match the password field

Interface behavior:
- Fields receive the `.valid` or `.invalid` class
- Error messages appear dynamically below the inputs
- Form submission is intercepted with `event.preventDefault()`
- Displays a final error or success alert

## How to use

1. Open the `index.html` file in your browser
2. Fill in the form fields
3. Watch validation happen in real time
4. Click "Enviar" to test the final validation

## Structure

- `index.html`: form structure
- `style.css`: base styles and validation states
- `script.js`: validation logic, error messages, and submission handling

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

Lesson reference: [The Odin Project - Form Validation with JavaScript](https://www.theodinproject.com/lessons/node-path-javascript-form-validation-with-javascript)

📍 **Main repository with all projects**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
