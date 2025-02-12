const HolidayList = ({ holidays }) => {

    holidays = holidays.response.holidays
    console.log(holidays)
    if (holidays.length === 0) {
      return <p className="text-gray-500 text-center">No holidays found.</p>;
    }

    return (
      <ul className="space-y-2 p-4">
        {holidays.map((holiday, index) => (
          <li key={index} className="p-2 bg-gray-100 rounded shadow">
            <strong>{holiday.name}</strong> - {holiday.date.iso}
          </li>
        ))}
      </ul>
    );
  };
  
  export default HolidayList;
  