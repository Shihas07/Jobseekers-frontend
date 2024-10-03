import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Common/Card";
import fetchTokenCount from "../../services/employer/fetchTokenCount";

export default function Dashboard({ id }) {
  const employer = useSelector((state) => state.employer.employerDetails);
  console.log("employer", employer._id);

  const [fetchCount, setFetchToken] = useState(0);
  console.log("fetchCount", fetchCount);

  const fetchToken = async () => {
    const id = employer._id;
    const response = await fetchTokenCount(id);

    if (response) {
      setFetchToken(response.data.tokenCount);
    }
  };
  useEffect(() => {
    fetchToken();
  }, []);

  const title = "available tokens";
  const BoxHead = "count vailble token";
  return (
    <div>
      {/* <h1>this is employer dashbord</h1> */}
      <Card
  width="220px" // Updated width to a reasonable size for display
  height="200px" // Updated height for a smaller card
  bgcolor="yellow"
  title={title}
  innerBoxHead="Count"
  data={fetchCount} // Make sure fetchCount is a valid data value, e.g., a number or string
/>
    </div>
  );
}
