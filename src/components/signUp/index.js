import React, { useState } from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import './SignUp.css';

export default function SignUp() {
    // State to store input field values
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', { firstName, lastName, email, password, confirmPassword, termsAccepted });
    };

    return (
        <Box component="main" className="bg-[#faebd7] px-6 py-28">
            <Container maxWidth="xs">
                <form onSubmit={handleSubmit}>
                    <fieldset className="px-2">
                        <legend>Sign Up</legend>

                        <TextField
                            margin="normal"
                            required
                            label="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            size="small"
                            fullWidth
                        />
                        <TextField
                            margin="normal"
                            required
                            label="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            size="small"
                            fullWidth
                        />
                        <TextField
                            margin="normal"
                            required
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            size="small"
                            fullWidth
                        />
                        <TextField
                            margin="normal"
                            required
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            size="small"
                            fullWidth
                        />
                        <TextField
                            margin="normal"
                            required
                            label="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            size="small"
                            fullWidth
                        />

                        <Box className="flex justify-center mt-4">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={termsAccepted}
                                    onChange={(e) => setTermsAccepted(e.target.checked)}
                                />
                                I accept the Terms of Use & Privacy Policy
                            </label>
                        </Box>

                        <Box className="flex justify-center mt-4">
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ textTransform: 'capitalize' }}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </fieldset>
                </form>
								<p>Already have an account?<a href="/login" className="login-link">Login here</a></p>
            </Container>
        </Box>
    );
}
