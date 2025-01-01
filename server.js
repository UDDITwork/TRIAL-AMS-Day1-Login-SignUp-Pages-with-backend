// 1. Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();

// 2. MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/studentDB');

// 3. Student Schema
const studentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Student = mongoose.model('Student', studentSchema);

// 4. Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Add this line to serve HTML files

// 5. Registration Route
app.post('/register', async (req, res) => {
    try {
        const { userId, name, password } = req.body;
        
        // Check if user exists
        const existingStudent = await Student.findOne({ userId });
        if (existingStudent) {
            return res.status(400).json({ message: 'User ID already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new student
        const student = new Student({
            userId,
            name,
            password: hashedPassword
        });

        await student.save();
        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// 6. Login Route
app.post('/login', async (req, res) => {
    try {
        const { userId, password } = req.body;

        // Find student
        const student = await Student.findOne({ userId });
        if (!student) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Verify password
        const validPassword = await bcrypt.compare(password, student.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        res.json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// 7. Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});