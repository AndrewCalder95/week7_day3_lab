const ChartItem = ({chart}) => {
    return (
        <li>
            {chart.title.label}
            <a href={chart.id.label}>     Listen here!</a>
        </li>
    )
}

export default ChartItem;