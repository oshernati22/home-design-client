import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import Slider from "./Slider";

const GET_FURNITURES = gql`
  query {
    getAllFurnitures {
      title
      category
      designer
      description
      file
      price
    }
  }
`;
const ShowRoom = () => {
  const { category } = useParams();
  const { loading, data } = useQuery(GET_FURNITURES);
  let furByCategories;
  console.log(data);

  if (loading) {
    return <h1>loading..</h1>;
  } else {
    furByCategories = data.getAllFurnitures.filter(
      (el) => el.category === category
    );
    return <Slider furArr={furByCategories} />;
  }
};

export default ShowRoom;
