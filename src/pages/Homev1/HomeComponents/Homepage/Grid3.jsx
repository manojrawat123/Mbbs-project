import React, { useState } from 'react';

const SearchForm = () => {
  const [selectedProgram, setSelectedProgram] = useState('Select Program');
  const [selectedDegree, setSelectedDegree] = useState('Select Degree');
  const [selectedCountry, setSelectedCountry] = useState('Select Dream Country');

  const handleSearch = () => {
    // Perform search logic here
    // You can use the selectedProgram, selectedDegree, and selectedCountry states
  };

  return (
    <div className="flex flex-col items-center  space-y-4 mt-10 bg-white sm:w-[70%] w-[95%] xl:ml-auto xl:mr-8 rounded xl:p-8">
        <h1 className='bg-yellow-300 px-10 rounded-b-xl xl:-m-8 p-4 font-bold text-xl'>Search Your University</h1>
        <br /><br />
     
        <select
  id="program"
  value={selectedProgram}
  onChange={(e) => setSelectedProgram(e.target.value)}
  className="w-[95%] px-4 py-2 border border-gray-300 rounded-md "
>
  <option value="Select Program">Select Program</option>
  {/* Add other program options here */}
</select>

<select
  id="degree"
  value={selectedDegree}
  onChange={(e) => setSelectedDegree(e.target.value)}
  className="w-[95%] px-4 py-2 border border-gray-300 rounded-md"
>
  <option value="Select Degree">Select Degree</option>
  {/* Add other degree options here */}
</select>

<select
  id="country"
  value={selectedCountry}
  onChange={(e) => setSelectedCountry(e.target.value)}
  className="w-[95%] px-4 py-2 border border-gray-300 rounded-md"
>
  <option value="Select Dream Country">Select Dream Country</option>
  {/* Add other country options here */}
</select>

<br className='xl:hidden block' />
      <button
        className=" bg-red-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-red-600 transition duration-300"
        onClick={handleSearch}
      >
        <span className="text-xl">🔍</span>
        <span>Search</span>
       
      </button>
     
        <br />
    </div>
  );
};

export default SearchForm;
