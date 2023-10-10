import awsconfig from "./aws-exports";

export const getVenues = async () => {
  const graphqlEndpoint = awsconfig.aws_appsync_graphqlEndpoint;
  const query = `
      query MyQuery {
        listVenues {
          nextToken
          items {
            name
            openingHours
            id
            description
          }
        }
      }
    `;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": awsconfig.aws_appsync_apiKey,
    },
    body: JSON.stringify({ query }),
  };

  try {
    const response = await fetch(graphqlEndpoint, requestOptions);
    const data = await response.json();
    const result = { items: data.data.listVenues.items };
    return result;
  } catch (error) {
    throw new Error("Error:" + error);
  }
};
