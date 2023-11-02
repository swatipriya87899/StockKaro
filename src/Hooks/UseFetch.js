import { useEffect, useState } from 'react';
import axios from 'axios';

const UseFetch = (url) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

   //Fetching the data on changing the url
    useEffect(() => {
        fetchData()
    }, [url])

    //Function to fetch data
    const fetchData = async () => {
        setLoading(true)
        try {
            let resp = await axios.get(url)
            setResponse(resp.data)
        }
        catch (error) {
            setError(error);
        }
        setLoading(false)
    }

    //Returning responseData,error, loading from this hook
    return { response, error, loading };
}

export default UseFetch
