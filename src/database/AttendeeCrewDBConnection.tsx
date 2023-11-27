/* eslint-disable @typescript-eslint/no-explicit-any */
import { API, graphqlOperation } from "aws-amplify";
import { CreateAttendeeCrewInput, ModelAttendeeCrewConnection } from "../API";
import { createAttendeeCrew, deleteAttendeeCrew } from "../graphql/mutations";
import { attendeeCrewsByEventId } from "../graphql/queries";

export const addCrewAttendee =async (eventId:string, crewId: string) => {
    try{
      console.log('Registering crew to event...');
      const attendeeToAdd: CreateAttendeeCrewInput ={
        eventId: eventId,
        crewId: crewId,
      };
      const responnse = await API.graphql(graphqlOperation(createAttendeeCrew, {input: attendeeToAdd}));
      console.log('Successfully added crew attendee');
    } catch (error){
      console.log('Error registering user to event: ', error); 
    }
  };

  export const deleteCrewAttendee = async (attendeeId: string) => {
    try {
      console.log('Deleting crew attendee');
      const resp = await API.graphql(
        graphqlOperation(deleteAttendeeCrew, {
          input: { id: attendeeId }
        })
      );
      console.log('Successfully deleted  crew attendee. ', resp);
    } catch (error) {
      console.log('Error deleting attendee: ', error);
    }
  };

  export async function getAttendeeCrewsByEventID(
    id: string
  ): Promise<ModelAttendeeCrewConnection | undefined> {
    try {
      console.log("Getting attendee crews " + id);
      const attendeeData: any = await API.graphql(graphqlOperation(attendeeCrewsByEventId, { eventId: id }));
      const crews: ModelAttendeeCrewConnection = attendeeData.data.attendeeCrewsByEventId;
  
      console.log("Got crew attendees:", crews);
      return crews;
    } catch (error) {
      console.log("Error fetching attendee crews:", error);
    }
  }