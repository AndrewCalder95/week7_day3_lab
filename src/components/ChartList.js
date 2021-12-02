import React from "react"
import ChartItem from "./ChartItem"

const ChartList = ({ charts }) => {

    const chartItems = charts.map((chart, index) => {
        return <ChartItem chart = {chart} position={index+1}/>
    })
    
    return (
        <div id ="lists">
            <ol>
                {chartItems}
            </ol>
        </div>
    )
}

export default ChartList;