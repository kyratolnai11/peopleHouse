import { API, graphqlOperation } from "aws-amplify";
import { CreateUserInput, CreateVenueInput, UserType } from "../../API";
import { createUser } from "../../graphql/mutations";
import { listUsers } from "../../graphql/queries";

interface UserAdd {
    userId: string;
    firstName: string;
    lastName: string;
    userType: UserType; // Assuming UserType is an enum
    email: string;
}


export const addUser = async (userAdd: UserAdd) => {
    try{
        console.log('Trying to add user to db...');
        let userToAdd : CreateUserInput={
            id: userAdd.userId,
            firstname: userAdd.firstName,
            lastname: userAdd.lastName,
            userType: userAdd.userType,
            email: userAdd.email,
        };

        var ras = await API.graphql(graphqlOperation(createUser, {input: userToAdd}));
        console.log('User added to db: ', ras);
        

    }catch(err){
        console.log('Error creating user: ', err);
    }
    
}