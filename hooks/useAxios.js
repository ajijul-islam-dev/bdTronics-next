"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const axiosPublic = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });
  useEffect(() => {
    axiosPublic.get(`${url}`).then((data) => setData(data.data.products));
  }, []);
  return data;
};
export default useAxios;
