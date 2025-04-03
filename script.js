document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Function to validate email format
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Function to show error message
    const showError = (element, message) => {
        element.textContent = message;
        element.classList.remove('hidden');
    };

    // Function to hide error message
    const hideError = (element) => {
        element.classList.add('hidden');
    };

    // Function to simulate loading state
    const setLoadingState = (isLoading) => {
        const submitButton = loginForm.querySelector('button[type="submit"]');
        if (isLoading) {
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Signing in...';
            submitButton.disabled = true;
        } else {
            submitButton.innerHTML = 'Sign In';
            submitButton.disabled = false;
        }
    };

    // Handle form submission
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Reset error states
        hideError(emailError);
        hideError(passwordError);
        
        let hasError = false;

        // Validate email
        if (!emailInput.value.trim()) {
            showError(emailError, 'Email is required');
            hasError = true;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailError, 'Please enter a valid email address');
            hasError = true;
        }

        // Validate password
        if (!passwordInput.value.trim()) {
            showError(passwordError, 'Password is required');
            hasError = true;
        }

        if (hasError) return;

        try {
            // Simulate API call
            setLoadingState(true);
            
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
            
            // Simulate successful login
            const mockResponse = {
                success: true,
                message: 'Login successful!'
            };

            if (mockResponse.success) {
                // Show success message
                alert('Login successful! Redirecting...');
                // In a real application, you would redirect to dashboard or handle the session
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred during login. Please try again.');
        } finally {
            setLoadingState(false);
        }
    });

    // Real-time validation
    emailInput.addEventListener('input', () => {
        if (emailInput.value.trim()) {
            hideError(emailError);
        }
    });

    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.trim()) {
            hideError(passwordError);
        }
    });
});