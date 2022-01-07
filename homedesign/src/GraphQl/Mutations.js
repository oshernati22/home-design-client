import { gql } from "@apollo/client";

export const CREATE_DESIGNER = gql`
  mutation createDesigner(
    $title: String!
    $description: String!
    $url: String!
    $photo: String!
  ) {
    createDesigner(
      designer: {
        title: $title
        description: $description
        url: $url
        photo: $photo
      }
    ) {
      title
    }
  }
`;

// mutation {
//   createFurniture(furniture:{
//        title: "Natuzzi Sofa"
//        designer:"Natuzzi"
//          category: "Sofas"
//    description: "nice Natuzzi Sofa "
//    file: "https://3d-aspose-app.s3.us-west-2.amazonaws.com/p/0343e54c-a460-44c6-b185-fbe7ac79f22e?X-Amz-Expires=86400&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4XIV7DNDFPZP23Z5/20211214/us-west-2/s3/aws4_request&X-Amz-Date=20211214T122030Z&X-Amz-SignedHeaders=host&X-Amz-Signature=36e28e9a9e59f8b33731cdc048ae95104432143f098780e804be121e2338c1cd"
//    price: "1000"
//   }) {
// id
// title
// }
// }
