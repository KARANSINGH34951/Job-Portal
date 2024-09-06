
# Job Portal

A comprehensive Job Portal application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform enables job seekers to search and apply for jobs, and employers to post jobs and manage applications.

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **API Testing:** Postman
- **Deployment:** (Optional: Include details if deployed, e.g., Heroku, Vercel, etc.)

## Features

### Job Seekers
- Search jobs by title, location, or category.
- View detailed job descriptions.
- Apply to jobs with a resume and cover letter.
- Track application status.

### Employers
- Post new jobs with title, description, requirements, and salary.
- Manage job postings (edit or delete).
- Review and manage candidate applications.

### Admin
- Full access to manage users, jobs, and applications.
- Monitor platform activities.

### Authentication & Authorization
- Secure authentication using JWT tokens.
- Role-based access control for job seekers, employers, and admins.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) and npm (or yarn)
- [MongoDB](https://www.mongodb.com/)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/KARANSINGH34951/job-portal.git
   cd job-portal
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:
   ```bash
   MONGO_URI=<Your MongoDB connection string>
   JWT_SECRET=<Your JWT secret>
   ```

4. Start the backend server:
   ```bash
   npm run start
   ```

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the frontend:
   ```bash
   npm run start
   ```

4. Open the app in your browser at `http://localhost:3000`

## API Endpoints

### Job Seekers

- **GET /api/jobs** - Fetch all jobs.
- **GET /api/jobs/:id** - Get job details by ID.
- **POST /api/jobs/:id/apply** - Apply to a job with resume.

### Employers

- **POST /api/jobs** - Create a new job posting.
- **PUT /api/jobs/:id** - Update a job posting.
- **DELETE /api/jobs/:id** - Delete a job posting.
- **GET /api/jobs/applications/:id** - Get applications for a job.

### Admin

- **GET /api/admin/users** - Get all users.
- **DELETE /api/admin/users/:id** - Delete a user.

## Folder Structure

```
job-portal/
│
├── backend/          # Backend code (Node.js, Express, MongoDB)
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   ├── controllers/  # Route handlers
│   └── server.js     # Entry point for the backend
│
├── frontend/         # Frontend code (React.js)
│   ├── public/       # Static assets
│   ├── src/          # React components, hooks, services
│   └── App.js        # Entry point for the frontend
│
└── README.md         # Project documentation
```

## Contributing

Feel free to open issues or pull requests if you find any bugs or want to contribute!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
