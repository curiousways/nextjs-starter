import { GraphQLClient } from "graphql-request";

type RequestArgs = {
  query: string;
  variables?: any;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
};

type HeaderArgs = {
  authorization: string;
  "X-Include-Drafts"?: string;
  "X-Exclude-Invalid"?: string;
};

export function request({
  query,
  variables,
  includeDrafts,
  excludeInvalid,
}: RequestArgs) {
  const headers: HeaderArgs = {
    authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
  };

  if (includeDrafts) {
    headers["X-Include-Drafts"] = "true";
  }
  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true";
  }
  const client = new GraphQLClient("https://graphql.datocms.com", { headers });
  return client.request(query, variables);
}
