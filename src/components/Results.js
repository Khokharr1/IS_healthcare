import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Results.css'

const Results = () => {
    const [results, setResults] = useState([])

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await axios.get('/api/results')
                setResults(response.data)
            } catch (error) {
                console.error('Failed to fetch results', error)
            }
        }
        fetchResults()
    }, [])

    return (
        <div className="results">
            <h2>Computation Results</h2>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result.description}: {result.value}</li>
                ))}
            </ul>
        </div>
    )
}
export default Results