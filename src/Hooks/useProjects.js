import { useEffect, useState } from 'react';


const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('http://localhost:5000/projects');
            const data = await res.json();
                setProjects(data);
                setIsLoading(false);
            } catch (err) {
                setError(err);
            }
        })()
    },[])

    return { projects, isLoading, error };
}
export default useProjects;