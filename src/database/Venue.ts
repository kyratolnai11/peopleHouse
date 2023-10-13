import { listVenues } from "../graphql/queries";
import { createVenue } from "../graphql/mutations";
import { API, graphqlOperation } from 'aws-amplify';
import { CreateVenueInput, ModelVenueConnection } from "../API";

export async function fetchVenues() {
  try {
    console.log("Getting venues...");
    var venueData: any = await API.graphql(graphqlOperation(listVenues));
    let venues: ModelVenueConnection = venueData.data.listVenues.items;
    console.log(venues);
  } catch (err) {
    console.log('error fetching todos:', err);
  }
}

export const addVenue = async () => {
  try {
    console.log("Try to add venue...");
    let venueToAdd: CreateVenueInput = {
      id: "1",
      name: "Test data",
      shortDescription: "Test data",
      description: "Test data",
      capacity: 50,
      openingHours: "00:00 - 24:00"
    };
    var ras = await API.graphql(graphqlOperation(createVenue, {input: venueToAdd}));
    console.log(ras)
  } catch (err) {
    console.log('error creating venue:', err);
  }
}
