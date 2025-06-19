# Student Progress Management System

This repository contains the complete codebase for a robust Student Progress Management System, developed as a comprehensive solution for a Full Stack Developer recruitment assignment. The system excels at tracking and analyzing student performance, with a particular emphasis on competitive programming progress through synchronized Codeforces data. Built entirely with the MERN stack, this application showcases strong proficiency in both frontend and backend development, along with a commitment to security, user experience, and maintainability.

## Live Demo & Product Walkthrough

Experience the system in action and observe its comprehensive functionalities:

* Live Demo: \[INSERT YOUR LIVE DEMO LINK HERE](https://your-deployed-app.netlify.app)
* Product Walkthrough Video: \[INSERT YOUR YOUTUBE VIDEO LINK HERE](https://www.youtube.com/watch?v=your_video_id)

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

## 🛠Technologies Used

The project leverages a modern, robust, and well-integrated technology stack:

**Frontend:**

* React.js: For building a dynamic, component-based, and highly interactive user interface.
* Redux: For centralized, predictable, and scalable state management across the application.
* Axios: For making efficient HTTP requests to the backend APIs.
* Chart.js / Recharts: For powerful and visually appealing data visualizations (rating graphs, bar charts).
* Tailwind CSS: A utility-first CSS framework for rapid and responsive UI development, ensuring a modern and adaptive design.
* react-toastify: For elegant and user-friendly toast notifications.

**Backend:**

* Node.js: The JavaScript runtime environment providing a robust foundation for the server.
* Express.js: A fast, unopinionated, minimalist web framework for building RESTful APIs.
* MongoDB: A flexible NoSQL database used for storing all student data, Codeforces contest information, and user submissions.
* Mongoose: An elegant MongoDB object modeling tool for Node.js, providing schema-based solutions to model application data.
* jsonwebtoken (JWT): For implementing secure user authentication and session management.
* bcryptjs: For hashing passwords securely.
* node-cron: For scheduling automated daily Codeforces data synchronization tasks.
* nodemailer: For sending automated inactivity reminder emails to students.
* axios: For making HTTP requests to the Codeforces API from the backend.
* csv-stringify: For generating CSV files for data export.

## ⚙️ Installation and Local Setup

To get a local copy up and running, follow these simple steps.

**Prerequisites**

* Node.js (LTS version recommended)
* npm or Yarn
* MongoDB (Community Edition or MongoDB Atlas account for cloud-hosted DB)

1.  **Clone the Repository**

    Begin by cloning the project repository to your local machine:

    ```bash
    git clone [https://github.com/SahillRazaa/your-single-repo-name.git](https://github.com/SahillRazaa/your-single-repo-name.git)
    cd your-single-repo-name
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
    # or
    yarn install
    ```

    **Environment Variables Configuration:**

    Create a `.env` file in the `backend/` directory. This file will store your sensitive configuration variables.

    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ADMIN_EMAIL=admin@example.com
    ADMIN_PASSWORD=adminpassword
    CODEFORCES_API_BASE_URL=[https://codeforces.com/api/](https://codeforces.com/api/)
    EMAIL_USER=your_email@example.com # Email address for sending reminders (e.g., Gmail)
    EMAIL_PASS=your_email_app_password # App password if using Gmail (or actual password if not app-specific)
    CRON_SCHEDULE="0 2 * * *" # Example: Runs every day at 2 AM. Adjust as needed (e.g., "*/5 * * * *" for every 5 minutes)
    ```

    **Important:** Replace `your_mongodb_connection_string`, `your_jwt_secret_key`, and your email credentials (`EMAIL_USER`, `EMAIL_PASS`) with your actual values. For `EMAIL_PASS`, if using Gmail, it's highly recommended to generate an [App Password](https://support.google.com/accounts/answer/185833?hl=en) instead of using your main Gmail password for security.

    **Run the Backend Server:**

    Start the Node.js Express server:

    ```bash
    npm start
    # or
    yarn start
    ```

    The backend server will now be running on `http://localhost:5000` (or the port you specified in `PORT`).
3.  **Frontend Setup (frontend/)**

    Open a new terminal and navigate into the frontend directory:

    ```bash
    cd ../frontend
    ```

    **Install Dependencies:**

    Install all required React dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

    **Environment Variables Configuration:**

    Create a `.env` file in the `frontend/` directory.

    ```
    REACT_APP_BACKEND_URL=http://localhost:5000/api
    ```

    Ensure this URL matches your backend server's address.

    **Run the Frontend Development Server:**

    Start the React development server:

    ```bash
    npm start
    # or
    yarn start
    ```

    The frontend application will open automatically in your web browser, usually at `http://localhost:3000`.

## API Endpoints (Brief Overview)

The backend provides a comprehensive set of RESTful APIs to manage student data, handle authentication, and interact with the Codeforces API.

**Authentication:**

* `POST /api/auth/login`: Admin login.
* `GET /api/auth/logout`: Admin logout.
* `GET /api/auth/check`: Check authentication status.

**Student Management:**

* `GET /api/students`: Get all students with pagination, search, and filters.
* `POST /api/students`: Add a new student.
* `GET /api/students/:id`: Get a single student's details.
* `PUT /api/students/:id`: Update student details.
* `DELETE /api/students/:id`: Delete a student.

**Codeforces & Data Sync:**

* `POST /api/students/:id/sync-codeforces`: Manually trigger Codeforces data sync for a specific student.
* `PUT /api/cron/configure`: Configure cron job schedule/frequency.

**Data Export:**

* `GET /api/data/download-csv`: Download all student data as CSV.

**Inactivity Reminders:**

* `PUT /api/students/:id/toggle-email-reminders`: Toggle inactivity email reminders for an individual student.

(Detailed API documentation, including request/response formats, authentication requirements, and error handling, can be found within the backend code comments.)

## Project Structure

The repository maintains a clear and modular structure, facilitating independent development, deployment, and easy understanding of both frontend and backend components.

```plaintext
├── backend/
│   ├── config/                  # Database connection, environment setup
│   ├── controllers/             # Logic for API endpoints
│   ├── middleware/              # Authentication and error handling middleware
│   ├── models/                  # Mongoose schemas for MongoDB
│   ├── routes/                  # API route definitions
│   ├── services/                # Business logic, Codeforces API interaction, cron jobs, email sending
│   ├── utils/                   # Helper functions
│   ├── .env.example             # Template for environment variables
│   ├── package.json             # Backend dependencies and scripts
│   └── server.js                # Main backend application file
│
├── frontend/
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── assets/              # Images, icons, fonts
│   │   ├── components/          # Reusable UI components
│   │   ├── context/             # React Context for themes, etc.
│   │   ├── hooks/               # Custom React hooks
│   │   ├── pages/               # Top-level page components (Login, Dashboard, StudentProfile)
│   │   ├── redux/               # Redux store, reducers, actions
│   │   ├── services/            # API client for frontend to interact with backend
│   │   ├── styles/              # Tailwind CSS configuration, custom CSS
│   │   ├── App.js               # Main React application component
│   │   └── index.js             # Entry point for React app
│   ├── .env.example             # Template for frontend environment variables
│   ├── package.json             # Frontend dependencies and scripts
│   └── README.md                # Frontend-specific README (optional, content merged into main)
│
└── README.md                    # This main README file
```
## Contact
For any questions, further discussions, or collaboration opportunities, please feel free to reach out:

Sahil Raza Ansari
  - Email: [Your Email Address]
  - LinkedIn: [Your LinkedIn Profile URL]

Thank you for your time and consideration. I am confident that my work demonstrates a strong commitment to delivering high-quality, scalable, and user-centric full-stack solutions.
