import Tooltip from "./Tooltip"

const ProjectItem = ({ children, imagePath, title, imageStyles, languages, platforms, tools, topics, ribbonComponent, ribbonStyles, githubUrl, readMoreUri }) => {

    const show_extras = (languages != null && languages.length > 0) ||
        (platforms != null && platforms.length > 0) ||
        (tools != null && tools.length > 0) ||
        (topics != null && topics.length > 0);

    const show_extra_buttons = (!!readMoreUri || !!githubUrl) && show_extras;


    const topics_color = "#f55566"
    const tools_color = "#ff5ba8"
    const languages_color = "#ffd700"
    const platoforms_color = "#33ccff"


    return (
        <>
            <div className="project-grid-item" style={{ borderBottomRightRadius: show_extra_buttons ? 0 : 15, marginBottom: show_extra_buttons? 120: 25 }}>
                <div className="project-grid-item-image-container">
                    {imagePath && <>
                        <img className="project-grid-item-image"
                            src={imagePath}
                            style={imageStyles}
                        />
                        <div className="project-grid-item-image-gradient" />
                        {ribbonComponent && <div className="project-grid-item-ribbon-container" style={ribbonStyles}> {ribbonComponent} </div>}
                    </>
                    }
                </div>
                <div className="project-grid-item-content-container">
                    <div className="project-grid-item-content-description">
                        {title && <p className="project-grid-item-content-title">{title}</p>}

                        {children}
                    </div>
                    <div className="project-grid-item-content-extras-container">
                        {show_extras && <div className="project-grid-item-content-extras">

                            {topics &&
                                <div className="project-extra-topics-container project-extra-entry">
                                    <span  >Topics</span>
                                    <div className="project-item-extra-horizontal-container">
                                        {
                                            topics.map((item, index) => (<span style={{ color: topics_color, borderColor: topics_color }} className="project-item-chips" key={index}>{item}</span>))
                                        }
                                    </div>
                                </div>
                            }

                           

                            {tools &&
                                <div className="project-extra-tools-container project-extra-entry">
                                    <span >Tools</span>
                                    <div className="project-item-extra-horizontal-container">
                                        {
                                            tools.map((item, index) => (<span style={{ color: tools_color, borderColor: tools_color }} className="project-item-chips" key={index}>{item}</span>))
                                        }
                                    </div>
                                </div>
                            }
                            
                            {languages &&
                                <div className="project-extra-languages-container project-extra-entry">
                                    <span >Languages</span>
                                    <div className="project-item-extra-horizontal-container">
                                        {
                                            languages.map((item, index) => (<span style={{ color: languages_color, borderColor: languages_color }} className="project-item-chips" key={index}>{item}</span>))
                                        }
                                    </div>
                                </div>
                            }



                            {platforms &&
                                <div className="project-extra-platforms-container project-extra-entry">
                                    <span >Platforms</span>
                                    <div className="project-item-extra-horizontal-container">
                                        {
                                            platforms.map((PlatformIcon, index) => {
                                                if (PlatformIcon.component && PlatformIcon.tooltip) {
                                                    return (<Tooltip text={PlatformIcon.tooltip} key={index}> <PlatformIcon.component className="project-platform-svg-icon" color={platoforms_color} /> </Tooltip>)
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            }
                        </div>}

                        {show_extra_buttons && <div className="project-item-buttons">
                            {githubUrl && <a className={`project-item-button-github ${readMoreUri ? "" : "github-expanded"}`} href={githubUrl}> <i className="bi bi-github" /><span>Source Code</span></a>}
                            {readMoreUri && <a className={`project-item-button-read-more ${githubUrl ? "" : "read-more-expanded"}`} href={readMoreUri}>Read More</a>}

                            <div className="project-item-corner-arch" />
                        </div>}

                    </div>

                </div>
            </div>
        </>
    )
}


export default ProjectItem;