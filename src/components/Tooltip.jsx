import React, { useState } from "react";


const Tooltip = ({ text, children, position = "top" }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className="tooltip-wrapper"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && <div className={`tooltip-box ${position}`}>{text}</div>}
        </div>
    );
};

export default Tooltip;