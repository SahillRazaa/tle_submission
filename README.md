# Student Progress Management System

This repository contains the complete codebase for a robust Student Progress Management System, developed as a comprehensive solution for a Full Stack Developer recruitment assignment. The system excels at tracking and analyzing student performance, with a particular emphasis on competitive programming progress through synchronized Codeforces data.

Built entirely with the MERN stack, this application showcases strong proficiency in both frontend and backend development, along with a commitment to security, user experience, and maintainability.

## Live Demo & Product Walkthrough

Experience the system in action and observe its comprehensive functionalities:

* Live Demo: [https://tle-sahil.onrender.com](https://tle-sahil.onrender.com)
* Product Walkthrough Video:
  
[![Watch Video](https://img.youtube.com/vi/hD2oTXXDEvA/0.jpg)](https://www.youtube.com/watch?v=hD2oTXXDEvA)

## Key Features & Highlights

This system goes beyond the core requirements, delivering an enterprise-ready application with advanced features and a polished user experience.

1.  **Secure Admin Panel with Authentication**

    * **JWT-based Session Login**: Implemented a robust authentication system using JSON Web Tokens (JWT) to secure the admin panel, ensuring only authorized personnel can access and manage student data. This prevents unauthorized modifications and enhances data integrity.
    * **Protected Routes**: Critical routes, such as the dashboard, are protected to prevent access by unauthenticated users, providing a secure browsing experience.
    * **Dummy Admin Credentials**: For a seamless evaluation process, dummy admin credentials are provided on the login page.
2.  **Intuitive & Comprehensive Dashboard Layout**

    The admin dashboard provides a centralized hub for all management tasks:

    * **Brand Navigation**: A clear "TLE Eliminator" brand name on the left of the navbar.
    * **Top Navigation Bar**: Features essential actions on the right:

        * Toggle Light/Dark Mode: A dedicated button for instant theme switching.
        * Home Button: Quick navigation back to the dashboard.
        * Logout Button: Securely ends the admin session.
    * **Enhanced Student Management Tools**:

        * Search Bar: Efficiently find students by name.
        * Rating Filters: Filter students based on their Codeforces ratings for targeted analysis.
        * Total Student Count: A real-time display of the total number of enrolled students.
    * **Dynamic Cron Job Scheduler**:

        * Configurable Interface: A user-friendly popup allows administrators to easily modify the data synchronization schedule (e.g., daily, hourly, weekly) with precise time segment control. This provides unmatched flexibility in managing data freshness.
    * **Student Data Actions**:

        * Add Students: A dedicated button triggers a popup for quickly adding new student records.
        * Export CSV: Download the entire student dataset as a CSV file with a single click, perfect for reporting and external analysis.
3.  **Advanced Student Table View**

    The student table is not just a list, but a powerful management interface:

    * **Rich Columns**: Displays comprehensive details: Name, Email, Phone Number, CF Handle, Current Rating, Max Rating, Last Synced (timestamp of last Codeforces data update), Last Active (date of last Codeforces submission), and Reminder status.
    * **Enhanced Action Column**: Each row provides four distinct actions with responsive feedback:

        * View Profile: Navigate to the detailed individual student profile.
        * Update Student Data: Modify existing student information via a dedicated popup.
        * Delete Student Data: Securely remove student records.
        * Toggle Reminder Sender: Individually enable or disable automated inactivity email reminders for each student.
    * **Pagination**: Implemented efficient pagination, fetching and displaying only 20 students at a time to optimize loading performance and user experience with large datasets.
    * **Informative Footer**: A clean and professional footer providing additional context or links.
4.  **In-depth Student Profile View**

    Clicking "View Profile" reveals a comprehensive two-section layout:

    * **Left Section - Student Overview**:

        * Displays core student details: Current Rank, Current Rating, Max Rating, Name, Email, Phone Number.
        * Features a personalized avatar.
    * **Right Section - Performance Analytics**:

        * **Contest History (Toggleable)**:

            * Flexible Time Filters: Analyze contest performance over the last 30, 90, or 365 days.
            * Dynamic Rating Graph: A visually appealing graph illustrating the student's rating changes over the selected period.
            * Detailed Contest Table: Lists individual contests with specific data: rating changes, rank achieved, and the number of problems unsolved by the user in that contest.
        * **Problem Solving Data (Toggleable)**:

            * Dedicated Filters: Separate time filters (7, 30, or 90 days) for problem-solving statistics.
            * Key Performance Indicators: Provides a quick overview of:

                * Total Problems Solved
                * Average Problem Rating
                * Problems Per Day
                * Most Difficult Problem solved
            * Rating Bucket Bar Chart: A visually clear bar chart showing the frequency of problems solved across different rating buckets, offering insights into problem difficulty distribution.
            * Submission Heatmap: A "LeetCode/GitHub style" heatmap visually representing daily submission activity, allowing for quick identification of active and inactive periods.
5.  **Robust Codeforces Data Synchronization**

    * **Automated Daily Sync**: A robust Node.js-based cron job automatically fetches and stores updated Codeforces data (contests, submissions, ratings) once a day (e.g., at 2 AM). This ensures student profiles are always up-to-date without manual intervention.
    * **Real-time Handle Updates**: When a student's Codeforces handle is updated in the admin panel, their data is immediately synchronized in real-time, overriding the cron schedule to reflect changes instantly.
    * **Optimized API Usage**: Designed to minimize real-time Codeforces API calls during user interaction hours, relying on cached data for optimal performance and API rate limit adherence.
6.  **Proactive Inactivity Detection & Reminders**

    * **Automated Inactivity Detection**: After each data sync, the system identifies students who haven't made any Codeforces submissions in the last 7 days.
    * **Automated Email Reminders**: Sends a polite, automated email to inactive students, encouraging them to resume problem-solving and stay engaged.
    * **Reminder Count**: Each student's record tracks how many inactivity reminder emails have been sent to them.
    * **Individual Email Opt-Out**: Administrators can easily disable automated reminder emails for individual students directly from the table.

## Bonus Features & Quality Assurance

* **Fully Responsive UI**: The entire application is meticulously designed to be fully responsive, providing an optimal and seamless experience across all devices, including mobile, tablet, and desktop.
* **Light & Dark Mode**: A user-friendly toggle allows switching between elegant light and dark themes, enhancing user comfort and personalization, implemented efficiently using React Context API and Provider for global state management.
* **Well-Documented & Maintainable Code**: The codebase is extensively commented, adheres to best practices, and follows clean coding standards, ensuring high maintainability and scalability for future development.
* **Secure Environment Configuration**: All sensitive secrets and API keys are properly stored in `.env` files, ensuring secure deployment and preventing exposure in the codebase.
* **Robust Backend Authorization**: The backend includes comprehensive authorization checks on every API call from the admin panel, ensuring data integrity and preventing unauthorized operations.
* **Enhanced User Experience with Toasts**: Utilizes `react-toastify` to provide smooth, informative, and non-intrusive notifications for every small change and successful operation, significantly improving the admin's workflow and experience.
* **Custom Branding**: The application's favicon has been customized with a unique logo and the developer's name, establishing a distinct brand identity for this submission.
* **Redux for State Management**: Leveraged Redux for advanced and efficient state management across complex components, ensuring predictable data flow and persistence for critical application states.

## Technologies Used

The project leverages a modern, robust, and well-integrated technology stack:

**Frontend:**

* React.js: For building a dynamic, component-based, and highly interactive user interface.
* Redux: For centralized, predictable, and scalable state management across the application.
* Axios: For making efficient HTTP requests to the backend APIs.
* Chart.js / Recharts: For powerful and visually appealing data visualizations (rating graphs, bar charts).
* styled-components: For Design and Animations
* react-router-dom: For Client-side routing
* react-toastify: For elegant and user-friendly toast notifications.
* papaparse: To work with JSON and CSV

**Backend:**

* Node.js: The JavaScript runtime environment providing a robust foundation for the server.
* Express.js: A fast, unopinionated, minimalist web framework for building RESTful APIs.
* MongoDB: A flexible NoSQL database used for storing all student data, Codeforces contest information, and user submissions.
* Mongoose: An elegant MongoDB object modeling tool for Node.js, providing schema-based solutions to model application data.
* jsonwebtoken (JWT): For implementing secure user authentication and session management.
* node-cron: For scheduling automated daily Codeforces data synchronization tasks.
* axios: For making HTTP requests to the Codeforces API from the backend.

## Installation and Local Setup

To get a local copy up and running, follow these simple steps.

**Prerequisites**

* Node.js (LTS version recommended)
* npm
* MongoDB (Community Edition or MongoDB Atlas account for cloud-hosted DB)

1.  **Clone the Repository**

    Begin by cloning the project repository to your local machine:

    ```bash
    git clone https://github.com/SahillRazaa/tle_submission.git
    cd tle_submission
    ```
2.  **Backend Setup (backend/)**

    Navigate into the backend directory and set up the server:

    ```bash
    cd backend
    ```

    **Install Dependencies:**

    Install all required Node.js packages:

    ```bash
    npm install
    ```

    **Environment Variables Configuration:**

    Create a .env file in the backend/ directory by copying the example file:

    ```
    cp .env.example .env
    ```

    **Important:** Replace `MONGO_URI`, `BREVO_API`, `JWT_SECRET`, and your email credentials (`USER_SEC`, `ADMIN_SEC`) with your actual values. For `EMAIL_PASS`, if using Gmail, it's highly recommended to generate an [App Password](https://support.google.com/accounts/answer/185833?hl=en) instead of using your main Gmail password for security.

    **Run the Backend Server:**

    Start the Node.js Express server:

    ```bash
    npm start
    ```

    The backend server will now be running on `http://localhost:8000` (or the port you specified in `PORT`).
3.  **Frontend Setup (frontend/)**

    Open a new terminal and navigate into the frontend directory:

    ```bash
    cd ../frontend
    ```

    **Install Dependencies:**

    Install all required React dependencies:

    ```bash
    npm install
    ```

    **Environment Variables Configuration:**

    Create a .env file in the backend/ directory by copying the example file:

    ```
    cp .env.example .env
    ```

    Ensure this URL matches your backend server's address.

    **Run the Frontend Development Server:**

    Start the React development server:

    ```bash
    npm run dev
    ```

    The frontend application will open automatically in your web browser, usually at `http://localhost:3000`.

## API Endpoints (Brief Overview)

The backend provides a comprehensive set of RESTful APIs to manage student data, handle authentication, and interact with the Codeforces API.

**Authentication:**

* `POST /admin/login`: Admin login.

**Student Management:**

* `POST /students/create`:  Add a new student.
* `DELETE /students/delete/:handle`: Delete a student.
* `GET /students/all`: Get all student's details.
* `PUT /students/update/:handle`: Update student details.
* `PUT /students/reminderUpdate/:handle`: update student reminder.

**Contest Details**

* `GET /contest/all`: Get all contest data.

**Submission Details**

* `GET /submission/all`: Get all submission data

**Email Reminder**

* `POST /email/reminder`: Send reminder to enabled students

**CRON Job Updates:**

* `GET /cron-config/all`: Get all Cron Jobs.
* `GET /cron-config/:taskName`: Get a Specific Cron Job.
* `PUT /cron-config/:taskName`: Update a particular CRON Job.

## Contact
For any questions, further discussions, or collaboration opportunities, please feel free to reach out:

Sahil Raza Ansari
  - Email: [connectwithsahil007@gmail.com](connectwithsahil007@gmail.com)
  - LinkedIn: [https://www.linkedin.com/in/sahil-raza-ansari-7b1b98270/](https://www.linkedin.com/in/sahil-raza-ansari-7b1b98270/)

Thank you for your time and consideration. I am confident that my work demonstrates a strong commitment to delivering high-quality, scalable, and user-centric full-stack solutions.
