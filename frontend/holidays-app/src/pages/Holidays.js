import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchHolidays } from "../api/api";
import HolidayList from "../components/HolidayList";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Holidays = () => {
  const query = useQuery();
  const year = query.get("year");
  const country = query.get("country");
  const search = query.get("search") || "";

  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (year && country) {
      fetchHolidays(year, country, search).then((data) => {
        setHolidays(data);
        setLoading(false);
      });
    }
  }, [year, country, search]);

  if (!year || !country) {
    return <p className="text-center text-red-500">Invalid search parameters.</p>;
  }

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">Holidays</h1>
      {loading ? <p className="text-center">Loading...</p> : <HolidayList holidays={holidays} />}
    </div>
  );
};

export default Holidays;
