# 📋 Task Manager API

> A full-stack RESTful API with an interactive dashboard for task management. Built with Node.js, Express, MongoDB, and vanilla JavaScript.

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](YOUR_RENDER_LINK_HERE)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)
[![Node.js](https://img.shields.io/badge/node.js-v18+-green?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/mongodb-Atlas-brightgreen?style=for-the-badge&logo=mongodb)](https://www.mongodb.com)

---

## 🌟 Features

### Backend API
- ✅ **Full CRUD Operations** - Create, Read, Update, Delete tasks
- 🔍 **Advanced Filtering** - Filter by status, priority, and sort options
- 📊 **Real-time Statistics** - Track pending, in-progress, and completed tasks
- 🗃️ **MongoDB Integration** - Persistent data storage with Mongoose ODM
- ⚡ **RESTful Architecture** - Clean, scalable API design
- 🛡️ **Error Handling** - Comprehensive validation and error messages
- 🔐 **Security Ready** - JWT preparation for future authentication

### Frontend Dashboard
- 🎨 **Modern UI/UX** - Responsive gradient design with smooth animations
- 📱 **Mobile Responsive** - Works seamlessly on all devices
- 🎯 **Interactive Cards** - Color-coded task cards with badges
- 🔄 **Real-time Updates** - Instant statistics and list refresh
- 🎭 **Status Management** - Quick status cycling (pending → in-progress → completed)
- 📈 **Visual Statistics** - Four-card dashboard showing task breakdown

---

## 🚀 Live Demo

**[View Live Application →](https://task-manager-api-2-kzi8.onrender.com/)**

Try it out:
1. Create a new task with title and description
2. Set priority (low, medium, high) and status
3. Filter tasks by status or priority
4. Update task status with one click
5. Delete completed tasks

---

## 📸 Screenshots

### Dashboard Overview
```
┌─────────────────────────────────────────────┐
│         📋 Task Manager API                 │
│    Backend Developer Internship Project    │
└─────────────────────────────────────────────┘

  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐
  │   12   │  │   3    │  │   5    │  │   4    │
  │ Total  │  │Pending │  │Progress│  │Complete│
  └────────┘  └────────┘  └────────┘  └────────┘
```

### Task Card Example
```
┌──────────────────────────────────────┐
│ Complete Backend Project             │
│ [in-progress] [high]                 │
│ Build RESTful API with Node.js       │
│ Due: Oct 22, 2025                    │
│ [Update Status] [Delete]             │
└──────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Backend
- **Runtime:** Node.js (v18+)
- **Framework:** Express.js
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Environment:** dotenv

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern gradients, flexbox, grid
- **JavaScript (ES6+)** - Async/await, Fetch API
- **No frameworks** - Pure vanilla JavaScript

### Tools & Services
- **Version Control:** Git & GitHub
- **Deployment:** Render (Backend + Frontend)
- **Database Hosting:** MongoDB Atlas
- **API Testing:** Postman (optional)

---

## 📁 Project Structure

```
TASK-MANAGER-API/
│
├── public/                  # Frontend files
│   └── index.html          # Dashboard UI
│
├── src/                     # Backend source code
│   ├── config/
│   │   └── database.js     # MongoDB connection
│   │
│   ├── models/
│   │   └── Task.js         # Task schema & model
│   │
│   ├── controllers/
│   │   └── taskController.js  # Business logic
│   │
│   ├── routes/
│   │   └── taskRoutes.js   # API endpoints
│   │
│   ├── middleware/
│   │   └── (future auth)   # JWT middleware (future)
│   │
│   ├── app.js              # Express app configuration
│   └── server.js           # Server entry point
│
├── .env                     # Environment variables
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies & scripts
└── README.md               # Project documentation
```

---

## 🔌 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/health` | API health check | - |
| `GET` | `/tasks` | Get all tasks | Query params: `?status=pending&priority=high` |
| `GET` | `/tasks/statistics` | Get task statistics | - |
| `GET` | `/tasks/:id` | Get single task | - |
| `POST` | `/tasks` | Create new task | `{ title, description, priority, status, dueDate }` |
| `PUT` | `/tasks/:id` | Update task | `{ title?, description?, priority?, status?, dueDate? }` |
| `DELETE` | `/tasks/:id` | Delete task | - |

### Example Requests

#### Create Task
```bash
POST /api/tasks
Content-Type: application/json

{
  "title": "Complete Backend Project",
  "description": "Build and deploy task manager API",
  "priority": "high",
  "status": "in-progress",
  "dueDate": "2025-10-22"
}
```

#### Response
```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "_id": "671234abcdef...",
    "title": "Complete Backend Project",
    "description": "Build and deploy task manager API",
    "priority": "high",
    "status": "in-progress",
    "dueDate": "2025-10-22T00:00:00.000Z",
    "createdAt": "2025-10-21T10:30:00.000Z"
  }
}
```

#### Get Statistics
```bash
GET /api/tasks/statistics
```

#### Response
```json
{
  "success": true,
  "data": {
    "total": 12,
    "pending": 3,
    "inProgress": 5,
    "completed": 4
  }
}
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher) - [Download](https://nodejs.org)
- **MongoDB Atlas Account** - [Sign up free](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/task-manager-api.git
cd task-manager-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment variables**

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/TaskAPI?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-min-32-characters-long
NODE_ENV=development
```

4. **Setup MongoDB Atlas**
   - Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a database user
   - Whitelist your IP address (or use 0.0.0.0/0 for all)
   - Copy connection string to `MONGODB_URI`

5. **Generate JWT Secret**
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

6. **Start development server**
```bash
npm run dev
```

7. **Open your browser**
```
http://localhost:5000
```

You should see:
```
Server running on port 5000
MongoDB Connected Successfully
```

---

## 📦 Available Scripts

```bash
# Start production server
npm start

# Start development server with auto-reload
npm run dev

# Install dependencies
npm install
```

---

## 🌐 Deployment

### Deploy to Render

1. **Push code to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/task-manager-api.git
git push -u origin main
```

2. **Deploy on Render**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub
   - Click **New +** → **Web Service**
   - Connect your repository
   - Configure:
     - **Name:** `task-manager-api`
     - **Environment:** `Node`
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`
     - **Instance Type:** Free

3. **Add Environment Variables** in Render dashboard:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_production_jwt_secret
NODE_ENV=production
```

4. **Deploy!** Your app will be live at:
```
https://task-manager-api-xxxx.onrender.com
```

---

## 🧪 Testing

### Manual Testing

1. **Test API Health**
```bash
curl http://localhost:5000/api/health
```

2. **Create a Task**
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Task",
    "priority": "high",
    "status": "pending"
  }'
```

3. **Get All Tasks**
```bash
curl http://localhost:5000/api/tasks
```

### Using Postman
1. Import the API endpoints
2. Test each CRUD operation
3. Verify response structures
4. Test error handling

---

## 🎯 Key Features Explained

### 1. Task Schema Validation
```javascript
{
  title: Required, max 100 characters
  description: Optional, max 500 characters
  status: Enum ['pending', 'in-progress', 'completed']
  priority: Enum ['low', 'medium', 'high']
  dueDate: Optional date
  createdAt: Auto-generated timestamp
}
```

### 2. Query Filtering
```javascript
GET /api/tasks?status=pending&priority=high&sort=dueDate
```

### 3. Error Handling
All endpoints return consistent error format:
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message"
}
```

---

## 🔐 Security Features

- ✅ Environment variables for sensitive data
- ✅ MongoDB connection with authentication
- ✅ CORS enabled for cross-origin requests
- ✅ Input validation with Mongoose schemas
- ✅ JWT secret ready for authentication
- 🔄 Rate limiting (planned)
- 🔄 User authentication (planned)

---

## 🚧 Future Enhancements

- [ ] User authentication & authorization (JWT)
- [ ] Task categories/tags
- [ ] Task assignment to users
- [ ] File attachments
- [ ] Email notifications
- [ ] Search functionality
- [ ] Sorting options (date, priority, alphabetical)
- [ ] Dark mode toggle
- [ ] Export tasks to CSV/PDF
- [ ] Task history/audit log
- [ ] Recurring tasks
- [ ] Task comments/notes

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- Express.js documentation
- MongoDB University
- Node.js community
- Render deployment platform
- Stack Overflow community

---

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me via email
- Connect on LinkedIn

---

## ⭐ Show Your Support

If you found this project helpful, please give it a ⭐️!

---

<div align="center">

**Made with ❤️ for Backend Developer Internship**

[🔝 Back to Top](#-task-manager-api)

</div>

