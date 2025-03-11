import Application from "../components/Application";
import Tooltip from "../components/Tooltip"
import {
  SvgIconAndroid,
  SvgIconApple,
  SvgIconCmake,
  SvgIconArduino,
  SvgIconCSharp,
  SvgIconDartLang,
  SvgIconDocker,
  SvgIconElectonJs,
  SvgIconFlutter,
  SvgIconGit,
  SvgIconGitHub,
  SvgIconJava,
  SvgIconJavaScript,
  SvgIconJupyter,
  SvgIconKeras,
  SvgIconLatex,
  SvgIconLinux,
  SvgIconMongoDB,
  SvgIconMySql,
  SvgIconNodeJs,
  SvgIconNvidia,
  SvgIconOpenCV,
  SvgIconPython,
  SvgIconQt,
  SvgIconRLang,
  SvgIconRaylib,
  SvgIconReactJs,
  SvgIconRenderDoc,
  SvgIconSfml,
  SvgIconTensorFlow,
  SvgIconTracy,
  SvgIconTypeScript,
  SvgIconUnityEngine,
  SvgIconUnrealEngine,
  SvgIconVisualStudio,
  SvgIconVisualStudioCode,
  SvgIconWindows,
  SvgIconP5Js,
  SvgIconCplusPlus,
  SvgIconNextJs
} from "../components/SvgIcons"





const Home = () => {

  const svgIconColor = "#bbb"
  const homePagePreviewData = {
    description: "Software Engineer | M.Sc. Computer Science",
    image: "https://www.argosta.me/assets/images/link_preview_img_1.jpeg",
    url: "https://www.argosta.me/"
  }

  return (
    <Application currentRoute={"/"} pageTitle={"ARGOSTA → Home"} pagePreviewData={homePagePreviewData} >
      <div style={{ width: '100%', paddingTop: 60, color: '#fff' }}>

        <div className="home-page-content-header" >
          <h3>Welcome To My Corner Of The Web</h3>
          <p>I wear many hats in the world of software development <br />Check out the areas I've explored 👇</p>

          <div className="home-page-expertiese-contianer" >

            <div className="home-page-experties-item">
              <i style={{ color: '#f54949' }} className="home-page-experties-item-icon bi bi-window-sidebar" />
              <p style={{ color: '#f54949' }} className="home-page-experties-item-title">Cross-platform Desktop GUI</p>
              <div className="home-page-experties-logo-container">
                <Tooltip text="C++" ><SvgIconCplusPlus className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="CMake" ><SvgIconCmake className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="Qt" ><SvgIconQt className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="Arduino" ><SvgIconArduino className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="ElectronJs" ><SvgIconElectonJs className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="Java" ><SvgIconJava className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="Windows" ><SvgIconWindows className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="Linux" ><SvgIconLinux className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="macOS" ><SvgIconApple className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="Git" ><SvgIconGit className="svg-icon" color={svgIconColor} /></Tooltip>
              </div>

            </div>

            <div className="home-page-experties-item">
              <i style={{ color: '#ff5ba8' }} className="home-page-experties-item-icon bi bi-controller" />
              <p style={{ color: '#ff5ba8' }} className="home-page-experties-item-title">Game Development </p>
              <div className="home-page-experties-logo-container">
                <Tooltip text="Unity 6"><SvgIconUnityEngine className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="Unreal Engine 5"><SvgIconUnrealEngine className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="Tracy Profiler"><SvgIconTracy className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="SFML"><SvgIconSfml className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="Raylib"><SvgIconRaylib className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="P5.js"><SvgIconP5Js className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="RenderDoc"><SvgIconRenderDoc className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="MS Visual Studio"><SvgIconVisualStudio className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="C#"><SvgIconCSharp className="svg-icon" color={svgIconColor} /></Tooltip>
              </div>

            </div>




            <div className="home-page-experties-item">
              <i style={{ color: '#33ccff' }} className="home-page-experties-item-icon bi bi-stack" />
              <p style={{ color: '#33ccff' }} className="home-page-experties-item-title">Full-stack Web and Mobile </p>
              <div className="home-page-experties-logo-container">
                <Tooltip text="ReactJs"><SvgIconReactJs className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="Flutter"><SvgIconFlutter className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="NodeJs"><SvgIconNodeJs className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="NextJs"><SvgIconNextJs className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="MySQL"><SvgIconMySql className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="Docker"><SvgIconDocker className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="Dart Lang"><SvgIconDartLang className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="MongoDB"><SvgIconMongoDB className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="JavaScript"><SvgIconJavaScript className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="TypeScript"><SvgIconTypeScript className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="Android"><SvgIconAndroid className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="iOS"><SvgIconApple className="svg-icon" color={svgIconColor} /></Tooltip>
              </div>

            </div>

            <div className="home-page-experties-item">
              <i style={{ color: 'gold' }} className="home-page-experties-item-icon bi bi-stars" />
              <p style={{ color: 'gold' }} className="home-page-experties-item-title">Data Science & Machine Learning</p>
              <div className="home-page-experties-logo-container">
                <Tooltip text="Python"><SvgIconPython className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="R Lang"><SvgIconRLang className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="Jupyter Notebook"><SvgIconJupyter className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="TensorFlow"><SvgIconTensorFlow className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="OpenCV"><SvgIconOpenCV className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="Keras"><SvgIconKeras className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="LaTeX"><SvgIconLatex className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="Git" ><SvgIconGit className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="GitHub" ><SvgIconGitHub className="svg-icon" color={svgIconColor} /></Tooltip>
                <Tooltip text="Visual Studio Code" ><SvgIconVisualStudioCode className="svg-icon" color={svgIconColor} /></Tooltip>
              </div>

            </div>

          </div>
        </div>


      </div>
    </Application>
  );
};

export default Home;
