/* eslint-disable @typescript-eslint/no-explicit-any */
import { getVenue, listVenues } from "../graphql/queries";
import { createVenue } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { CreateVenueInput, ModelVenueConnection, Venue } from "../API";

export async function fetchVenues(): Promise<ModelVenueConnection | undefined> {
  try {
    console.log("Getting venues...");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const venueData: any = await API.graphql(graphqlOperation(listVenues));
    const venues: ModelVenueConnection = venueData.data.listVenues;
    console.log("Got venues:", venues);
    return venues;
  } catch (err) {
    console.log("Error fetching venues:", err);
  }
}

export async function fetchVenueById(venueId: string): Promise<Venue | undefined> {
  try {
      console.log(`Getting venue with ID: ${venueId}`);
      const venueDataSingle: any = await API.graphql(graphqlOperation(getVenue, { id: venueId }));
      const venue: Venue = venueDataSingle.data.getVenue;
      console.log('Got venue', venue);
      return venue;
  } catch (error) {
      console.log('Error fetching venue: ', error);
  }
}

export const addVenue = async () => {
  try {
    console.log("Try to add venue...");
    const venueToAdd: CreateVenueInput = {
      id: "1",
      name: "Test data",
      shortDescription: "Test data",
      description: "Test data",
      capacity: 50,
      openingHours: "00:00 - 24:00",
    };
    const response = await API.graphql(
      graphqlOperation(createVenue, { input: venueToAdd })
    );
    console.log(response);
  } catch (error) {
    console.log("Error creating venue:", error);
  }
};
