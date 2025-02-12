import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CountrySelect from "./CountrySelect";

const SearchForm = () => {
  const [year, setYear] = useState("");
  const [country, setCountry] = useState("");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!year || !country) {
      alert("Please enter both year and country!");
      return;
    }
    navigate(`/holidays?year=${year}&country=${country}&search=${search}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow rounded-lg">
      <div>
        <label className="block font-medium">Year:</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Enter year"
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Country (ISO Code):</label>
        <CountrySelect country={country} setCountry={setCountry} />
      </div>
      <div>
        <label className="block font-medium">Search Holiday:</label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Optional holiday search"
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
