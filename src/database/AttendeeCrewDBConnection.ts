import { AttendeeCrew, CreateAttendeeCrewInput, ModelAttendeeCrewConnection } from "../API";
import { createAttendeeCrew, deleteAttendeeCrew } from "../graphql/mutations";
import { getAttendeeCrew, attendeeCrewsByEventId } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

export const addCrewAttendee = async (eventId: string, crewId: string) => {
    try {
        console.log('Registering crew to event...');
        const attendeeToAdd: CreateAttendeeCrewInput = {
            eventId: eventId,
            crewId: crewId,
            id: crewId,
        };
        const responnse = await API.graphql(graphqlOperation(createAttendeeCrew, { input: attendeeToAdd }));
        console.log('Successfully added crew attendee');
    } catch (error) {
        console.log('Error registering crew to event: ', error);
    }
}

export const deleteCrewAttendee = async (attendeeId: string) => {
    try {
        console.log('Deleting crew attendee');
        const resp = await API.graphql(
            graphqlOperation(deleteAttendeeCrew, {
                input: { id: attendeeId }
            })
        );
        console.log('Successfully deleted crew attendee. ', resp);
    } catch (error) {
        console.log('Error deleting crew attendee: ', error);
    }
};

export async function getAttendeeCrewrByID(
    id: string
): Promise<AttendeeCrew | undefined> {
    try {
        console.log("Getting attendee crew " + id);
        const attendeeData: any = await API.graphql(
            graphqlOperation(getAttendeeCrew, { id: id })
        );
        const user: AttendeeCrew = attendeeData.data.GetAttendeeUser;
        console.log("Got crew attendee:", user);
        return user;
    } catch (error) {
        console.log("Error fetching crew attendee:", error);
    }
}

export async function fetchAttendeeCrewByEventId(id: string): Promise<ModelAttendeeCrewConnection | undefined> {
    try {
        console.log("Getting attendee crew by event id: " + id);
        const attendeeCrewsData: any = await API.graphql(
            graphqlOperation(attendeeCrewsByEventId, { eventId: id })
        );
        const attendeeCrews: ModelAttendeeCrewConnection = attendeeCrewsData.data.attendeeCrewsByEventId;
        console.log("Got attendee crews:", attendeeCrews);
        return attendeeCrews;
    } catch (error) {
        console.log("Error fetching attendee crews:", error);
    }
}