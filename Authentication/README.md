# Authenticator

![Authenticator Logo]("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrgJnM9FLGc_bijjNnpD5Fxu6wd6QEwjP2g&usqp=CAU")

Authenticator is a web application built to provide a secure and user-friendly authentication experience. It leverages React for the front-end and integrates with the Auth0 authentication system. The project follows a minimalist design, ensuring a clean and intuitive user interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Secure Authentication:** Utilizes Auth0 for secure and reliable authentication.
- **Minimalist Design:** Offers an intuitive and clean user interface.
- **Responsive Layout:** Ensures a seamless experience across various devices.
- **Remember Me Functionality:** Allows users to stay logged in using Auth0's "Remember me" feature.
- **About and Contact Pages:** Provides additional information and a contact form.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Auth0:** An authentication and authorization platform.
- **React Router:** A library for handling navigation in React apps.
- **HTML & CSS:** For creating the structure and styling of web pages.

## Getting Started

1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/Authenticator.git
   ```

2. **Install dependencies:**

Navigate into the project directory and install all necessary packages by running `npm install` or
`yarn install`.

3. **Set up environment variables:**

Create a `.env` file at the root level of your project folder, and copy the contents of `.env.example` into it. Fill out the values with your own credentials from Auth0 (Client ID, Domain, etc.). Make sure not to commit this file as it contains sensitive
information.

4. **Set up Auth0:**

Create an account on Auth0 and set up a new application.
Add the Auth0 domain and client ID to the .env file.

5. **Start the server:**

To start the development server,run:
`npm start` or `yarn start`. 
The app will be accessible at <http://localhost:3000>

## Usage

**1. Home:**

The home page displays the "Welcome to Authenticator" message.
If the user is not authenticated, a "Get Started" button is provided for login.
Once logged in, the user's name and email are displayed along with a logout button.

**2. About and Contact:**

Navigate to the "About" and "Contact" pages using the header buttons.
Learn more about the project and use the contact form.

**3. Authentication:**

Use the "Login" button on the welcome screen to initiate authentication.
After logging in, you should be redirected back to the welcome screen with your information displayed.
Clicking the "Logout" button will remove this information from display.

**4. Profile:**

Once authenticated, the user's profile information is displayed on the profile page.
Clicking the "Sign Out" button will log the user out.

## Project Structure

Authenticator/
|-- src/
|   |-- components/
|       |-- About.js
|       |-- Contact.js
|       |-- Header.js
|       |-- LoginButton.js
|       |-- LogoutButton.js
|       |-- Profile.js
|   |-- App.js
|   |-- index.css
|   |-- index.js
|-- .env
|-- .gitignire
|-- package-lock.json
|-- package.json
|-- README.md

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## Acknowledgements

- [React](https://reactjs.org/)
- [Auth0](https://auth0.com/)
- [React Router](https://reactrouter.com/)

---

**Happy Coding!**