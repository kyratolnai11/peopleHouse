/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  listEvents,
  eventsByVenueId,
  getEvent,
  attendeeUsersByUserId,
} from "../graphql/queries";
import { createEvent, deleteEvent } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import {
  CreateEventInput,
  GetEventQuery,
  ModelAttendeeUserConnection,
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
