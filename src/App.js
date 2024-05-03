import React, { useState, useEffect, toast } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";

const App = () => {

  const[courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);


    async function fetchData(){

      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        // save data into a variable
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }

    useEffect( () => {
      fetchData();
    },[])

  

  return (

    <div className="min-h-screen flex flex-col" >

      <div>
          <Navbar/>
      </div>

      <div>
        <Filter
          filterData = {filterData}
        />
      </div>

      <div>
        {
          loading ? (<Spinner/>) : (<Cards courses={courses}/>)
        }
      </div>

    </div>

  );
};

export default App;
