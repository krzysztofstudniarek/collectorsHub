// eslint-disable
// this is an auto generated file. This will be overwritten

export const createCollection = `mutation CreateCollection($input: CreateCollectionInput!) {
  createCollection(input: $input) {
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
export const updateCollection = `mutation UpdateCollection($input: UpdateCollectionInput!) {
  updateCollection(input: $input) {
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
export const deleteCollection = `mutation DeleteCollection($input: DeleteCollectionInput!) {
  deleteCollection(input: $input) {
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
export const createArtifact = `mutation CreateArtifact($input: CreateArtifactInput!) {
  createArtifact(input: $input) {
    id
    name
  }
}
`;
export const updateArtifact = `mutation UpdateArtifact($input: UpdateArtifactInput!) {
  updateArtifact(input: $input) {
    id
    name
  }
}
`;
export const deleteArtifact = `mutation DeleteArtifact($input: DeleteArtifactInput!) {
  deleteArtifact(input: $input) {
    id
    name
  }
}
`;
