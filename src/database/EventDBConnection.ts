/* eslint-disable @typescript-eslint/no-explicit-any */
import { listEvents, eventsByVenueId, getEvent } from "../graphql/queries";
import { createEvent } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { CreateEventInput, GetEventQuery, ModelEventConnection } from "../API";

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
      graphqlOperation(eventsByVenueId, id)
    );
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
      title: "Music and Rhythm for Littles",
      brief: "Join our family friendly musical playroom!",
      description:
        "At this family workshop you will sing and play together with our talented facilitator Jannie. Jannie works with children and music every day, so she knows exactly how to get 'the whole team' to sing and play together. When you have sung a few songs, you will discover the foundation of music (pulse of music) - the four magic '1,2,3,4'. You will build up rhythms with some simple notes and then of course you will play on your own body (body percussion) and on instruments. Come and join in making music the fun way. Cost: 10 DKK The workshop fee can be paid at the Heart Café prior to the start of the class and the receipt will serve as your ticket. På denne Family workshop skal I synge, spille og lege sammen med Jannie. Begge arbejder de med børn og musik hver dag, så de ved helt præcist hvordan de skal få ”hele holdet” til at synge og spille sammen. Når I har sunget et par sange, skal I på opdagelse i Musikkens fundament (Musikkens puls) – de magiske fire ”1,2,3,4”. I skal opbygge rytmer med nogle enkle noder og så skal der selvfølgelig spilles på din egen krop(bodypercussion) samt på instrumenter. Kom og vær med til at lave musik på den sjove måde. Pris: 10 DKK Betaling for holdet skal ske i Heart Café inden holdets start, og kvitteringen vil fungere som din billet. ",
      agenda:
        "Minimum participant age: 3 *Please note, parents must stay with children under 16 while they are in People House* Aldersbegrænsning: 3 år *Vær venligst opmærksom på, at børn under 16 år skal være under forældres opsyn hele tiden, mens de opholder sig i People House*",
      startDateTime: "2023-10-28T12:00:00Z",
      endDateTime: "2023-10-28T12:30:00Z",
      numOfTickets: 100,
      host: "Community Builder Team",
      venueId: "5",
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
