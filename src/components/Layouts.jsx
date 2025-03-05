

const HorizontalLayout = ({ children, styles, height, maxHeight }) => (<div className="horizontal-layout-container" style={{ height, maxHeight, ...styles}}>{children}</div>)
const VerticalLayout = ({ children, styles, width, maxWidth }) => (<div className="vertical-layout-container" style={{ width, maxWidth, ...styles }}>{children}</div>)


export {HorizontalLayout, VerticalLayout}