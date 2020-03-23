import {useState, useEffect} from 'react'
import axios from 'axios'

const useAxios = (url, initialData = []) => {
    const [axiosData, setAxiosData] = useState(initialData)
    useEffect(() => {
        axios.get(url)
        .then(results => setAxiosData(results.data))
    }, [url])
    return [axiosData, setAxiosData]
}

export default useAxios 