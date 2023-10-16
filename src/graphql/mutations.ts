/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    firstname
    lastname
    userType
    email
    crews {
      nextToken
      __typename
    }
    events {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    eventUserAttendeesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    firstname
    lastname
    userType
    email
    crews {
      nextToken
      __typename
    }
    events {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    eventUserAttendeesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    firstname
    lastname
    userType
    email
    crews {
      nextToken
      __typename
    }
    events {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    eventUserAttendeesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createVenue = /* GraphQL */ `mutation CreateVenue(
  $input: CreateVenueInput!
  $condition: ModelVenueConditionInput
) {
  createVenue(input: $input, condition: $condition) {
    id
    name
    shortDescription
    description
    capacity
    openingHours
    events {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateVenueMutationVariables,
  APITypes.CreateVenueMutation
>;
export const updateVenue = /* GraphQL */ `mutation UpdateVenue(
  $input: UpdateVenueInput!
  $condition: ModelVenueConditionInput
) {
  updateVenue(input: $input, condition: $condition) {
    id
    name
    shortDescription
    description
    capacity
    openingHours
    events {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateVenueMutationVariables,
  APITypes.UpdateVenueMutation
>;
export const deleteVenue = /* GraphQL */ `mutation DeleteVenue(
  $input: DeleteVenueInput!
  $condition: ModelVenueConditionInput
) {
  deleteVenue(input: $input, condition: $condition) {
    id
    name
    shortDescription
    description
    capacity
    openingHours
    events {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteVenueMutationVariables,
  APITypes.DeleteVenueMutation
>;
export const createCrew = /* GraphQL */ `mutation CreateCrew(
  $input: CreateCrewInput!
  $condition: ModelCrewConditionInput
) {
  createCrew(input: $input, condition: $condition) {
    id
    firstname
    lastname
    familyRole
    createdAt
    updatedAt
    userCrewsId
    eventCrewAttendeesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCrewMutationVariables,
  APITypes.CreateCrewMutation
>;
export const updateCrew = /* GraphQL */ `mutation UpdateCrew(
  $input: UpdateCrewInput!
  $condition: ModelCrewConditionInput
) {
  updateCrew(input: $input, condition: $condition) {
    id
    firstname
    lastname
    familyRole
    createdAt
    updatedAt
    userCrewsId
    eventCrewAttendeesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCrewMutationVariables,
  APITypes.UpdateCrewMutation
>;
export const deleteCrew = /* GraphQL */ `mutation DeleteCrew(
  $input: DeleteCrewInput!
  $condition: ModelCrewConditionInput
) {
  deleteCrew(input: $input, condition: $condition) {
    id
    firstname
    lastname
    familyRole
    createdAt
    updatedAt
    userCrewsId
    eventCrewAttendeesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCrewMutationVariables,
  APITypes.DeleteCrewMutation
>;
export const createEvent = /* GraphQL */ `mutation CreateEvent(
  $input: CreateEventInput!
  $condition: ModelEventConditionInput
) {
  createEvent(input: $input, condition: $condition) {
    id
    title
    brief
    description
    agenda
    datetime
    numOfTickets
    host
    userAttendees {
      nextToken
      __typename
    }
    crewAttendees {
      nextToken
      __typename
    }
    venue {
      id
      name
      shortDescription
      description
      capacity
      openingHours
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userEventsId
    venueEventsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEventMutationVariables,
  APITypes.CreateEventMutation
>;
export const updateEvent = /* GraphQL */ `mutation UpdateEvent(
  $input: UpdateEventInput!
  $condition: ModelEventConditionInput
) {
  updateEvent(input: $input, condition: $condition) {
    id
    title
    brief
    description
    agenda
    datetime
    numOfTickets
    host
    userAttendees {
      nextToken
      __typename
    }
    crewAttendees {
      nextToken
      __typename
    }
    venue {
      id
      name
      shortDescription
      description
      capacity
      openingHours
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userEventsId
    venueEventsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEventMutationVariables,
  APITypes.UpdateEventMutation
>;
export const deleteEvent = /* GraphQL */ `mutation DeleteEvent(
  $input: DeleteEventInput!
  $condition: ModelEventConditionInput
) {
  deleteEvent(input: $input, condition: $condition) {
    id
    title
    brief
    description
    agenda
    datetime
    numOfTickets
    host
    userAttendees {
      nextToken
      __typename
    }
    crewAttendees {
      nextToken
      __typename
    }
    venue {
      id
      name
      shortDescription
      description
      capacity
      openingHours
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userEventsId
    venueEventsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEventMutationVariables,
  APITypes.DeleteEventMutation
>;
