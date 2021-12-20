import React from "react";

import "./threeobj.scss";

const Threeobj = (props) => {
  return (
    <div className="obj__container">
      <div className="obj_head">{props.title}</div>
      <div className="obj_details">Designer : {props.designer}</div>
      <div className="obj_details">Description : {props.description}</div>
      <div className="obj_details">Price : {props.price}</div>
      <hr
        style={{
          marginTop: "2rem",
        }}
      />
      <div>
        <model-viewer
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          src={props.glb}
          alt="A 3D model of an astronaut"
          id="threeobj"
        >
          <button
            slot="ar-button"
            style={{
              backgroundColor: "white",
              borderRadius: "4px",
              border: "none",
              position: "absolute",
              top: "16px",
              right: "16px",
            }}
          >
            👋 Activate AR
          </button>
        </model-viewer>
      </div>
    </div>
  );
};

export default Threeobj;
