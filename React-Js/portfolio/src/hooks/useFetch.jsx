import  { useState, useEffect } from 'react'

const useFetch = ({ url }) => {

    console.log("url",url);

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(url);
                const data = await response.json();
                setData(data)

            } catch (error) {

                console.log("Error into the hook", error)
                setError(error)

            }
            finally {
                setLoading(false)
            }
        }

        fetchData();

    }, [url])


    return {
        data,
        error,
        loading,
    }

}

export default useFetch