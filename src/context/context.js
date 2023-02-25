import { createContext, useEffect, useState } from "react";
import useFetch from "../api/useFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    //States
  const [searching, setSearching] = useState("");
  const [items, setItem] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [auth, setAuth] = useState({});
  const [toggle, setToggle] = useState(false);
  const [model, setModel] = useState(false);
  //fetching data from the api
  const { data, fetchError, isLoading } = useFetch(
    "https://coralmango.com/api/react-test"
  );
//hook execute on change of data or items 
  useEffect(() => {
    setItem(data);
  }, [data, items]);
    //hook execute on change of items or searching
  useEffect(() => {
    const filterResult = items.filter((item) => {
      const result = item.name.toLowerCase().includes(searching.toLowerCase());
      return result;
    });

    setSearchResults(filterResult);
  }, [items, searching]);

  return (
    <DataContext.Provider
      value={{
        toggle,
        setToggle,
        searching,
        setSearching,
        searchResults,
        fetchError,
        isLoading,
        items,
        setItem,
        auth,
        setAuth,
        model,
        setModel,
        data,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
