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
        title: "Acrylic Painting for Beginners",
        brief: "Express your creativity!",
        description: "If you are new to the art scene, this is the workshop for you! Our creative facilitator and artist Kirsten starts with a brief overview of different techniques and forms of expression that you can use as inspiration, and then we're off to a good start. Kirsten's teaching in acrylic painting is based on you and the art you would like to express. She uses layer upon layer techniques, lasering, drip painting, and splashing. Kirsten has all the materials you need ready for you in Maker Space,  so your desire to paint is the only prerequisite for participating! Cost: 50 DKK The class fee can be paid at the Heart Café prior to the start of the class and the receipt will serve as your ticket. Denne workshop er for dig der er ”helt ny” som billedkunstner, og den kreative facilitator og kunstner Kirsten, starter med en kort gennemgang af forskellige teknikker og udtryksformer, du kan bruge som inspiration….og så er vi ligesom i gang. Kirstens undervisning i akrylmaleri, tager udgangspunkt i dig og den kunst du tænker du gerne vil udtrykke. Hun anvender lag på lag teknikker, lasering, drip painting (dryp teknik) og splash. Alle materialerne du skal bruge, har Kirsten klar til dig i Maker Space, sin lyst til at male er den eneste forudsætning for at deltage! Pris: 50 DKK Betaling for holdet skal ske i Heart Café inden holdets start, og kvitteringen vil fungere som din billet.",
        agenda: "Minimum participant age: 12 *Please note, this workshop is for participants 12 years and up and our facilitator cannot accommodate accompanying younger children* Aldersbegrænsning: 12 år Vær venligst opmærksom på, at denne workshop er for voksne og at facilitatoren ikke kan varetage undervisning af medbragte børn samtidig.",
        datetime: "2023-10-23T16:15:00Z",
        numOfTickets: 100,
        host: "Community Builder Team",
        venueId: "11",
    };
    const response = await API.graphql(
      graphqlOperation(createEvent, { input: eventToAdd })
    );
    console.log("Response:", response);
  } catch (error) {
    console.log("Error creating event:", error);
  }
};
