import React, { useState } from "react";

const formatDate = (data) => {
  let newDate = new Date(data);
  const options = {
    month: "numeric",
    year: "numeric",
  };
  return data
    ? new Intl.DateTimeFormat("en-Gb", options).format(newDate)
    : null;
};

export default formatDate;
