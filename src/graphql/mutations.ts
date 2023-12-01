/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
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
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
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
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
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
`;
export const createVenue = /* GraphQL */ `
  mutation CreateVenue(
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
`;
export const updateVenue = /* GraphQL */ `
  mutation UpdateVenue(
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
`;
export const deleteVenue = /* GraphQL */ `
  mutation DeleteVenue(
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
`;
export const createCrew = /* GraphQL */ `
  mutation CreateCrew(
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
`;
export const updateCrew = /* GraphQL */ `
  mutation UpdateCrew(
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
`;
export const deleteCrew = /* GraphQL */ `
  mutation DeleteCrew(
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
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
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
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
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
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
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
`;
export const createAttendeeUser = /* GraphQL */ `
  mutation CreateAttendeeUser(
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
`;
export const updateAttendeeUser = /* GraphQL */ `
  mutation UpdateAttendeeUser(
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
`;
export const deleteAttendeeUser = /* GraphQL */ `
  mutation DeleteAttendeeUser(
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
`;
