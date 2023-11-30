/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getVenue = /* GraphQL */ `
  query GetVenue($id: ID!) {
    getVenue(id: $id) {
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
`;
export const listVenues = /* GraphQL */ `
  query ListVenues(
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
`;
export const getCrew = /* GraphQL */ `
  query GetCrew($id: ID!) {
    getCrew(id: $id) {
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
`;
export const listCrews = /* GraphQL */ `
  query ListCrews(
    $filter: ModelCrewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCrews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
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
        startDateTime
        endDateTime
        numOfTickets
        host
        venueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAttendeeUser = /* GraphQL */ `
  query GetAttendeeUser($id: ID!) {
    getAttendeeUser(id: $id) {
      eventId
      userId
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAttendeeUsers = /* GraphQL */ `
  query ListAttendeeUsers(
    $filter: ModelAttendeeUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttendeeUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        eventId
        userId
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const crewsByUserId = /* GraphQL */ `
  query CrewsByUserId(
    $userId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCrewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    crewsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const eventsByVenueId = /* GraphQL */ `
  query EventsByVenueId(
    $venueId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsByVenueId(
      venueId: $venueId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const attendeeUsersByEventId = /* GraphQL */ `
  query AttendeeUsersByEventId(
    $eventId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAttendeeUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attendeeUsersByEventId(
      eventId: $eventId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        eventId
        userId
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const attendeeUsersByUserId = /* GraphQL */ `
  query AttendeeUsersByUserId(
    $userId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAttendeeUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attendeeUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        eventId
        userId
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
