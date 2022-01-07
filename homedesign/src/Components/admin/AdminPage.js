import React from "react";
import "./adminpage.scss";
import DesignersForm from "./DesignersForm";

const AdminPage = () => {
  return (
    <div className="admin__container">
      <div className="admin__header">Admin Panel</div>
      <DesignersForm />
    </div>
  );
};

export default AdminPage;
