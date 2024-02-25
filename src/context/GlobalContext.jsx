import React, { createContext, useState, useEffect } from 'react';

export const GlobalState = createContext();

export default function GlobalContext({ children }) {
    const [searchTerm, setSearch] = useState("");
    const [data, setData] = useState(null);
    let [option , setOption] = useState('');
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_MY_APP_API_KEY}&q=${searchTerm}&order=${option}&image_type=photo&pretty=true&per_page=50&safesearch=true&orientation=horizontal`;
    useEffect(() => {
        getData(url);
    }, [url,searchTerm,option]);
    function getData(url) {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((response) => setData(response))
            .catch((error) => console.error('Error fetching data:', error));
    }
    
    function setSearchTerm(term) {
        setSearch(term);
    }
    function setOptionSearch(option){
        console.log(option);
        setOption(option)
    }
    return (
        <GlobalState.Provider value={{ data, searchTerm: setSearchTerm,setOption : setOptionSearch }}>
            {children}
        </GlobalState.Provider>
    );
}

