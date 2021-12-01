import React from "react"
import ChartItem from "./ChartItem"

const ChartList = ({ charts }) => {

    const chartItems = charts.map((chart, index) => {
        return <ChartItem chart = {chart} key={index}/>
    })
    
    return (
        <div>
            <ol>
                {chartItems}
            </ol>
        </div>
    )
}

export default ChartList;