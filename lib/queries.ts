import { gql } from "graphql-request";
import { responsiveImageFragment } from "@/lib/fragments";

export const GET_PAGE = gql`
  query GetPage() {
    _pageMeta {
      count
    }

    page() {
      id
      slug
      title
      subtitle
      featuredImage {
        responsiveImage {
          ...responsiveImageFragment
        }
      }
    }
  }
  ${responsiveImageFragment}
`;
