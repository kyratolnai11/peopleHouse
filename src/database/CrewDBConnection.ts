import { CreateCrewInput,  Crew,  ModelCrewConnection} from "../API";
import { AddCrewForm } from "../components/add-crew/CrewDropDown";
import { createCrew } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { crewsByUserId, listCrews} from "../graphql/queries";

export const addCrew = async (userId: string, crewData: AddCrewForm) => {
  try {
    console.log("Try to add crew");
    const crewToAdd: CreateCrewInput = {
      firstname: crewData.firstName,
      lastname: crewData.lastName,
      userId: userId,
      familyRole: crewData.userType,
      dateOfBirth: crewData.dateOfBirth?.toISOString() ?? null,
      email: crewData.email ?? null,
    };
    const ras = await API.graphql(
      graphqlOperation(createCrew, { input: crewToAdd })
    );
    console.log(ras);
  } catch (err) {
    console.log("error creating venue:", err);
  }
};

export async function fetchCrewsByUser(id: string): Promise<ModelCrewConnection | undefined> {
  try {
    console.log("Getting crews for user id: " + id);
    const crewData: any = await API.graphql(graphqlOperation(crewsByUserId, { userId: id }));
    console.log(crewData);
    const crews: ModelCrewConnection = crewData.data.crewsByUserId;
    console.log("Got crews for user id:", crews);
    return crews;
  } catch (error) {
    console.log("Error fetching crews for user id: ", error);
  }
}


export async function fetchAllCrews(): Promise<Crew[] | undefined> {
  try {
    console.log(" Getting all the crews:");
    const crewData: any = await API.graphql(graphqlOperation(listCrews));
    const crews: ModelCrewConnection = crewData.data.listCrews;
    console.log("Got crews:", crews);

    // Extract the 'items' array from the 'crews' object and return it
    return crews.items as Crew[];
  } catch (error) {
    console.log("Error fetching crews: ", error);
    return undefined; // Handle the error and return undefined, or you can throw an exception here
  }
}

