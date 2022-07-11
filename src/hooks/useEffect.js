import  { useState, useEffect } from 'react';

const useFetch = (url,type='') => {
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
	const [error,setError] = useState(false);
    let keyType = ""
    if(type==''){
        keyType = "&apiKey=";
    }else{
        keyType = "?apiKey=";
    }

    useEffect(() => {
        fetch(url + keyType + process.env.REACT_APP_API_KEY)
        .then(res => {
			if(!res.ok){
				throw Error("Could not fetch data")
			}
          return res.json();
        })
        .then(data =>{
          setData(data);
          setIsPending(false);
		  setError(false);
      
        })
		.catch(err => {
			setIsPending(false);
			setError(err.message);
		})
    
      },[url]);
      return {data,isPending,error};

}


export default useFetch;