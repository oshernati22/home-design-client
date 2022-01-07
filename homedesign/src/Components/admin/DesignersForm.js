import React, { useEffect, useState } from "react";
import "./form.scss";
import { CREATE_DESIGNER } from "../../GraphQl/Mutations";
import { useMutation } from "@apollo/client";
const DesignersForm = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [url, setUrl] = useState();
  const [img, setImg] = useState();
  const [loading, setLoading] = useState();

  const [createDesigner, { error }] = useMutation(CREATE_DESIGNER);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };
  const handleImg = async (event) => {
    setLoading("please wait");
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "designersImgs");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/osher/image/upload",
      {
        method: "Post",
        body: data,
      }
    );
    setImg(await res.json());
    setLoading("ok");
  };

  const cleanStates = () => {
    setTitle("");
    setImg("");
    setUrl("");
    setDescription("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading("please wait");
    createDesigner({
      variables: {
        title: title,
        description: description,
        url: url,
        photo: img.secure_url,
      },
    });

    if (error) {
      console.log(error);
    }
    setLoading("done");
    cleanStates();
    console.log("here");
  };

  return (
    <>
      <>{loading}</>
      <form className="form" onSubmit={handleSubmit}>
        <div className="label__container">
          <label className="label">Enter Designer Title: </label>
          <input
            className="input"
            type="text"
            name="title"
            onChange={handleTitleChange}
          />
        </div>
        <div className="label__container">
          <label className="label">Enter Designer Description: </label>
          <input
            className="input"
            type="text"
            name="description"
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="label__container">
          <label className="label">Enter Designer website:</label>
          <input
            className="input"
            type="text"
            name="url"
            onChange={handleUrlChange}
          />
        </div>
        <div className="label__container">
          <label className="label">Enter Designer Photo :</label>
          <input
            placeholder="Upload File"
            className="input"
            type="file"
            name="file"
            onChange={handleImg}
          />
        </div>
        <div>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default DesignersForm;
