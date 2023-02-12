import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        console.log("Top Quote"), [content]
    });
    
    const getContent = async () => {
        const data = await fetch('https://api.kanye.rest');
        const response = await data.json()
        setContent(response.quote)
    }

    return (
        <>
        <h1>Use Effect</h1>
        <h2>Here's a taste of Greatness</h2>
        <p>{content}</p>
        <button onClick={getContent}>Let's Go</button>
        </>
    )
}

root.render(<App />)