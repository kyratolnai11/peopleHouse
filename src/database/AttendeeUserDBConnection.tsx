/* eslint-disable @typescript-eslint/no-explicit-any */
import { API, graphqlOperation } from "aws-amplify";
import { AttendeeUser, CreateAttendeeUserInput, ModelAttendeeCrewConnection, ModelAttendeeUserConnection } from "../API";
import { attendeeCrewsByEventId, attendeeUsersByEventId, attendeeUsersByUserId } from "../graphql/queries";
import { createAttendeeUser, deleteAttendeeUser } from "../graphql/mutations";

export async function getAttendeeUsersByUserID(
    id: string
  ): Promise<ModelAttendeeUserConnection | undefined> {
    try {
      console.log("Getting attendee users for user ID: " + id);
      const attendeeData: any = await API.graphql(graphqlOperation(attendeeUsersByUserId, { userId: id }));
      const users: ModelAttendeeUserConnection = attendeeData.data.attendeeUsersByUserId;
  
      console.log("Got attendee users:", users);
      return users;
    } catch (error) {
      console.log("Error fetching attendee users:", error);
    }
  }
  
  
  export async function getAttendeeUserByEventID(
    id: string
  ): Promise<AttendeeUser | undefined> {
    try {
      console.log("Getting attendee user " + id);
      const attendeeData: any = await API.graphql(
        graphqlOperation(attendeeUsersByEventId, { userId: id })
      );
      
      const user: AttendeeUser = attendeeData.data.attendeeUsersByEventId;
      console.log("Got user attendee:", user);
      return user;
    } catch (error) {
      console.log("Error fetching attendee user:", error);
    }
  }
  
  
  export async function getAttendeeCrewsByEventID(
    id: string
  ): Promise<ModelAttendeeCrewConnection | undefined> {
    try {
      console.log("Getting attendee crews " + id);
      const attendeeData: any = await API.graphql(graphqlOperation(attendeeCrewsByEventId, { eventId: id }));
      const crews: ModelAttendeeCrewConnection = attendeeData.data.attendeeCrewsByEventId;
  
      console.log("Got crew attendees:", crews);
      return crews;
    } catch (error) {
      console.log("Error fetching attendee crews:", error);
    }
  }

  export const addUserAttendee = async (eventId: string, userId: string) => {
    try {
        console.log('Registering user to event...');
        const attendeeToAdd: CreateAttendeeUserInput = {
            eventId: eventId,
            userId: userId,
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
      graphqlOperation(deleteAttendeeUser, { input: { id: attendeeId} })
    );
    
    console.log('Successfully deleted user attendee. ', resp);
  } catch (error) {
    console.log('Error deleting attendee: ', error);
  }
};