/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateVenue = /* GraphQL */ `subscription OnCreateVenue($filter: ModelSubscriptionVenueFilterInput) {
  onCreateVenue(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateVenueSubscriptionVariables,
  APITypes.OnCreateVenueSubscription
>;
export const onUpdateVenue = /* GraphQL */ `subscription OnUpdateVenue($filter: ModelSubscriptionVenueFilterInput) {
  onUpdateVenue(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateVenueSubscriptionVariables,
  APITypes.OnUpdateVenueSubscription
>;
export const onDeleteVenue = /* GraphQL */ `subscription OnDeleteVenue($filter: ModelSubscriptionVenueFilterInput) {
  onDeleteVenue(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteVenueSubscriptionVariables,
  APITypes.OnDeleteVenueSubscription
>;
export const onCreateCrew = /* GraphQL */ `subscription OnCreateCrew($filter: ModelSubscriptionCrewFilterInput) {
  onCreateCrew(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCrewSubscriptionVariables,
  APITypes.OnCreateCrewSubscription
>;
export const onUpdateCrew = /* GraphQL */ `subscription OnUpdateCrew($filter: ModelSubscriptionCrewFilterInput) {
  onUpdateCrew(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCrewSubscriptionVariables,
  APITypes.OnUpdateCrewSubscription
>;
export const onDeleteCrew = /* GraphQL */ `subscription OnDeleteCrew($filter: ModelSubscriptionCrewFilterInput) {
  onDeleteCrew(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCrewSubscriptionVariables,
  APITypes.OnDeleteCrewSubscription
>;
export const onCreateEvent = /* GraphQL */ `subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
  onCreateEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEventSubscriptionVariables,
  APITypes.OnCreateEventSubscription
>;
export const onUpdateEvent = /* GraphQL */ `subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
  onUpdateEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEventSubscriptionVariables,
  APITypes.OnUpdateEventSubscription
>;
export const onDeleteEvent = /* GraphQL */ `subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
  onDeleteEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEventSubscriptionVariables,
  APITypes.OnDeleteEventSubscription
>;
export const onCreateAttendeeUser = /* GraphQL */ `subscription OnCreateAttendeeUser(
  $filter: ModelSubscriptionAttendeeUserFilterInput
) {
  onCreateAttendeeUser(filter: $filter) {
    eventId
    userId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAttendeeUserSubscriptionVariables,
  APITypes.OnCreateAttendeeUserSubscription
>;
export const onUpdateAttendeeUser = /* GraphQL */ `subscription OnUpdateAttendeeUser(
  $filter: ModelSubscriptionAttendeeUserFilterInput
) {
  onUpdateAttendeeUser(filter: $filter) {
    eventId
    userId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAttendeeUserSubscriptionVariables,
  APITypes.OnUpdateAttendeeUserSubscription
>;
export const onDeleteAttendeeUser = /* GraphQL */ `subscription OnDeleteAttendeeUser(
  $filter: ModelSubscriptionAttendeeUserFilterInput
) {
  onDeleteAttendeeUser(filter: $filter) {
    eventId
    userId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAttendeeUserSubscriptionVariables,
  APITypes.OnDeleteAttendeeUserSubscription
>;
export const onCreateAttendeeCrew = /* GraphQL */ `subscription OnCreateAttendeeCrew(
  $filter: ModelSubscriptionAttendeeCrewFilterInput
) {
  onCreateAttendeeCrew(filter: $filter) {
    eventId
    crewId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAttendeeCrewSubscriptionVariables,
  APITypes.OnCreateAttendeeCrewSubscription
>;
export const onUpdateAttendeeCrew = /* GraphQL */ `subscription OnUpdateAttendeeCrew(
  $filter: ModelSubscriptionAttendeeCrewFilterInput
) {
  onUpdateAttendeeCrew(filter: $filter) {
    eventId
    crewId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAttendeeCrewSubscriptionVariables,
  APITypes.OnUpdateAttendeeCrewSubscription
>;
export const onDeleteAttendeeCrew = /* GraphQL */ `subscription OnDeleteAttendeeCrew(
  $filter: ModelSubscriptionAttendeeCrewFilterInput
) {
  onDeleteAttendeeCrew(filter: $filter) {
    eventId
    crewId
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAttendeeCrewSubscriptionVariables,
  APITypes.OnDeleteAttendeeCrewSubscription
>;
