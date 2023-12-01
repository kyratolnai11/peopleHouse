import { Auth } from "aws-amplify";

export const fetchUserData = async () => {
  try {
    const userInfo = await Auth.currentAuthenticatedUser();
    const { attributes } = userInfo;
    const firstName = attributes["custom:firstName"] || "";
    const lastName = attributes["custom:lastName"] || "";
    return `${firstName} ${lastName}`;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Re-throw the error to handle it in the calling component
  }
};

export async function fetchLoggedInUserID() {
  try {
    const user = await Auth.currentAuthenticatedUser({
      bypassCache: false,
    });

    return user.attributes.sub;
  } catch (error) {
    console.error(error);
  }
}

export const fetchUserType = async () => {
  try {
    const userInfo = await Auth.currentAuthenticatedUser();
    const { attributes } = userInfo;
    const userType = attributes["custom:userType"] || "";
    return userType;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Re-throw the error to handle it in the calling component
  }
};
