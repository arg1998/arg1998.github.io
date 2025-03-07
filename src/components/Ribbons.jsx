const RibbonWorInProgress = ({styles}) =>  {
    return (<div className="ribbon ribbon-wip" style={styles}> <i className="bi bi-cone-striped" /><span> W.I.P </span></div>)
}

const RibbonWorEducational = ({ styles }) => {
    return (<div className="ribbon ribbon-educational" style={styles}> <i className="bi bi-mortarboard-fill" /> <span>Study</span> </div>)
}





export {
    RibbonWorInProgress,
    RibbonWorEducational
}