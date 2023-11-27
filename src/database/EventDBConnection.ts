/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  listEvents,
  eventsByVenueId,
  getEvent,  attendeeUsersByUserId, attendeeCrewsByEventId, attendeeUsersByEventId,
} from "../graphql/queries";
import { createAttendeeCrew, createAttendeeUser, createEvent, deleteAttendeeCrew, deleteAttendeeUser, deleteEvent } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import {  AttendeeUser, CreateAttendeeCrewInput, CreateAttendeeUserInput,
  CreateEventInput,
  GetEventQuery, ModelAttendeeCrewConnection, ModelAttendeeUserConnection,
  ModelEventConnection, 
} from "../API";
import { CreateEventForm } from "../screens/CreateEventScreen";

export async function fetchAllEvents(): Promise<
  ModelEventConnection | undefined
> {
  try {
    console.log("Getting events...");
    const eventData: any = await API.graphql(graphqlOperation(listEvents));
    const events: ModelEventConnection = eventData.data.listEvents;
    console.log("Got events:", events);
    return events;
  } catch (error) {
    console.log("Error fetching events:", error);
  }
}

export async function fetchEventsByVenueId(
  id: string
): Promise<ModelEventConnection | undefined> {
  try {
    console.log("Getting events for venue id: " + id);
    const eventData: any = await API.graphql(
      graphqlOperation(eventsByVenueId, { venueId: id })
    );
    const events: ModelEventConnection = eventData.data.eventsByVenueId;
    console.log("Got events:", events);
    return events;
  } catch (error) {
    console.log("Error fetching events:", error);
  }
}

export const addEvent = async (event: CreateEventForm) => {
  try {
    console.log("Try to add event...");
    const eventToAdd: CreateEventInput = {
      title: event.eventTitle,
      brief: event.brief,
      description: event.description,
      agenda: event.agenda ?? "",
      startDateTime: event.startTime.toISOString(),
      endDateTime: event.endTime.toISOString(),
      numOfTickets: event.nuOfTickets,
      host: event.host,
      venueId: event.venueId,
    };
    const response = await API.graphql(
      graphqlOperation(createEvent, { input: eventToAdd })
    );
    console.log("Response:", response);
  } catch (error) {
    console.log("Error creating event:", error);
  }
};

export async function fetchEventById(
  id: string
): Promise<GetEventQuery | undefined> {
  try {
    console.log("Getting event by Id: " + id);
    const eventData: any = await API.graphql(
      graphqlOperation(getEvent, { id: id })
    );
    const events = eventData.data;
    console.log("Got events by id:", events);
    return events;
  } catch (error) {
    console.log("Error fetching events:", error);
  }
}

export const deleteEventById = async (eventId: string) => {
  try {
    console.log("Deleting event by id: " + eventId);
    const resp = await API.graphql(
      graphqlOperation(deleteEvent, { input: { id: eventId } })
    );
    console.log("Successfully deleted event! ", resp);
  } catch (error) {
    console.log("Error deleting event: ", error);
  }
};

export const getEventFromAttendeeUser = async (
  userId: string
): Promise<ModelAttendeeUserConnection | undefined> => {
  try {
    console.log("Getting eventIds for user: " + userId);
    const resp: any = await API.graphql(
      graphqlOperation(attendeeUsersByUserId, { userId: userId })
    );
    const events = resp.data.attendeeUsersByUserId;
    console.log("Got events by id:", events);
    return events;
  } catch (error) {
    console.log("Error getting event: ", error);
  }
};




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


export const addCrewAttendee =async (eventId:string, crewId: string) => {
  try{
    console.log('Registering crew to event...');
    const attendeeToAdd: CreateAttendeeCrewInput ={
      eventId: eventId,
      crewId: crewId,
    };
    const responnse = await API.graphql(graphqlOperation(createAttendeeCrew, {input: attendeeToAdd}));
    console.log('Successfully added crew attendee', responnse);
  } catch (error){
    console.log('Error registering user to event: ', error); 
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

export const deleteCrewAttendee = async (attendeeId: string) => {
  try {
    console.log('Deleting crew attendee');
    const resp = await API.graphql(
      graphqlOperation(deleteAttendeeCrew, {
        input: { id: attendeeId }
      })
    );
    console.log('Successfully deleted  crew attendee. ', resp);
  } catch (error) {
    console.log('Error deleting attendee: ', error);
  }
};



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
