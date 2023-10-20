import { Auth } from "aws-amplify";

const fetchUserData = async () => {
  try {
    const userInfo = await Auth.currentAuthenticatedUser();
    const { attributes } = userInfo;
    const firstName = attributes['custom:firstName'] || '';
    const lastName = attributes['custom:lastName'] || '';
    return `${firstName} ${lastName}`;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Re-throw the error to handle it in the calling component
  }
};

export default {
  fetchUserData
};
