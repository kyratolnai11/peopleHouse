/* eslint-disable @typescript-eslint/no-explicit-any */
import { getVenue, listVenues } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { ModelVenueConnection, Venue } from "../API";

export async function fetchVenues(): Promise<ModelVenueConnection | undefined> {
  try {
    console.log("Getting venues...");
    const venueData: any = await API.graphql(graphqlOperation(listVenues));
    const venues: ModelVenueConnection = venueData.data.listVenues;
    console.log("Got venues:", venues);
    return venues;
  } catch (err) {
    console.error("Error fetching venues:", err);
  }
}

export async function fetchVenueById(
  venueId: string
): Promise<Venue | undefined> {
  try {
    console.log(`Getting venue with ID: ${venueId}`);
    const venueDataSingle: any = await API.graphql(
      graphqlOperation(getVenue, { id: venueId })
    );
    const venue: Venue = venueDataSingle.data.getVenue;
    console.log("Got venue", venue);
    return venue;
  } catch (error) {
    console.error("Error fetching venue: ", error);
  }
}
