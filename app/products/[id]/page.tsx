"use client";
import { useParams } from "next/navigation";
import React from "react";

const DetailsPage = () => {
  const params = useParams();
  return <div className="my-20">Product details Page {params.id}</div>;
};

export default DetailsPage;
