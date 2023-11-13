import { AttendeeUser, CreateAttendeeUserInput, ModelAttendeeUserConnection } from "../API";
import { createAttendeeUser, deleteAttendeeUser } from "../graphql/mutations";
import { getAttendeeUser, attendeeUsersByEventId } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

export const addUserAttendee = async (eventId: string, userId: string) => {
    try {
        console.log('Registering user to event...');
        const attendeeToAdd: CreateAttendeeUserInput = {
            eventId: eventId,
            userId: userId,
            id: userId
        };

        const response = await API.graphql(graphqlOperation(createAttendeeUser, { input: attendeeToAdd }));

        console.log('Successfully added user attendee');
        return response; // Return the response

    } catch (error) {
        console.log('Error registering user to event: ', error);
        throw error; // Re-throw the error to handle it in the calling function
    }
};

export const deleteUserAttendee = async (attendeeId: string) => {
    try {
        console.log('Deleting user attendee');
        const resp = await API.graphql(
            graphqlOperation(deleteAttendeeUser, { input: { id: attendeeId } })
        );

        console.log('Successfully deleted user attendee. ', resp);
    } catch (error) {
        console.log('Error deleting user attendee: ', error);
    }
};

export async function getAttendeeUserByID(
    id: string
): Promise<AttendeeUser | undefined> {
    try {
        console.log("Getting user attendee user " + id);
        const attendeeData: any = await API.graphql(
            graphqlOperation(getAttendeeUser, { id: id })
        );
        const user: AttendeeUser = attendeeData.data.GetAttendeeUser;
        console.log("Got user attendee:", user);
        return user;
    } catch (error) {
        console.log("Error fetching user attendee:", error);
    }
}

export async function fetchAttendeeUserByEventId(id: string): Promise<ModelAttendeeUserConnection | undefined> {
    try {
        console.log("Getting attendee user by event id: " + id);
        const attendeeUsersData: any = await API.graphql(
            graphqlOperation(attendeeUsersByEventId, { eventId: id })
        );
        const attendeeUsers: ModelAttendeeUserConnection = attendeeUsersData.data.attendeeUsersByEventId;
        console.log("Got attendee users:", attendeeUsers);
        return attendeeUsers;
    } catch (error) {
        console.log("Error fetching attendee urser:", error);
    }
}
