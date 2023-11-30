/* eslint-disable @typescript-eslint/no-explicit-any */
import { API, graphqlOperation } from "aws-amplify";
import {
  AttendeeUsersByEventIdQuery,
  CreateAttendeeUserInput,
  ModelAttendeeUserConnection,
} from "../API";
import {
  attendeeUsersByEventId,
  attendeeUsersByUserId,
} from "../graphql/queries";
import { createAttendeeUser, deleteAttendeeUser } from "../graphql/mutations";

export async function getAttendeeUsersByUserID(
  id: string
): Promise<ModelAttendeeUserConnection | undefined> {
  try {
    console.log("Getting attendee users for user ID: " + id);
    const attendeeData: any = await API.graphql(
      graphqlOperation(attendeeUsersByUserId, { userId: id })
    );
    const users: ModelAttendeeUserConnection =
      attendeeData.data.attendeeUsersByUserId;

    console.log("Got attendee users:", users);
    return users;
  } catch (error) {
    console.error("Error fetching attendee users:", error);
  }
}


export async function getAttendeeUserByEventID(
  id: string
): Promise<AttendeeUsersByEventIdQuery | undefined> {
  try {
    console.log("Getting attendee user " + id);
    const attendeeData: any = await API.graphql(
      graphqlOperation(attendeeUsersByEventId, { eventId: id })
    );
    const user: AttendeeUsersByEventIdQuery = attendeeData.data;
    console.log("Got user attendee:", user);
    return user;
  } catch (error) {
    console.error("Error fetching attendee user:", error);
  }
}

export const addUserAttendee = async (eventId: string, userId: string) => {
  try {
    console.log("Registering user to event...");
    const attendeeToAdd: CreateAttendeeUserInput = {
      eventId: eventId,
      userId: userId,
    };

    const response = await API.graphql(
      graphqlOperation(createAttendeeUser, { input: attendeeToAdd })
    );

    console.log("Successfully added user attendee");
    return response;
  } catch (error) {
    console.error("Error registering user to event: ", error);
    throw error;
  }
};

export const deleteUserAttendee = async (attendeeId: string) => {
  try {
    console.log("Deleting user attendee");
    const resp = await API.graphql(
      graphqlOperation(deleteAttendeeUser, { input: { id: attendeeId } })
    );

    console.log("Successfully deleted user attendee. ", resp);
  } catch (error) {
    console.error("Error deleting attendee: ", error);
  }
};
