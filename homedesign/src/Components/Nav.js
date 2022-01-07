import React, { useEffect, useState } from "react";
import SiteNav, { ContentGroup } from "react-site-nav";
import "../Components/nav.scss";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_FUR_CATEGORIES, GET_DESIGNERS_TITELS } from "../GraphQl/Queries";

const Nav = () => {
  const [categories, setCategories] = useState(["loading"]);
  const { loading: loadingCategories, data: dataCategories } =
    useQuery(GET_FUR_CATEGORIES);

  const { loading: loadingDesigners, data: dataDesigners } =
    useQuery(GET_DESIGNERS_TITELS);

  useEffect(() => {
    if (loadingCategories === false && dataCategories) {
      setCategories([
        ...new Set(dataCategories.getAllFurnitures.map((el) => el.category)),
      ]);
    }
  }, [loadingCategories, dataCategories]);

  return (
    <div>
      <SiteNav
        align="center"
        columnWidth="150"
        rowHeight="45"
        background="#f6f1eb"
        color="#cbcbcb"
        fontSize="18"
        fontFamily="Ariel Narrow "
        breakpoint="300"
        contentBackground="#f6f1eb"
        contentTop="0"
        contentColor="black"
      >
        <ContentGroup title="Home" height="120">
          <ul>
            <li className="nav__li">
              <Link to="/" style={{ textDecoration: "none" }}>
                Home Page
              </Link>
            </li>
            <li className="nav__li">
              <Link to="/admin" style={{ textDecoration: "none" }}>
                Admin
              </Link>
            </li>
          </ul>
        </ContentGroup>
        <ContentGroup title="Show Room" height={categories.length * 60}>
          <div className="subheader">Choose Category</div>
          <ul className="nav__ul">
            {loadingCategories ? (
              <li className="nav__li">loading</li>
            ) : (
              categories.map((el) => (
                <li key={el} className="nav__li">
                  <Link style={{ textDecoration: "none" }} to={`/${el}`}>
                    {el}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </ContentGroup>
        <ContentGroup
          title="Designers"
          height={
            (dataDesigners ? dataDesigners.getAllDesigners.length : 2) * 60
          }
        >
          <div className="subheader">Choose Designer</div>
          <ul className="nav__ul">
            {loadingDesigners ? (
              <li className="nav__li">loading</li>
            ) : (
              dataDesigners.getAllDesigners.map((el) => (
                <li key={el.title} className="nav__li">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/designers/${el.title}`}
                  >
                    {el.title}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </ContentGroup>
      </SiteNav>
    </div>
  );
};

export default Nav;
