import { gql } from "@apollo/client";

export const GET_FUR_CATEGORIES = gql`
  query {
    getAllFurnitures {
      category
    }
  }
`;

export const GET_DESIGNERS_TITELS = gql`
  query {
    getAllDesigners {
      title
    }
  }
`;
