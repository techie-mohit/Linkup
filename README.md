# Linkup - Real Time Chat App

A full-stack real-time chat application built with Node.js, Express, Socket.io, React, and Tailwind CSS. This project enables users to register, log in, search for other users, and chat instantly with real-time message updates.

## Demo

[Live Demo](https://linkup-u40u.onrender.com)

## Features

- User registration and login
- Real-time messaging using Socket.io
- Search for users and start conversations
- Persistent chat history
- Responsive UI with Tailwind CSS
- Authentication with JWT
- Logout functionality

## Technologies Used

### Backend
- Node.js
- Express.js
- Socket.io
- MongoDB (via Mongoose)
- JWT for authentication

### Frontend
- React
- Vite
- Tailwind CSS
- Zustand (state management)

## Project Structure

```
Linkup/
├── Backend/
│   ├── controller/         # Controllers for user and message logic
│   ├── DB/                 # Database connection
│   ├── middleware/         # Authentication middleware
│   ├── Models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── Socket/             # Socket.io logic
│   └── utils/              # Utility functions
├── Frontend/
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── context/        # React context providers
│   │   ├── home/           # Home page
│   │   ├── login/          # Login page
│   │   ├── register/       # Register page
│   │   ├── utils/          # Utility functions
│   │   ├── Zustand/        # Zustand store
│   │   └── assets/         # Images and sounds
│   ├── index.html
│   ├── main.jsx
│   └── App.jsx
├── package.json            # Project metadata
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository:**
   ```powershell
   git clone https://github.com/techie-mohit/Linkup.git
   cd Linkup
   ```

2. **Install dependencies:**
   - Backend:
     ```powershell
     cd Backend
     npm install
     ```
   - Frontend:
     ```powershell
     cd ../Frontend
     npm install
     ```

3. **Configure environment variables:**
   - Create a `.env` file in the `Backend` folder with your MongoDB URI and JWT secret:
     ```env
     MONGO_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```

4. **Start the application:**
   - Backend:
     ```powershell
     cd Backend
     npm start
     ```
   - Frontend:
     ```powershell
     cd ../Frontend
     npm run dev
     ```

5. **Access the app:**
   - Open [http://localhost:5173](http://localhost:5173) for the frontend.
   - Backend runs on [http://localhost:5000](http://localhost:5000) by default.

## API Endpoints

- `/api/register` - Register a new user
- `/api/login` - Login
- `/api/logout` - Logout
- `/api/message` - Send/receive messages
- `/api/search` - Search users

## Folder Details

### Backend
- **controller/**: Handles user and message logic
- **DB/**: MongoDB connection setup
- **middleware/**: JWT authentication
- **Models/**: Mongoose schemas for User, Message, Conversation
- **routes/**: API endpoints
- **Socket/**: Real-time socket logic
- **utils/**: JWT utilities

### Frontend
- **components/**: Sidebar, MessageContainer, etc.
- **context/**: Auth and Socket context providers
- **home/**, **login/**, **register/**: Page components
- **utils/**: User verification
- **Zustand/**: State management
- **assets/**: Images and sounds

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Author

Developed by techie-mohit

---

For any questions or support, feel free to contact or open an issue on GitHub.
