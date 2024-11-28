/* eslint-disable no-unused-vars */
export const getToken = () => {
  let token = localStorage.getItem('userInfo'); // or 'token', depending on your key
  
  // If the token is stored as a JSON string, parse it
  try {
    token = JSON.parse(token);
  } catch (error) {
    // If parsing fails, the token might already be a plain string
  }

  // Ensure the token is returned without extra quotes
  return token ? token.replace(/^"|"$/g, '') : null;
};
