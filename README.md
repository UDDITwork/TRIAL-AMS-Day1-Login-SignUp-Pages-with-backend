# Student Authentication System Validation

## Day 1 Research Summary 🎯

Today, we verified the optimal code structure for a student authentication system capable of handling 100k+ registrations. Key findings:

✅ MongoDB as database choice
✅ Proper schema design
✅ Efficient authentication flow
✅ Scalable architecture validation

Read more about this project: [Twitter Thread](https://x.com/UdditRise/status/1874242850797609454)

"aaj ka pehle din me hamne ye verify kar liya ki 1 lakh students ke liye login/signup pages ki information store karne ke liye sahi code kya hoga?"


# Student Registration & Login System

A robust authentication system built with Node.js, Express, and MongoDB, capable of handling 100,000+ student registrations.

npm install nodemailer
## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- MongoDB Compass (optional, for database visualization)

## Setup Instructions

1. Install MongoDB Community Server:
   - Download from MongoDB website
   - Choose "Complete" installation
   - Select "Install MongoDB as a Service"

## We have to install mongodb compass gui, mongodb set up install msi install , then open windows cmd with open as administrator , and there type "net start MongoDB"
![image](https://github.com/user-attachments/assets/298aec9b-6bd2-4330-994d-5e31392eb641)


3. Install dependencies:
```bash
npm init -y 
npm install express mongoose bcrypt
```

4. Create project structure:
```
project/
├── server.js
├── public/
│   ├── registration.html
│   ├── login.html
│   └── success.html
```

5. Start MongoDB:
- Windows: MongoDB runs as a service automatically
- Check service status: `services.msc`

6. Run the application:
```bash
node server.js
```
![image](https://github.com/user-attachments/assets/a62917a7-2e69-49a6-8bc7-c47abc5b1e1d)


7. Access the application:
- Registration: http://localhost:3000/registration.html
- Login: http://localhost:3000/login.html

## Database Structure

MongoDB Schema:
```javascript
{
    userId: String (unique),
    name: String,
    password: String (hashed)
}
```

## API Endpoints

- POST /register
  - Registers new student
  - Required fields: userId, name, password

- POST /login
  - Authenticates student
  - Required fields: userId, password

## Security Features

- Password hashing using bcrypt
- Input validation
- Duplicate user prevention
- Error handling

## Testing

1. Register a test user:
   - Open registration page
   - Fill in details
   - Submit form

2. Verify in MongoDB Compass:
   - Connect to: mongodb://127.0.0.1:27017
   - Database: studentDB
   - Collection: students

![image](https://github.com/user-attachments/assets/b3a22093-2ee2-446d-a8e6-9a4cb2dc71ce)
https://x.com/UdditRise/status/1874242850797609454
