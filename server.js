const express = require('express')
const app = express()

app.post('/api/login', (req, res) => {
  // Handle the login request
  const { username, password } = req.body

  // Check if the username and password are valid
  if (username === 'admin' && password === 'password') {
    // Return a success response
    res.status(200).json({ message: 'Login successful' })
  } else {
    // Return an error response
    res.status(401).json({ message: 'Invalid username or password' })
  }
})

// Start the server
app.listen(8000, () => {
  console.log('Server is running on port 8000')
})