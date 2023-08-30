Documentation for React SPA Application with Internationalization
Application Description
The React Single Page Application (SPA) focuses on the display and interaction with locale-sensitive formats. It provides a primary interface for language selection and integrates three main tools: date formatting, number formatting, and unit conversion. All tools offer users an option to select different locales (e.g., English, French, Ukrainian) to visualize the changes immediately. The application was developed using Create React App (CRA) and leverages the 'react-i18next' library to implement internationalization.

How to Run the Application Locally
Prerequisites: Ensure you have Node.js and npm installed on your computer.

Install dependencies: Navigate to the project root directory using your terminal or command prompt and run:

Copy code
npm install
Run the application: In the project root directory, execute the following command:

sql
Copy code
npm start
The application will be hosted on http://localhost:3000/. Open this URL in your preferred web browser.

Changing Locale via URL
While the application provides a direct UI to change the locale, users can also change the locale via URL parameters. Here are two example URLs:

English: http://localhost:3000/?lng=en
French: http://localhost:3000/?lng=fr
Replace the lng parameter's value (en or fr) with your desired locale code to change the application language accordingly.

(Note: Implementing URL-based locale switching requires additional code not shown in the provided snippet. The above URLs are examples and would require further integration to function properly.)

The documentation encapsulates the description, local setup, and example URLs for changing locale. Make sure that the codebase supports the mentioned URL-based locale switching before documenting it, or you can remove that part if it's not supported.