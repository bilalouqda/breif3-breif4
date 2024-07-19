const express = require('express');
const rateLimit = require('express-rate-limit');

// Set up the rate limiting middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    headers: true,
});

// Apply rate limiter to all requests
app.use(limiter);