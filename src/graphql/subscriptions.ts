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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      venueId
      createdAt
      updatedAt
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
      venueId
      createdAt
      updatedAt
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
      venueId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateAttendeeUser = /* GraphQL */ `
  subscription OnCreateAttendeeUser(
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
`;
export const onUpdateAttendeeUser = /* GraphQL */ `
  subscription OnUpdateAttendeeUser(
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
`;
export const onDeleteAttendeeUser = /* GraphQL */ `
  subscription OnDeleteAttendeeUser(
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
`;
