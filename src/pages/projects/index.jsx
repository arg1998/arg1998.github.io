import Application from "../../components/Application";
import MarkDownContent from "../../components/BlogMarkdownContent"
import ProjectItem from "../../components/ProjectItem"
import { SvgIconApple, SvgIconLinux, SvgIconWindows } from "../../components/SvgIcons"
import { RibbonWorInProgress } from "../../components/Ribbons";






import ezego_markdown from "../../data/projects/proejcts_ezego.md" 

const Projects = () => {
  return (
    <Application
      currentRoute={"/projects"}
      pageTitle={"ARGOSTA → Projects"}
    >


      <div className={"project-area-container"}>
        <ProjectItem
          ribbonComponent={<RibbonWorInProgress styles={{ backgroundColor: "#2a2a2a88", color: "rgb(255, 102, 0)", border: '2px solid' }} />}
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
          <MarkDownContent MarkdownFileContent={ezego_markdown} />

        </ProjectItem>
       
      </div>


    </Application>
  );
};

export default Projects;
