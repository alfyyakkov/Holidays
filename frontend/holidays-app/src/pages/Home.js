import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">Search for Holidays</h1>
      <SearchForm />
    </div>
  );
};

export default Home;
