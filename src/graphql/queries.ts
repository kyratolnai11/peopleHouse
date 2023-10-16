/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstname
      lastname
      userType
      email
      createdAt
      updatedAt
      eventUserAttendeesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getVenue = /* GraphQL */ `query GetVenue($id: ID!) {
  getVenue(id: $id) {
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
` as GeneratedQuery<APITypes.GetVenueQueryVariables, APITypes.GetVenueQuery>;
export const listVenues = /* GraphQL */ `query ListVenues(
  $filter: ModelVenueFilterInput
  $limit: Int
  $nextToken: String
) {
  listVenues(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVenuesQueryVariables,
  APITypes.ListVenuesQuery
>;
export const getCrew = /* GraphQL */ `query GetCrew($id: ID!) {
  getCrew(id: $id) {
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
` as GeneratedQuery<APITypes.GetCrewQueryVariables, APITypes.GetCrewQuery>;
export const listCrews = /* GraphQL */ `query ListCrews(
  $filter: ModelCrewFilterInput
  $limit: Int
  $nextToken: String
) {
  listCrews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCrewsQueryVariables, APITypes.ListCrewsQuery>;
export const getEvent = /* GraphQL */ `query GetEvent($id: ID!) {
  getEvent(id: $id) {
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
` as GeneratedQuery<APITypes.GetEventQueryVariables, APITypes.GetEventQuery>;
export const listEvents = /* GraphQL */ `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      brief
      description
      agenda
      datetime
      numOfTickets
      host
      createdAt
      updatedAt
      userEventsId
      venueEventsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventsQueryVariables,
  APITypes.ListEventsQuery
>;
