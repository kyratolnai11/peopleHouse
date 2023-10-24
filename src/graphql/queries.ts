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
      crews {
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
          userCrewsId
          eventCrewAttendeesId
          __typename
        }
        nextToken
        __typename
      }
      events {
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
          userEventsId
          venueEventsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      eventUserAttendeesId
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
      events {
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
          userEventsId
          venueEventsId
          __typename
        }
        nextToken
        __typename
      }
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
        events {
          nextToken
          __typename
        }
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
      userCrewsId
      eventCrewAttendeesId
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
        userCrewsId
        eventCrewAttendeesId
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
      userAttendees {
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
      crewAttendees {
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
          userCrewsId
          eventCrewAttendeesId
          __typename
        }
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
        userCrewsId
        eventCrewAttendeesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const eventsById = /* GraphQL */ `
  query EventsById(
    $id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsById(
      id: $id
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
      nextToken
      __typename
    }
  }
`;
