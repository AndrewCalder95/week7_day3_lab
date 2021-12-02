const ChartItem = ({chart, position}) => {
    return (
        <li>
            <h2> {position}. </h2>
            <img src={chart['im:image'][0].label} width="100"></img>
            <div id="title_and_sound">
                <h4 id="title"> {chart['im:name'].label} - {chart['im:artist'].label} </h4>
                <audio id="music"
                    controls
                    src={chart.link[1].attributes.href}>
                        Your browser does not support the
                        <code>audio</code> element.
                </audio>
            </div>
        </li>
    )
}

export default ChartItem;