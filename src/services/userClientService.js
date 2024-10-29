const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const headers = {
  'Content-Type': 'application/json',
};

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

export const deleteUser = async (userId, token) => {
  const authHeaders = {
    ...headers,
    'Authorization': `Bearer ${token}` // Include the Bearer token in the header
  };

  try {
    const response = await fetch(`${API_BASE_URL}/users/delete${userId}`, {
      method: 'DELETE',
      headers: authHeaders // Pass headers correctly here
    });

    console.log(response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to delete user. Please try again.');
    }

    const data = await response.json();
    console.log('User deleted successfully:', data);
    return data; // Return the response data (confirmation or details)
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error; // Rethrow the error for further handling
  }
};

export const update = async (userData, token, headers) => {
  const authHeaders = {
    ...headers,
    'Authorization': `Bearer ${token}`, // Include the Bearer token in the header
    'Content-Type': 'application/json' // Set the content type for JSON data
  };

  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'PUT',
      headers: authHeaders, // Pass headers correctly here
      body: JSON.stringify(userData) // Convert user data to JSON string
    });

    console.log(response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to update user. Please try again.');
    }

    const data = await response.json();
    console.log('User updated successfully:', data);
    return data; // Return the response data (updated user info)
  } catch (error) {
    console.error('Error updating user:', error);
    throw error; // Rethrow the error for further handling
  }
};