import { CreateCrewInput } from "../API";
import { AddCrewForm } from "../components/add-crew/CrewDropDown";
import { createCrew } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

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
