const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const headers = {
  'Content-Type': 'application/json',
};

// Function to log in a user
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed. Please check your credentials.');
    }

    const data = await response.json();
    return data; // Return the response data (token, user info, etc.)
  } catch (error) {
    console.error('Error logging in:', error);
    throw error; // Rethrow the error for further handling
  }
};

// Function to register a new user
export const registerUser = async (firstName, lastName, email, phone, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email: email,
        phone: phone,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error('Registration failed. Please try again.');
    }

    const data = await response.json();
    return data; // Return the response data (success message, user info, etc.)
  } catch (error) {
    console.error('Error registering:', error);
    throw error; // Rethrow the error for further handling
  }
};

export const getAll = async (token) => {
  const authHeaders = {
    ...headers,
    'Authorization': `Bearer ${token}` // Include the Bearer token in the header
  };

  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'GET',
      headers: authHeaders // Pass headers correctly here
    });

    console.log(response);
    if (!response.ok) {
      throw new Error('Failed to fetch users. Please try again.');
    }

    const data = await response.json();
    console.log(data);
    return data; // Return the response data (user info, etc.)
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Rethrow the error for further handling
  }
};
