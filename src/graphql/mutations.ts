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
    createdAt
    updatedAt
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
    createdAt
    updatedAt
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
    createdAt
    updatedAt
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
    userId
    firstname
    lastname
    familyRole
    dateOfBirth
    email
    createdAt
    updatedAt
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
    userId
    firstname
    lastname
    familyRole
    dateOfBirth
    email
    createdAt
    updatedAt
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
    userId
    firstname
    lastname
    familyRole
    dateOfBirth
    email
    createdAt
    updatedAt
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
    startDateTime
    endDateTime
    numOfTickets
    host
    venueId
    createdAt
    updatedAt
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
    startDateTime
    endDateTime
    numOfTickets
    host
    venueId
    createdAt
    updatedAt
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
    startDateTime
    endDateTime
    numOfTickets
    host
    venueId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEventMutationVariables,
  APITypes.DeleteEventMutation
>;
export const createAttendeeUser = /* GraphQL */ `mutation CreateAttendeeUser(
  $input: CreateAttendeeUserInput!
  $condition: ModelAttendeeUserConditionInput
) {
  createAttendeeUser(input: $input, condition: $condition) {
    eventId
    userId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAttendeeUserMutationVariables,
  APITypes.CreateAttendeeUserMutation
>;
export const updateAttendeeUser = /* GraphQL */ `mutation UpdateAttendeeUser(
  $input: UpdateAttendeeUserInput!
  $condition: ModelAttendeeUserConditionInput
) {
  updateAttendeeUser(input: $input, condition: $condition) {
    eventId
    userId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAttendeeUserMutationVariables,
  APITypes.UpdateAttendeeUserMutation
>;
export const deleteAttendeeUser = /* GraphQL */ `mutation DeleteAttendeeUser(
  $input: DeleteAttendeeUserInput!
  $condition: ModelAttendeeUserConditionInput
) {
  deleteAttendeeUser(input: $input, condition: $condition) {
    eventId
    userId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAttendeeUserMutationVariables,
  APITypes.DeleteAttendeeUserMutation
>;
export const createAttendeeCrew = /* GraphQL */ `mutation CreateAttendeeCrew(
  $input: CreateAttendeeCrewInput!
  $condition: ModelAttendeeCrewConditionInput
) {
  createAttendeeCrew(input: $input, condition: $condition) {
    eventId
    crewId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAttendeeCrewMutationVariables,
  APITypes.CreateAttendeeCrewMutation
>;
export const updateAttendeeCrew = /* GraphQL */ `mutation UpdateAttendeeCrew(
  $input: UpdateAttendeeCrewInput!
  $condition: ModelAttendeeCrewConditionInput
) {
  updateAttendeeCrew(input: $input, condition: $condition) {
    eventId
    crewId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAttendeeCrewMutationVariables,
  APITypes.UpdateAttendeeCrewMutation
>;
export const deleteAttendeeCrew = /* GraphQL */ `mutation DeleteAttendeeCrew(
  $input: DeleteAttendeeCrewInput!
  $condition: ModelAttendeeCrewConditionInput
) {
  deleteAttendeeCrew(input: $input, condition: $condition) {
    eventId
    crewId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAttendeeCrewMutationVariables,
  APITypes.DeleteAttendeeCrewMutation
>;
