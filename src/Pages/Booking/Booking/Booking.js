import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  const url = `http://localhost:9999/services/${serviceId}`;
  //fetch single data
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);
  return (
    <div>
      <h2>Details of {service.name}</h2>
      <h2>this is booking: {service._id}</h2>
    </div>
  );
};

export default Booking;
