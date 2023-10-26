import { API, graphqlOperation } from "aws-amplify";
import { CreateUserInput} from "../API";
import { createUser } from "../graphql/mutations";

export const addUser = async (userToAdd: CreateUserInput) => {
    try {
        console.log('Trying to add user to db...');
        const ras = await API.graphql(graphqlOperation(createUser, { input: userToAdd }));
        console.log('User added to db: ', ras);
    } catch (err) {
        console.log('Error creating user: ', err);
        throw err;
    }
};
