// eslint-disable
// this is an auto generated file. This will be overwritten

export const getCollection = `query GetCollection($id: ID!) {
  getCollection(id: $id) {
    id
    name
    type
    artifacts {
      id
      name
    }
  }
}
`;
export const listCollections = `query ListCollections(
  $filter: ModelCollectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      type
      artifacts {
        id
        name
      }
    }
    nextToken
  }
}
`;
export const getArtifact = `query GetArtifact($id: ID!) {
  getArtifact(id: $id) {
    id
    name
  }
}
`;
export const listArtifacts = `query ListArtifacts(
  $filter: ModelArtifactFilterInput
  $limit: Int
  $nextToken: String
) {
  listArtifacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
    }
    nextToken
  }
}
`;
