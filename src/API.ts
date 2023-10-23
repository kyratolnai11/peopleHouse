/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  firstname: string,
  lastname: string,
  userType: UserType,
  email: string,
  eventUserAttendeesId?: string | null,
};

export enum UserType {
  NORMAL = "NORMAL",
  COMMUNITY_BUILDER = "COMMUNITY_BUILDER",
}


export type ModelUserConditionInput = {
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  userType?: ModelUserTypeInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  eventUserAttendeesId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelUserTypeInput = {
  eq?: UserType | null,
  ne?: UserType | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  firstname: string,
  lastname: string,
  userType: UserType,
  email: string,
  crews?: ModelCrewConnection | null,
  events?: ModelEventConnection | null,
  createdAt: string,
  updatedAt: string,
  eventUserAttendeesId?: string | null,
};

export type ModelCrewConnection = {
  __typename: "ModelCrewConnection",
  items:  Array<Crew | null >,
  nextToken?: string | null,
};

export type Crew = {
  __typename: "Crew",
  id: string,
  userId: string,
  firstname: string,
  lastname: string,
  familyRole: string,
  dateOfBirth?: string | null,
  createdAt: string,
  updatedAt: string,
  userCrewsId?: string | null,
  eventCrewAttendeesId?: string | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  title: string,
  brief: string,
  description: string,
  agenda: string,
  startDateTime: string,
  endDateTime: string,
  numOfTickets: number,
  host: string,
  userAttendees?: ModelUserConnection | null,
  crewAttendees?: ModelCrewConnection | null,
  venueId: string,
  createdAt: string,
  updatedAt: string,
  userEventsId?: string | null,
  venueEventsId?: string | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  firstname?: string | null,
  lastname?: string | null,
  userType?: UserType | null,
  email?: string | null,
  eventUserAttendeesId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateVenueInput = {
  id?: string | null,
  name: string,
  shortDescription: string,
  description: string,
  capacity: number,
  openingHours: string,
};

export type ModelVenueConditionInput = {
  name?: ModelStringInput | null,
  shortDescription?: ModelStringInput | null,
  description?: ModelStringInput | null,
  capacity?: ModelIntInput | null,
  openingHours?: ModelStringInput | null,
  and?: Array< ModelVenueConditionInput | null > | null,
  or?: Array< ModelVenueConditionInput | null > | null,
  not?: ModelVenueConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Venue = {
  __typename: "Venue",
  id: string,
  name: string,
  shortDescription: string,
  description: string,
  capacity: number,
  openingHours: string,
  events?: ModelEventConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateVenueInput = {
  id: string,
  name?: string | null,
  shortDescription?: string | null,
  description?: string | null,
  capacity?: number | null,
  openingHours?: string | null,
};

export type DeleteVenueInput = {
  id: string,
};

export type CreateCrewInput = {
  id?: string | null,
  userId: string,
  firstname: string,
  lastname: string,
  familyRole: string,
  dateOfBirth?: string | null,
  userCrewsId?: string | null,
  eventCrewAttendeesId?: string | null,
};

export type ModelCrewConditionInput = {
  userId?: ModelStringInput | null,
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  familyRole?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  and?: Array< ModelCrewConditionInput | null > | null,
  or?: Array< ModelCrewConditionInput | null > | null,
  not?: ModelCrewConditionInput | null,
  userCrewsId?: ModelIDInput | null,
  eventCrewAttendeesId?: ModelIDInput | null,
};

export type UpdateCrewInput = {
  id: string,
  userId?: string | null,
  firstname?: string | null,
  lastname?: string | null,
  familyRole?: string | null,
  dateOfBirth?: string | null,
  userCrewsId?: string | null,
  eventCrewAttendeesId?: string | null,
};

export type DeleteCrewInput = {
  id: string,
};

export type CreateEventInput = {
  id?: string | null,
  title: string,
  brief: string,
  description: string,
  agenda: string,
  startDateTime: string,
  endDateTime: string,
  numOfTickets: number,
  host: string,
  venueId: string,
  userEventsId?: string | null,
  venueEventsId?: string | null,
};

export type ModelEventConditionInput = {
  title?: ModelStringInput | null,
  brief?: ModelStringInput | null,
  description?: ModelStringInput | null,
  agenda?: ModelStringInput | null,
  startDateTime?: ModelStringInput | null,
  endDateTime?: ModelStringInput | null,
  numOfTickets?: ModelIntInput | null,
  host?: ModelStringInput | null,
  venueId?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
  userEventsId?: ModelIDInput | null,
  venueEventsId?: ModelIDInput | null,
};

export type UpdateEventInput = {
  id: string,
  title?: string | null,
  brief?: string | null,
  description?: string | null,
  agenda?: string | null,
  startDateTime?: string | null,
  endDateTime?: string | null,
  numOfTickets?: number | null,
  host?: string | null,
  venueId?: string | null,
  userEventsId?: string | null,
  venueEventsId?: string | null,
};

export type DeleteEventInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  userType?: ModelUserTypeInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  eventUserAttendeesId?: ModelIDInput | null,
};

export type ModelVenueFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  shortDescription?: ModelStringInput | null,
  description?: ModelStringInput | null,
  capacity?: ModelIntInput | null,
  openingHours?: ModelStringInput | null,
  and?: Array< ModelVenueFilterInput | null > | null,
  or?: Array< ModelVenueFilterInput | null > | null,
  not?: ModelVenueFilterInput | null,
};

export type ModelVenueConnection = {
  __typename: "ModelVenueConnection",
  items:  Array<Venue | null >,
  nextToken?: string | null,
};

export type ModelCrewFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  familyRole?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  and?: Array< ModelCrewFilterInput | null > | null,
  or?: Array< ModelCrewFilterInput | null > | null,
  not?: ModelCrewFilterInput | null,
  userCrewsId?: ModelIDInput | null,
  eventCrewAttendeesId?: ModelIDInput | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  brief?: ModelStringInput | null,
  description?: ModelStringInput | null,
  agenda?: ModelStringInput | null,
  startDateTime?: ModelStringInput | null,
  endDateTime?: ModelStringInput | null,
  numOfTickets?: ModelIntInput | null,
  host?: ModelStringInput | null,
  venueId?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
  userEventsId?: ModelIDInput | null,
  venueEventsId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstname?: ModelSubscriptionStringInput | null,
  lastname?: ModelSubscriptionStringInput | null,
  userType?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionVenueFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  shortDescription?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  capacity?: ModelSubscriptionIntInput | null,
  openingHours?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVenueFilterInput | null > | null,
  or?: Array< ModelSubscriptionVenueFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCrewFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionStringInput | null,
  firstname?: ModelSubscriptionStringInput | null,
  lastname?: ModelSubscriptionStringInput | null,
  familyRole?: ModelSubscriptionStringInput | null,
  dateOfBirth?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCrewFilterInput | null > | null,
  or?: Array< ModelSubscriptionCrewFilterInput | null > | null,
};

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  brief?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  agenda?: ModelSubscriptionStringInput | null,
  startDateTime?: ModelSubscriptionStringInput | null,
  endDateTime?: ModelSubscriptionStringInput | null,
  numOfTickets?: ModelSubscriptionIntInput | null,
  host?: ModelSubscriptionStringInput | null,
  venueId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    userType: UserType,
    email: string,
    crews?:  {
      __typename: "ModelCrewConnection",
      items:  Array< {
        __typename: "Crew",
        id: string,
        userId: string,
        firstname: string,
        lastname: string,
        familyRole: string,
        dateOfBirth?: string | null,
        createdAt: string,
        updatedAt: string,
        userCrewsId?: string | null,
        eventCrewAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        title: string,
        brief: string,
        description: string,
        agenda: string,
        startDateTime: string,
        endDateTime: string,
        numOfTickets: number,
        host: string,
        venueId: string,
        createdAt: string,
        updatedAt: string,
        userEventsId?: string | null,
        venueEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventUserAttendeesId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    userType: UserType,
    email: string,
    crews?:  {
      __typename: "ModelCrewConnection",
      items:  Array< {
        __typename: "Crew",
        id: string,
        userId: string,
        firstname: string,
        lastname: string,
        familyRole: string,
        dateOfBirth?: string | null,
        createdAt: string,
        updatedAt: string,
        userCrewsId?: string | null,
        eventCrewAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        title: string,
        brief: string,
        description: string,
        agenda: string,
        startDateTime: string,
        endDateTime: string,
        numOfTickets: number,
        host: string,
        venueId: string,
        createdAt: string,
        updatedAt: string,
        userEventsId?: string | null,
        venueEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventUserAttendeesId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    userType: UserType,
    email: string,
    crews?:  {
      __typename: "ModelCrewConnection",
      items:  Array< {
        __typename: "Crew",
        id: string,
        userId: string,
        firstname: string,
        lastname: string,
        familyRole: string,
        dateOfBirth?: string | null,
        createdAt: string,
        updatedAt: string,
        userCrewsId?: string | null,
        eventCrewAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        title: string,
        brief: string,
        description: string,
        agenda: string,
        startDateTime: string,
        endDateTime: string,
        numOfTickets: number,
        host: string,
        venueId: string,
        createdAt: string,
        updatedAt: string,
        userEventsId?: string | null,
        venueEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventUserAttendeesId?: string | null,
  } | null,
};

export type CreateVenueMutationVariables = {
  input: CreateVenueInput,
  condition?: ModelVenueConditionInput | null,
};

export type CreateVenueMutation = {
  createVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    shortDescription: string,
    description: string,
    capacity: number,
    openingHours: string,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        title: string,
        brief: string,
        description: string,
        agenda: string,
        startDateTime: string,
        endDateTime: string,
        numOfTickets: number,
        host: string,
        venueId: string,
        createdAt: string,
        updatedAt: string,
        userEventsId?: string | null,
        venueEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVenueMutationVariables = {
  input: UpdateVenueInput,
  condition?: ModelVenueConditionInput | null,
};

export type UpdateVenueMutation = {
  updateVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    shortDescription: string,
    description: string,
    capacity: number,
    openingHours: string,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        title: string,
        brief: string,
        description: string,
        agenda: string,
        startDateTime: string,
        endDateTime: string,
        numOfTickets: number,
        host: string,
        venueId: string,
        createdAt: string,
        updatedAt: string,
        userEventsId?: string | null,
        venueEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVenueMutationVariables = {
  input: DeleteVenueInput,
  condition?: ModelVenueConditionInput | null,
};

export type DeleteVenueMutation = {
  deleteVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    shortDescription: string,
    description: string,
    capacity: number,
    openingHours: string,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        title: string,
        brief: string,
        description: string,
        agenda: string,
        startDateTime: string,
        endDateTime: string,
        numOfTickets: number,
        host: string,
        venueId: string,
        createdAt: string,
        updatedAt: string,
        userEventsId?: string | null,
        venueEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCrewMutationVariables = {
  input: CreateCrewInput,
  condition?: ModelCrewConditionInput | null,
};

export type CreateCrewMutation = {
  createCrew?:  {
    __typename: "Crew",
    id: string,
    userId: string,
    firstname: string,
    lastname: string,
    familyRole: string,
    dateOfBirth?: string | null,
    createdAt: string,
    updatedAt: string,
    userCrewsId?: string | null,
    eventCrewAttendeesId?: string | null,
  } | null,
};

export type UpdateCrewMutationVariables = {
  input: UpdateCrewInput,
  condition?: ModelCrewConditionInput | null,
};

export type UpdateCrewMutation = {
  updateCrew?:  {
    __typename: "Crew",
    id: string,
    userId: string,
    firstname: string,
    lastname: string,
    familyRole: string,
    dateOfBirth?: string | null,
    createdAt: string,
    updatedAt: string,
    userCrewsId?: string | null,
    eventCrewAttendeesId?: string | null,
  } | null,
};

export type DeleteCrewMutationVariables = {
  input: DeleteCrewInput,
  condition?: ModelCrewConditionInput | null,
};

export type DeleteCrewMutation = {
  deleteCrew?:  {
    __typename: "Crew",
    id: string,
    userId: string,
    firstname: string,
    lastname: string,
    familyRole: string,
    dateOfBirth?: string | null,
    createdAt: string,
    updatedAt: string,
    userCrewsId?: string | null,
    eventCrewAttendeesId?: string | null,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    brief: string,
    description: string,
    agenda: string,
    startDateTime: string,
    endDateTime: string,
    numOfTickets: number,
    host: string,
    userAttendees?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        firstname: string,
        lastname: string,
        userType: UserType,
        email: string,
        createdAt: string,
        updatedAt: string,
        eventUserAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    crewAttendees?:  {
      __typename: "ModelCrewConnection",
      items:  Array< {
        __typename: "Crew",
        id: string,
        userId: string,
        firstname: string,
        lastname: string,
        familyRole: string,
        dateOfBirth?: string | null,
        createdAt: string,
        updatedAt: string,
        userCrewsId?: string | null,
        eventCrewAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    venueId: string,
    createdAt: string,
    updatedAt: string,
    userEventsId?: string | null,
    venueEventsId?: string | null,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    brief: string,
    description: string,
    agenda: string,
    startDateTime: string,
    endDateTime: string,
    numOfTickets: number,
    host: string,
    userAttendees?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        firstname: string,
        lastname: string,
        userType: UserType,
        email: string,
        createdAt: string,
        updatedAt: string,
        eventUserAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    crewAttendees?:  {
      __typename: "ModelCrewConnection",
      items:  Array< {
        __typename: "Crew",
        id: string,
        userId: string,
        firstname: string,
        lastname: string,
        familyRole: string,
        dateOfBirth?: string | null,
        createdAt: string,
        updatedAt: string,
        userCrewsId?: string | null,
        eventCrewAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    venueId: string,
    createdAt: string,
    updatedAt: string,
    userEventsId?: string | null,
    venueEventsId?: string | null,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    brief: string,
    description: string,
    agenda: string,
    startDateTime: string,
    endDateTime: string,
    numOfTickets: number,
    host: string,
    userAttendees?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        firstname: string,
        lastname: string,
        userType: UserType,
        email: string,
        createdAt: string,
        updatedAt: string,
        eventUserAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    crewAttendees?:  {
      __typename: "ModelCrewConnection",
      items:  Array< {
        __typename: "Crew",
        id: string,
        userId: string,
        firstname: string,
        lastname: string,
        familyRole: string,
        dateOfBirth?: string | null,
        createdAt: string,
        updatedAt: string,
        userCrewsId?: string | null,
        eventCrewAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    venueId: string,
    createdAt: string,
    updatedAt: string,
    userEventsId?: string | null,
    venueEventsId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    userType: UserType,
    email: string,
    crews?:  {
      __typename: "ModelCrewConnection",
      items:  Array< {
        __typename: "Crew",
        id: string,
        userId: string,
        firstname: string,
        lastname: string,
        familyRole: string,
        dateOfBirth?: string | null,
        createdAt: string,
        updatedAt: string,
        userCrewsId?: string | null,
        eventCrewAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        title: string,
        brief: string,
        description: string,
        agenda: string,
        startDateTime: string,
        endDateTime: string,
        numOfTickets: number,
        host: string,
        venueId: string,
        createdAt: string,
        updatedAt: string,
        userEventsId?: string | null,
        venueEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventUserAttendeesId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstname: string,
      lastname: string,
      userType: UserType,
      email: string,
      crews?:  {
        __typename: "ModelCrewConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      eventUserAttendeesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVenueQueryVariables = {
  id: string,
};

export type GetVenueQuery = {
  getVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    shortDescription: string,
    description: string,
    capacity: number,
    openingHours: string,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        title: string,
        brief: string,
        description: string,
        agenda: string,
        startDateTime: string,
        endDateTime: string,
        numOfTickets: number,
        host: string,
        venueId: string,
        createdAt: string,
        updatedAt: string,
        userEventsId?: string | null,
        venueEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVenuesQueryVariables = {
  filter?: ModelVenueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVenuesQuery = {
  listVenues?:  {
    __typename: "ModelVenueConnection",
    items:  Array< {
      __typename: "Venue",
      id: string,
      name: string,
      shortDescription: string,
      description: string,
      capacity: number,
      openingHours: string,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCrewQueryVariables = {
  id: string,
};

export type GetCrewQuery = {
  getCrew?:  {
    __typename: "Crew",
    id: string,
    userId: string,
    firstname: string,
    lastname: string,
    familyRole: string,
    dateOfBirth?: string | null,
    createdAt: string,
    updatedAt: string,
    userCrewsId?: string | null,
    eventCrewAttendeesId?: string | null,
  } | null,
};

export type ListCrewsQueryVariables = {
  filter?: ModelCrewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCrewsQuery = {
  listCrews?:  {
    __typename: "ModelCrewConnection",
    items:  Array< {
      __typename: "Crew",
      id: string,
      userId: string,
      firstname: string,
      lastname: string,
      familyRole: string,
      dateOfBirth?: string | null,
      createdAt: string,
      updatedAt: string,
      userCrewsId?: string | null,
      eventCrewAttendeesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    brief: string,
    description: string,
    agenda: string,
    startDateTime: string,
    endDateTime: string,
    numOfTickets: number,
    host: string,
    userAttendees?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        firstname: string,
        lastname: string,
        userType: UserType,
        email: string,
        createdAt: string,
        updatedAt: string,
        eventUserAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    crewAttendees?:  {
      __typename: "ModelCrewConnection",
      items:  Array< {
        __typename: "Crew",
        id: string,
        userId: string,
        firstname: string,
        lastname: string,
        familyRole: string,
        dateOfBirth?: string | null,
        createdAt: string,
        updatedAt: string,
        userCrewsId?: string | null,
        eventCrewAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    venueId: string,
    createdAt: string,
    updatedAt: string,
    userEventsId?: string | null,
    venueEventsId?: string | null,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      title: string,
      brief: string,
      description: string,
      agenda: string,
      startDateTime: string,
      endDateTime: string,
      numOfTickets: number,
      host: string,
      userAttendees?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      crewAttendees?:  {
        __typename: "ModelCrewConnection",
        nextToken?: string | null,
      } | null,
      venueId: string,
      createdAt: string,
      updatedAt: string,
      userEventsId?: string | null,
      venueEventsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CrewsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCrewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CrewsByUserIdQuery = {
  crewsByUserId?:  {
    __typename: "ModelCrewConnection",
    items:  Array< {
      __typename: "Crew",
      id: string,
      userId: string,
      firstname: string,
      lastname: string,
      familyRole: string,
      dateOfBirth?: string | null,
      createdAt: string,
      updatedAt: string,
      userCrewsId?: string | null,
      eventCrewAttendeesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EventsByVenueIdQueryVariables = {
  venueId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EventsByVenueIdQuery = {
  eventsByVenueId?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      title: string,
      brief: string,
      description: string,
      agenda: string,
      startDateTime: string,
      endDateTime: string,
      numOfTickets: number,
      host: string,
      userAttendees?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      crewAttendees?:  {
        __typename: "ModelCrewConnection",
        nextToken?: string | null,
      } | null,
      venueId: string,
      createdAt: string,
      updatedAt: string,
      userEventsId?: string | null,
      venueEventsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    userType: UserType,
    email: string,
    crews?:  {
      __typename: "ModelCrewConnection",
      items:  Array< {
        __typename: "Crew",
        id: string,
        userId: string,
        firstname: string,
        lastname: string,
        familyRole: string,
        dateOfBirth?: string | null,
        createdAt: string,
        updatedAt: string,
        userCrewsId?: string | null,
        eventCrewAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        title: string,
        brief: string,
        description: string,
        agenda: string,
        startDateTime: string,
        endDateTime: string,
        numOfTickets: number,
        host: string,
        venueId: string,
        createdAt: string,
        updatedAt: string,
        userEventsId?: string | null,
        venueEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventUserAttendeesId?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    userType: UserType,
    email: string,
    crews?:  {
      __typename: "ModelCrewConnection",
      items:  Array< {
        __typename: "Crew",
        id: string,
        userId: string,
        firstname: string,
        lastname: string,
        familyRole: string,
        dateOfBirth?: string | null,
        createdAt: string,
        updatedAt: string,
        userCrewsId?: string | null,
        eventCrewAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        title: string,
        brief: string,
        description: string,
        agenda: string,
        startDateTime: string,
        endDateTime: string,
        numOfTickets: number,
        host: string,
        venueId: string,
        createdAt: string,
        updatedAt: string,
        userEventsId?: string | null,
        venueEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventUserAttendeesId?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstname: string,
    lastname: string,
    userType: UserType,
    email: string,
    crews?:  {
      __typename: "ModelCrewConnection",
      items:  Array< {
        __typename: "Crew",
        id: string,
        userId: string,
        firstname: string,
        lastname: string,
        familyRole: string,
        dateOfBirth?: string | null,
        createdAt: string,
        updatedAt: string,
        userCrewsId?: string | null,
        eventCrewAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        title: string,
        brief: string,
        description: string,
        agenda: string,
        startDateTime: string,
        endDateTime: string,
        numOfTickets: number,
        host: string,
        venueId: string,
        createdAt: string,
        updatedAt: string,
        userEventsId?: string | null,
        venueEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventUserAttendeesId?: string | null,
  } | null,
};

export type OnCreateVenueSubscriptionVariables = {
  filter?: ModelSubscriptionVenueFilterInput | null,
};

export type OnCreateVenueSubscription = {
  onCreateVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    shortDescription: string,
    description: string,
    capacity: number,
    openingHours: string,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        title: string,
        brief: string,
        description: string,
        agenda: string,
        startDateTime: string,
        endDateTime: string,
        numOfTickets: number,
        host: string,
        venueId: string,
        createdAt: string,
        updatedAt: string,
        userEventsId?: string | null,
        venueEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVenueSubscriptionVariables = {
  filter?: ModelSubscriptionVenueFilterInput | null,
};

export type OnUpdateVenueSubscription = {
  onUpdateVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    shortDescription: string,
    description: string,
    capacity: number,
    openingHours: string,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        title: string,
        brief: string,
        description: string,
        agenda: string,
        startDateTime: string,
        endDateTime: string,
        numOfTickets: number,
        host: string,
        venueId: string,
        createdAt: string,
        updatedAt: string,
        userEventsId?: string | null,
        venueEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVenueSubscriptionVariables = {
  filter?: ModelSubscriptionVenueFilterInput | null,
};

export type OnDeleteVenueSubscription = {
  onDeleteVenue?:  {
    __typename: "Venue",
    id: string,
    name: string,
    shortDescription: string,
    description: string,
    capacity: number,
    openingHours: string,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        title: string,
        brief: string,
        description: string,
        agenda: string,
        startDateTime: string,
        endDateTime: string,
        numOfTickets: number,
        host: string,
        venueId: string,
        createdAt: string,
        updatedAt: string,
        userEventsId?: string | null,
        venueEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCrewSubscriptionVariables = {
  filter?: ModelSubscriptionCrewFilterInput | null,
};

export type OnCreateCrewSubscription = {
  onCreateCrew?:  {
    __typename: "Crew",
    id: string,
    userId: string,
    firstname: string,
    lastname: string,
    familyRole: string,
    dateOfBirth?: string | null,
    createdAt: string,
    updatedAt: string,
    userCrewsId?: string | null,
    eventCrewAttendeesId?: string | null,
  } | null,
};

export type OnUpdateCrewSubscriptionVariables = {
  filter?: ModelSubscriptionCrewFilterInput | null,
};

export type OnUpdateCrewSubscription = {
  onUpdateCrew?:  {
    __typename: "Crew",
    id: string,
    userId: string,
    firstname: string,
    lastname: string,
    familyRole: string,
    dateOfBirth?: string | null,
    createdAt: string,
    updatedAt: string,
    userCrewsId?: string | null,
    eventCrewAttendeesId?: string | null,
  } | null,
};

export type OnDeleteCrewSubscriptionVariables = {
  filter?: ModelSubscriptionCrewFilterInput | null,
};

export type OnDeleteCrewSubscription = {
  onDeleteCrew?:  {
    __typename: "Crew",
    id: string,
    userId: string,
    firstname: string,
    lastname: string,
    familyRole: string,
    dateOfBirth?: string | null,
    createdAt: string,
    updatedAt: string,
    userCrewsId?: string | null,
    eventCrewAttendeesId?: string | null,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    brief: string,
    description: string,
    agenda: string,
    startDateTime: string,
    endDateTime: string,
    numOfTickets: number,
    host: string,
    userAttendees?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        firstname: string,
        lastname: string,
        userType: UserType,
        email: string,
        createdAt: string,
        updatedAt: string,
        eventUserAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    crewAttendees?:  {
      __typename: "ModelCrewConnection",
      items:  Array< {
        __typename: "Crew",
        id: string,
        userId: string,
        firstname: string,
        lastname: string,
        familyRole: string,
        dateOfBirth?: string | null,
        createdAt: string,
        updatedAt: string,
        userCrewsId?: string | null,
        eventCrewAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    venueId: string,
    createdAt: string,
    updatedAt: string,
    userEventsId?: string | null,
    venueEventsId?: string | null,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    brief: string,
    description: string,
    agenda: string,
    startDateTime: string,
    endDateTime: string,
    numOfTickets: number,
    host: string,
    userAttendees?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        firstname: string,
        lastname: string,
        userType: UserType,
        email: string,
        createdAt: string,
        updatedAt: string,
        eventUserAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    crewAttendees?:  {
      __typename: "ModelCrewConnection",
      items:  Array< {
        __typename: "Crew",
        id: string,
        userId: string,
        firstname: string,
        lastname: string,
        familyRole: string,
        dateOfBirth?: string | null,
        createdAt: string,
        updatedAt: string,
        userCrewsId?: string | null,
        eventCrewAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    venueId: string,
    createdAt: string,
    updatedAt: string,
    userEventsId?: string | null,
    venueEventsId?: string | null,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    brief: string,
    description: string,
    agenda: string,
    startDateTime: string,
    endDateTime: string,
    numOfTickets: number,
    host: string,
    userAttendees?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        firstname: string,
        lastname: string,
        userType: UserType,
        email: string,
        createdAt: string,
        updatedAt: string,
        eventUserAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    crewAttendees?:  {
      __typename: "ModelCrewConnection",
      items:  Array< {
        __typename: "Crew",
        id: string,
        userId: string,
        firstname: string,
        lastname: string,
        familyRole: string,
        dateOfBirth?: string | null,
        createdAt: string,
        updatedAt: string,
        userCrewsId?: string | null,
        eventCrewAttendeesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    venueId: string,
    createdAt: string,
    updatedAt: string,
    userEventsId?: string | null,
    venueEventsId?: string | null,
  } | null,
};
