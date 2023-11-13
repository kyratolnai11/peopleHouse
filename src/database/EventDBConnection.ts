/* eslint-disable @typescript-eslint/no-explicit-any */
import { listEvents, eventsByVenueId, getEvent, getAttendeeUser, getAttendeeCrew } from "../graphql/queries";
import { createAttendeeCrew, createAttendeeUser, createEvent, deleteAttendeeCrew, deleteAttendeeUser, deleteEvent } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { AttendeeCrew, AttendeeUser, CreateAttendeeCrewInput, CreateAttendeeUserInput, CreateEventInput, GetEventQuery, ModelEventConnection, User } from "../API";
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

export const deleteEventById = async (eventId: string) =>{
  try{
    console.log('Deleting event by id: '+ eventId);
    const resp = await API.graphql(graphqlOperation(deleteEvent, {input: {id: eventId}}));
    console.log('Successfully deleted event! ', resp);
  } catch (error){
    console.log('Error deleting event: ', error);
  }
}


export const addUserAttendee = async (eventId: string, userId: string) => {
  try {
      console.log('Registering user to event...');
      const attendeeToAdd: CreateAttendeeUserInput = {
          eventId: eventId,
          userId: userId,
          id: userId
      };

      const response = await API.graphql(graphqlOperation(createAttendeeUser, { input: attendeeToAdd }));

      console.log('Successfully added attendee');
      return response; // Return the response

  } catch (error) {
      console.log('Error registering user to event: ', error);
      throw error; // Re-throw the error to handle it in the calling function
  }
};


export const addCrewAttendee =async (eventId:string, crewId: string) => {
  try{
    console.log('Registering user to event...');
    const attendeeToAdd: CreateAttendeeCrewInput ={
      eventId: eventId,
      crewId: crewId,
      id: crewId,
    };
    const responnse = await API.graphql(graphqlOperation(createAttendeeCrew, {input: attendeeToAdd}));
    console.log('Successfully added attendee');
  } catch (error){
    console.log('Error registering user to event: ', error); 
  }
}

export const deleteUserAttendee = async (attendeeId: string) => {
  try {
    console.log('Deleting user attendee');
    const resp = await API.graphql(
      graphqlOperation(deleteAttendeeUser, { input: { id: attendeeId} })
    );
    
    console.log('Successfully deleted attendee. ', resp);
  } catch (error) {
    console.log('Error deleting attendee: ', error);
  }
};

export const deleteCrewAttendee = async (attendeeId: string) => {
  try {
    console.log('Deleting user attendee');
    const resp = await API.graphql(
      graphqlOperation(deleteAttendeeCrew, {
        input: { id: attendeeId }
      })
    );
    console.log('Successfully deleted attendee. ', resp);
  } catch (error) {
    console.log('Error deleting attendee: ', error);
  }
};



export async function getAttendeeUserByID(
  id: string
): Promise<AttendeeUser | undefined> {
  try {
    console.log("Getting attendee user " + id);
    const attendeeData: any = await API.graphql(
      graphqlOperation(getAttendeeUser, { id: id })
    );
    const user: AttendeeUser = attendeeData.data.GetAttendeeUser;
    console.log("Got attendee:", user);
    return user;
  } catch (error) {
    console.log("Error fetching attendee user:", error);
  }
}

export async function getAttendeeCrewrByID(
  id: string
): Promise<AttendeeCrew | undefined> {
  try {
    console.log("Getting attendee crew " + id);
    const attendeeData: any = await API.graphql(
      graphqlOperation(getAttendeeCrew, { id: id })
    );
    const user: AttendeeCrew = attendeeData.data.GetAttendeeUser;
    console.log("Got attendee:", user);
    return user;
  } catch (error) {
    console.log("Error fetching attendee crew:", error);
  }
}
