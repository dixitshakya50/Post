import { useState, useEffect } from 'react';

const FetchData = () => {

    const [events, setEvents ]  = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(()=>{
        const fetchData = async () => {

            setLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data  = await response.json();
        
            setEvents(data);
            setLoading(false);
        }
        fetchData();
    },[])
    
const whatData =  events.map(ev => <h6 key={ev.id}>{ev.id}</h6>)
    return !loading? whatData: <h5>loading</h5>
}

export default  FetchData;