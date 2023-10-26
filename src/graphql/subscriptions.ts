/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateVenue = /* GraphQL */ `
  subscription OnCreateVenue($filter: ModelSubscriptionVenueFilterInput) {
    onCreateVenue(filter: $filter) {
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
export const onUpdateVenue = /* GraphQL */ `
  subscription OnUpdateVenue($filter: ModelSubscriptionVenueFilterInput) {
    onUpdateVenue(filter: $filter) {
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
export const onDeleteVenue = /* GraphQL */ `
  subscription OnDeleteVenue($filter: ModelSubscriptionVenueFilterInput) {
    onDeleteVenue(filter: $filter) {
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
export const onCreateCrew = /* GraphQL */ `
  subscription OnCreateCrew($filter: ModelSubscriptionCrewFilterInput) {
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
      userCrewsId
      eventCrewAttendeesId
      __typename
    }
  }
`;
export const onUpdateCrew = /* GraphQL */ `
  subscription OnUpdateCrew($filter: ModelSubscriptionCrewFilterInput) {
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
      userCrewsId
      eventCrewAttendeesId
      __typename
    }
  }
`;
export const onDeleteCrew = /* GraphQL */ `
  subscription OnDeleteCrew($filter: ModelSubscriptionCrewFilterInput) {
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
      userCrewsId
      eventCrewAttendeesId
      __typename
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
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
