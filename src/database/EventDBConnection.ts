import { listEvents } from "../graphql/queries";
import { createEvent } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { CreateEventInput, ModelEventConnection } from "../API";

export async function fetchAllEvents(): Promise<ModelEventConnection | undefined> {
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

export const addEvent = async () => {
  try {
    console.log("Try to add event...");
    const eventToAdd: CreateEventInput = {
        title: "string",
        brief: "string",
        description: "string",
        agenda: "string",
        datetime: "1970-01-01T00:00:00Z",
        numOfTickets: 100,
        host: "string",
        venueId: "1",
    };
    const response = await API.graphql(
      graphqlOperation(createEvent, { input: eventToAdd })
    );
    console.log("Response:", response);
  } catch (error) {
    console.log("Error creating event:", error);
  }
};
