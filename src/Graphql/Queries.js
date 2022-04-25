import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query {
    products {
      data {
        id
        attributes {
          Title
          FeaturedImage {
            data {
              attributes {
                url
              }
            }
          }
          Price
        }
      }
    }
  }
`;
