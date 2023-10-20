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
    events {
      nextToken
      __typename
    }
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
    events {
      nextToken
      __typename
    }
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
    events {
      nextToken
      __typename
    }
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
` as GeneratedSubscription<
  APITypes.OnCreateCrewSubscriptionVariables,
  APITypes.OnCreateCrewSubscription
>;
export const onUpdateCrew = /* GraphQL */ `subscription OnUpdateCrew($filter: ModelSubscriptionCrewFilterInput) {
  onUpdateCrew(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCrewSubscriptionVariables,
  APITypes.OnUpdateCrewSubscription
>;
export const onDeleteCrew = /* GraphQL */ `subscription OnDeleteCrew($filter: ModelSubscriptionCrewFilterInput) {
  onDeleteCrew(filter: $filter) {
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
    venueId
    createdAt
    updatedAt
    userEventsId
    venueEventsId
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
    venueId
    createdAt
    updatedAt
    userEventsId
    venueEventsId
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
    venueId
    createdAt
    updatedAt
    userEventsId
    venueEventsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEventSubscriptionVariables,
  APITypes.OnDeleteEventSubscription
>;
