import { useState, useEffect } from "react";
import { getCountries } from "../api/api"; // Import from api.js
import { data } from "react-router-dom";

const CountrySelect = ({ country, setCountry }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  const countries_data = countries.response
  console.log(countries_data)

  return (
    <select
      value={country}
      onChange={(e) => setCountry(e.target.value)}
      className="w-full p-2 border rounded"
    >
      <option value="">Select a country</option>
      {countries.map((c) => (
        <option key={c["iso-3166"]} value={c["iso-3166"]}>
          {c.country_name}
        </option>
      ))}
    </select>
  );
};

export default CountrySelect;
