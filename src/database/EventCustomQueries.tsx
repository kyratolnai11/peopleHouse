import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};


export const attendeeUsersByUserIdAndEventId = /* GraphQL */ `query AttendeeUsersByUserId(
    $userId: String!
    $eventId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAttendeeUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attendeeUsersByUserIdAndEventId(
      userId: $userId
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
  ` as GeneratedQuery<
    APITypes.AttendeeUsersByUserIdQueryVariables,
    APITypes.AttendeeUsersByUserIdQuery
  >;