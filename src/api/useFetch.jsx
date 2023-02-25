import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (dataurl) => {
 
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setisLoading] = useState(null);
    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();
        const fetchData = async (url) => {
            setisLoading(true);
            try {
                const response = await axios.get(url, {
                    cancelToken:source.token
                })
                if (isMounted) {
                    setData(response.data);

                }
            } catch (error) {
                if (isMounted) {
                    setFetchError(error.message);
                    setData([])
                }
            } finally {
                isMounted && setisLoading(false);
            }
        }
        fetchData(dataurl);


        const cleanUp = () => {
            isMounted = false;
            source.cancel()
}
        return cleanUp;


    }, [dataurl])
    
    return { data, fetchError, isLoading };
}

export default useFetch
