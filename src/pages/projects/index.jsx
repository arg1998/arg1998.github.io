import Application from "../../components/Application";
import MarkDownContent from "../../components/BlogMarkdownContent"
import ProjectItem from "../../components/ProjectItem"
import { SvgIconApple, SvgIconLinux, SvgIconWindows } from "../../components/SvgIcons"
import { RibbonWorEducational, RibbonWorInProgress } from "../../components/Ribbons";






import ezego_markdown from "../../data/projects/proejcts_ezego.md"
import qosmit2d_markdown from "../../data/projects/project_qosmit2d.md" 

const Projects = () => {
  return (
    <Application
      currentRoute={"/projects"}
      pageTitle={"ARGOSTA → Projects"}
    >


      <div className={"project-area-container"}>
        <ProjectItem
          ribbonComponent={<RibbonWorInProgress  />}
          ribbonStyles={{ backgroundColor: "#2a2a2a88", color: "rgb(255, 102, 0)", border: '2px solid' }}
          githubUrl={"https://github.com/arg1998/ezego"}
          // readMoreUri={"/projects/ezego"}
          imagePath={"ezego.jpg"}
          imageStyles={{objectPosition: "0% 95%"}}
          languages={["C++ 17", "Python",]}
          topics={["Visualization", "Cross-platform", "Real-time", "GUI", "FOSS"]}
          tools={["Dear ImGui", "Tracy Profiler", "CMake", "Boost", "RtMIDI"]}
          platforms={[
            {
              component: SvgIconWindows,
              tooltip: "Windows"
            }
            , {
              component: SvgIconLinux,
              tooltip: "Linux"
            }, {
              component: SvgIconApple,
              tooltip: "macOS"
            }
          ]}
        >
          <MarkDownContent MarkdownFileContent={ezego_markdown} styles={{ fontSize: '13pt' }} />

        </ProjectItem>


        <ProjectItem
          ribbonComponent={<RibbonWorEducational />}
          ribbonStyles={{ backgroundColor: "#2a2a2a88", color: "rgb(0, 217, 255)", border: '2px solid' }}
          githubUrl={"https://github.com/arg1998/qosmit2d"}
          // readMoreUri={"/projects/ezego"}
          imagePath={"qosmit2d.png"}
          imageStyles={{ objectPosition: "0% 0%", aspectRatio: 16/6 }}
          topics={["Game Engine", "ECS", "2D" ,"Cross-platform", "Real-time"]}
          tools={[ "SFML", "Dear ImGui", "Tracy Profiler", "CMake"]}
          languages={["C++ 17"]}
          platforms={[
            {
              component: SvgIconWindows,
              tooltip: "Windows"
            }
            , {
              component: SvgIconLinux,
              tooltip: "Linux"
            }, {
              component: SvgIconApple,
              tooltip: "macOS"
            }
          ]}
        >
          <MarkDownContent MarkdownFileContent={qosmit2d_markdown} styles={{textAlign: 'start', fontSize: '13pt'}} />

        </ProjectItem>
      </div>


    </Application>
  );
};

export default Projects;
