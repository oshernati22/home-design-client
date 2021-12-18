import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import "./designerpage.scss";

const DesignerPage = () => {
  const { designer } = useParams();

  const GET_DESIGNER = gql`
    query {
      getDesigner(title: "${designer}") {
        title
        url
        description
        photo
      }
    }
  `;
  const { loading, data } = useQuery(GET_DESIGNER);
  const [designerData, setDesignerData] = useState(undefined);

  useEffect(() => {
    if (loading === false && data) {
      setDesignerData(data.getDesigner);
    }
  }, [loading, data]);
  if (loading) return <h1>Please waite.. Loading</h1>;
  if (designerData) {
    return (
      <div className="designer__container">
        <div>
          <img className="designer__img" src={designerData.photo} />
          <hr></hr>
        </div>
        <div className="designer_head">{designerData.title}</div>
        <div className="designer_details">
          About {designerData.title} : {designerData.description}
        </div>
        <div className="designer_details">
          <a href={designerData.url}>Check Designer Website</a>
        </div>
      </div>
    );
  }
  return <></>;
};

export default DesignerPage;
