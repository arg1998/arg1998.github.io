const RibbonWorInProgress = ({styles}) =>  {
    return (<div className="ribbon ribbon-wip" style={styles}> <i className="bi bi-cone-striped" /><span> W.I.P </span></div>)
}

const RibbonDemo = ({ styles }) => {
    return (<div className="ribbon ribbon-educational" style={styles}> <i className="bi bi-circle-half" /> <span>Demo</span> </div>)
}

const RibbonArchive = ({ styles }) => {
    return (<div className="ribbon ribbon-archive" style={styles}> <i className="bi bi-archive-fill" /> <span>Archived</span> </div>)
}





export {
    RibbonWorInProgress,
    RibbonDemo,
    RibbonArchive,
}