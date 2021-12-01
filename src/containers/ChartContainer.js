import { useState, useEffect } from "react";
import ChartList from "../components/ChartList"

const ChartContainer = () => {
    const [charts, setChart] = useState([]);

    useEffect( () => {
        getChart();
    }, [])


    const getChart = function(){
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(result => result.json())
        .then(charts => setChart(charts.feed.entry))
    }
    return (
        <>
            <h1>UK Top 20 </h1>
            <ChartList charts={charts}/>
        </>
    )


}

export default ChartContainer;