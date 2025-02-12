import axios from "axios";
import { useState, useEffect } from "react";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const fetchHolidays = async (year, country, search = "") => {
  try {
    const response = await axios.get(`${API_BASE_URL}/holidays/`, {
      params: { year, country, search },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching holidays:", error);
    return [];
  }
};


export const getCountries = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/countries/`);
    //console.log("response.data")
    //console.log(response.data)
    return response.data.response.countries; // Assuming API returns a list of { code: "US", name: "United States" }
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};