/* eslint-disable @typescript-eslint/no-explicit-any */
import { API, graphqlOperation } from "aws-amplify";
import { CreateUserInput, ModelUserConnection, User } from "../API";
import { createUser } from "../graphql/mutations";
import { listUsers, getUser } from "../graphql/queries";

export const addUser = async (userToAdd: CreateUserInput) => {
  try {
    console.log("Trying to add user to db...");
    const ras = await API.graphql(
      graphqlOperation(createUser, { input: userToAdd })
    );
    console.log("User added to db: ", ras);
  } catch (err) {
    console.error("Error creating user: ", err);
    throw err;
  }
};

export async function fetchUsers(): Promise<ModelUserConnection | undefined> {
  try {
    console.log("Getting all users...");
    const userData: any = await API.graphql(graphqlOperation(listUsers));
    const users: ModelUserConnection = userData.data.listUsers;
    console.log("Got users");
    return users;
  } catch (error) {
    console.error("Error fetching users: ", error);
  }
}

export async function fetchUserById(userId: string): Promise<User | undefined> {
  try {
    console.log(`Getting user with ID: ${userId}`);
    const userDataSingle: any = await API.graphql(
      graphqlOperation(getUser, { id: userId })
    );
    const user: User = userDataSingle.data.getUser;
    console.log("Got user", user);
    return user;
  } catch (error) {
    console.error("Error fetching user: ", error);
  }
}
