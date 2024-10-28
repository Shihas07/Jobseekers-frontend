import React from "react";
import ProfileHead from "../../components/user/profileHead";
import NotificationBar from "../../components/user/notificationBar";
import Resume from "../../components/user/resume";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import CommonModal from "../../components/Common/Modal";
import { Field } from "formik";
import useUserFind from "../../utilities/useUserFind";
import AddUserDetails from "../../services/user/addUserProfile";

export default function Profile() {
  const [isOpen, setOpen] = useState(false);
  // const [userDetails,setUserDetails]=useState([])
  // console.log("profliePage",userDetails)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    location: "",
    experience: "",
    resume: null, // for file input
  });

  console.log("formData", formData);

  const handleFieldChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const data = useUserFind();

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleSubmit = async () => {
    const response = await AddUserDetails(formData);

    setOpen(false);
  };

  const handleCLickEdit = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
 
  const fields = [
    { name: "name", type: "text", value: formData.name },
    { name: "email", type: "text", value: formData.email },
    { name: "phone", type: "text", value: formData.phone },
    { name: "skills", type: "text", value: formData.skills },
    { name: "experience", type: "text", value: formData.experience },
    { name: "location", type: "text", value: formData.location },
    { name: "Resume", type: "file", value: formData.resume },
  ];
  return (
    <div>
      <div>
        <ProfileHead open={handleCLickEdit}  />
      </div>
      <div className="flex mx-20 mt-10 mb-6 ">
        <NotificationBar />

        <div className="mx-20">
          <Resume />
        </div>
      </div>
      {isOpen ? (
        <CommonModal
          isOpen={isOpen}
          onClose={handleCloseModal}
          title={"PROFILE DETAILS"}
          children={fields}
          onSubmit={handleSubmit}
          onFieldChange={handleFieldChange}
        />
      ) : (
        ""
      )}
    </div>
  );
}
