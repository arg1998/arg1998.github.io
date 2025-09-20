// TODO: Add a share button to make projectReadableId sharable by copying the link into clipboard 


import Application from "../../components/Application";
import MarkDownContent from "../../components/MarkdownContent"
import ProjectItem from "../../components/ProjectItem"
import { SvgIconAndroid, SvgIconApple, SvgIconArduino, SvgIconLinux, SvgIconWeb, SvgIconWindows } from "../../components/SvgIcons"
import { RibbonWorInProgress, RibbonDemo, RibbonArchive } from "../../components/Ribbons";
import YouTubeFrame from "../../components/YouTubeFrame";


import kitchen_chaos_markdown from "../../data/projects/project_kitchen_chaos.md"
import ezego_markdown from "../../data/projects/project_ezego.md"
import qosmit2d_markdown from "../../data/projects/project_qosmit2d.md"
import svg_styler_markdown from "../../data/projects/project_svg_styler.md"
import bc_accident_markdown from "../../data/projects/project_bc_accident.md"
import light_knight_markdown from "../../data/projects/project_light_knight.md"
import rice_seed_markdown from "../../data/projects/project_rice_seed.md"
import humidistat_markdown from "../../data/projects/project_humidistat.md"
import argosta_markdown from "../../data/projects/project_argosta.md"
import fear_of_god_markdown from '../../data/projects/project_fear_of_god.md';
import gp_markdown from "../../data/projects/project_gp.md"
import optimal_triangulation_markdown from "../../data/projects/project_optimal_triangulation.md"



const Projects = () => {

  const homePagePreviewData = {
    description: "Software Engineer | M.Sc. Computer Science",
    image: "https://www.argosta.me/assets/images/link_preview_img_1.jpeg",
    url: "https://www.argosta.me/proejcts"
  }

  return (
    <Application
      currentRoute={"/projects"}
      pageTitle={"ARGOSTA → Projects"}
      pagePreviewData={homePagePreviewData}
    >


      <div className={"project-area-container"}>
        {/* Kitchen Chaos*/}
        <ProjectItem
          projectReadableId={"unity-kitchen-chaos-game"}
          ribbonComponent={<RibbonDemo />}
          ribbonStyles={{ backgroundColor: "#2a2a2a88", color: "rgb(0, 217, 255)", border: '2px solid' }}
          imageStyles={{ objectPosition: "0ّ% 100%", aspectRatio: 1920 / 720 }}
          extrasContainerStyles={{ justifyContent: 'start', gap: 25 }}
          imagePath={"kitchen_chaos_clone.jpg"}
          languages={["C#"]}
          topics={["Game Development", "Casual Game", "Video Game"]}
          tools={["Unity 6", "Visual Studio"]}
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
          <MarkDownContent MarkdownFileContent={kitchen_chaos_markdown} styles={{ fontSize: '13pt' }} />
          <YouTubeFrame embedUrl={"https://www.youtube.com/embed/lJOwZZJ0s3Q?si=6thjVGEEcbsqlY-1"} />
        </ProjectItem>

        {/* eZeGo */}
        <ProjectItem
          projectReadableId={"ezego"}
          ribbonComponent={<RibbonWorInProgress />}
          ribbonStyles={{ backgroundColor: "#2a2a2a88", color: "rgb(255, 102, 0)", border: '2px solid' }}
          githubUrl={"https://github.com/arg1998/ezego"}
          imagePath={"ezego.jpg"}
          imageStyles={{ objectPosition: "0% 93%", aspectRatio: 16 / 4 }}
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

        {/* Qosmit2D */}
        <ProjectItem
          projectReadableId={"qosmit-2d-game-engine"}
          ribbonComponent={<RibbonDemo />}
          ribbonStyles={{ backgroundColor: "#2a2a2a88", color: "rgb(0, 217, 255)", border: '2px solid' }}
          githubUrl={"https://github.com/arg1998/qosmit2d"}
          extrasContainerStyles={{ justifyContent: 'space-around' }}
          imagePath={"qosmit2d.png"}
          imageStyles={{ objectPosition: "0% 0%", aspectRatio: 16 / 6 }}
          topics={["Game Engine", "ECS", "2D", "Real-time", "Cross-platform"]}
          tools={["SFML", "Dear ImGui", "Tracy Profiler", "CMake"]}
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
          <MarkDownContent MarkdownFileContent={qosmit2d_markdown} styles={{ textAlign: 'start', fontSize: '13pt' }} />

        </ProjectItem>

        {/* SVG Styler */}
        <ProjectItem
          projectReadableId={"obsidian-svg-styler"}
          githubUrl={"https://github.com/arg1998/obsidian-svg-styler"}
          imagePath={"svg-styler.png"}
          imageStyles={{ objectPosition: "0% 0%", aspectRatio: 16 / 6 }}
          topics={["Obsidian.md", "Plugin", "SVG", "GUI", "Open-source"]}
          tools={["Obsidian API", "Chrome Dev Tools", "VS Code"]}
          languages={["JavaScript", "HTML", "CSS"]}
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
          <MarkDownContent MarkdownFileContent={svg_styler_markdown} styles={{ textAlign: 'start', fontSize: '13pt' }} />

        </ProjectItem>

        {/* BC Accident Visualizer */}
        <ProjectItem
          projectReadableId={"bc-accident-vis"}
          githubUrl={"https://github.com/arg1998/TrafficAccidentVis"}
          imagePath={"bc_accident.jpg"}
          imageStyles={{ objectPosition: "0% 0%", aspectRatio: 16 / 6 }}
          topics={["Data Visualization", "Geo Data", "Interactive", "Traffic Data", "Data Processing"]}
          tools={["Leaflet", "GeoJson", "Google Charts", "FastAPI", "Panads", "GeoPandas", "ShapeFiles", "uvicorn"]}
          languages={["Python","JavaScript", "HTML", "CSS"]}
          platforms={[
            {
              component: SvgIconWeb,
              tooltip: "Web Application"
            }

          ]}
        >
          <MarkDownContent MarkdownFileContent={bc_accident_markdown} styles={{ textAlign: 'start', fontSize: '13pt' }} />
          <video src="https://github.com/arg1998/TrafficAccidentVis/raw/refs/heads/main/Data/demo.mp4" muted controls width={"100%"} />

        </ProjectItem>


        {/* LightKnight */}
        <ProjectItem
          projectReadableId={"lightknight-visualizer"}
          ribbonComponent={<RibbonArchive />}
          ribbonStyles={{ backgroundColor: "#2a2a2a88", color: "#fbff00", border: '2px solid' }}
          githubUrl={"https://github.com/arg1998/LightKnight"}
          imagePath={"lightknight.png"}
          imageStyles={{ objectPosition: "0% 0%", aspectRatio: 16 / 6 }}
          topics={["Stage Lighting", "Visualization", "Music", "Cross-platform", "Real-time"]}
          tools={["ElectronJs", "Qt", "NodeJs", "Arduino", "ReactJs", "Redux", "d3"]}
          languages={["JavaScript", "C/C++", "HTML", "CSS"]}
          platforms={[
            {
              component: SvgIconWindows,
              tooltip: "Windows"
            },
            {
              component: SvgIconLinux,
              tooltip: "Linux"
            },
            {
              component: SvgIconArduino,
              tooltip: "Arduino"
            }
          ]}
        >
          <MarkDownContent MarkdownFileContent={light_knight_markdown} styles={{ textAlign: 'start', fontSize: '13pt' }} />

        </ProjectItem>

        {/* Rice Seeds */}
        <ProjectItem
          projectReadableId={"rice-seed-classifier-opencv-cnn"}
          githubUrl={"https://github.com/arg1998/RiceSeedDetector"}
          imagePath={"rice_seeds.jpg"}
          imageStyles={{ objectPosition: "0% 0%", aspectRatio: 16 / 6 }}
          topics={["Computer Vision", "Deep Learning", "CNNs", "Dataset", "Research", "Agriculture"]}
          tools={["OpenCV", "Keras", "TensorFlow", "Jupyter", "matplotlib", "numpy", "Pillow", "HDF5"]}
          languages={["Python"]}
          platforms={[
            {
              component: SvgIconLinux,
              tooltip: "Linux"
            }
          ]}
        >
          <MarkDownContent MarkdownFileContent={rice_seed_markdown} styles={{ textAlign: 'start', fontSize: '13pt' }} />

        </ProjectItem>

        {/* Fear of God */}
        <ProjectItem
          projectReadableId={"flutter-fear-of-god-app"}
          ribbonComponent={<RibbonDemo />}
          ribbonStyles={{ backgroundColor: "#2a2a2a88", color: "rgb(238, 255, 0)", border: '2px solid' }}
          githubUrl={"https://github.com/arg1998/FearOfGod"}
          imagePath={"fear_of_god.jpg"}
          imageStyles={{ objectPosition: "0% 0%", aspectRatio: 16 / 6 }}
          topics={["UI", "Animation", "Design", "Fashion", "Online Shopping"]}
          tools={["Flutter", "VS Code", "Flutter Dev Tools"]}
          languages={["Dart"]}
          platforms={[
            {
              component: SvgIconAndroid,
              tooltip: "Android"
            },
            {
              component: SvgIconApple,
              tooltip: "iOS"
            }
          ]}
        >
          <MarkDownContent MarkdownFileContent={fear_of_god_markdown} styles={{ textAlign: 'start', fontSize: '13pt' }} />

        </ProjectItem>

        {/* HumidiStat */}
        <ProjectItem
          projectReadableId={"react-native-iot-humidity-app"}
          ribbonComponent={<RibbonDemo />}
          ribbonStyles={{ backgroundColor: "#2a2a2a88", color: "rgb(238, 255, 0)", border: '2px solid' }}
          githubUrl={"https://github.com/arg1998/HumidiStat"}
          imagePath={"humidistat.jpg"}
          imageStyles={{ objectPosition: "0% 0%", aspectRatio: 16 / 6 }}
          topics={["Animation", "IoT", "Interaction", "UX", "UI"]}
          tools={["React Native", "RN Reanimated", "Gesture Handler", "Android Studio", "d3"]}
          languages={["JavaScript"]}
          platforms={[
            {
              component: SvgIconAndroid,
              tooltip: "Android"
            }
          ]}
        >
          <MarkDownContent MarkdownFileContent={humidistat_markdown} styles={{ textAlign: 'start', fontSize: '13pt' }} />

        </ProjectItem>

        {/* Genetic Programming */}
        <ProjectItem
          projectReadableId={"tree-based-genetic-programming"}
          ribbonComponent={<RibbonArchive />}
          ribbonStyles={{ backgroundColor: "#2a2a2a88", color: "rgb(249, 252, 78)", border: '2px solid' }}
          githubUrl={"https://github.com/arg1998/GeneticProgramming"}
          imagePath={"gp.jpg"}
          imageStyles={{ objectPosition: "0% 0%", aspectRatio: 16 / 6 }}
          topics={["Genetic Programming", "Optimization", "Algorithms", "Solvers", "Heuristic"]}
          tools={["GraphViz", "VS Code", "Jupyter"]}
          languages={["Python"]}
          platforms={[
            {
              component: SvgIconLinux,
              tooltip: "Linux"
            },
            {
              component: SvgIconWindows,
              tooltip: "Windows"
            }, {
              component: SvgIconApple,
              tooltip: "macOS"
            }
          ]}
        >
          <MarkDownContent MarkdownFileContent={gp_markdown} styles={{ textAlign: 'start', fontSize: '13pt' }} />

        </ProjectItem>

        {/* DP Triangulation */}
        <ProjectItem
          projectReadableId={"optimal-triangulation-dynamic-programming"}
          ribbonComponent={<RibbonArchive />}
          ribbonStyles={{ backgroundColor: "#2a2a2a88", color: "rgb(249, 252, 78)", border: '2px solid' }}
          githubUrl={"https://github.com/arg1998/GeneticProgramming"}
          imagePath={"optimal_dp.jpg"}
          imageStyles={{ objectPosition: "0% 0%", aspectRatio: 16 / 6 }}
          topics={["Dynamic Programming", "Geometry", "Tesselation", "Optimization"]}
          tools={["p5", "JetBrains IDEA"]}
          languages={["Java"]}
          platforms={[
            {
              component: SvgIconLinux,
              tooltip: "Linux"
            },
            {
              component: SvgIconWindows,
              tooltip: "Windows"
            }, {
              component: SvgIconApple,
              tooltip: "macOS"
            }
          ]}
        >
          <MarkDownContent MarkdownFileContent={optimal_triangulation_markdown} styles={{ textAlign: 'start', fontSize: '13pt' }} />

        </ProjectItem>


        {/* Argosta.me */}
        <ProjectItem
          projectReadableId={"nextjs-github-pages-portfolio"}
          githubUrl={"https://github.com/arg1998/arg1998.github.io"}
          readMoreUri={"/blog/nextjs-on-github-pages"}
          imagePath={"argosta.jpg"}
          imageStyles={{ objectPosition: "0% 0%", aspectRatio: 16 / 6 }}
          topics={["Portfolio", "Personal Website"]}
          tools={["NextJs", "ReactJs", "React Markdown", "Github Pages"]}
          languages={["JavaScript", "HTML", "CSS", "TypeScript"]}
          platforms={[
            {
              component: SvgIconWeb,
              tooltip: "Web"
            }
          ]}
        >
          <MarkDownContent MarkdownFileContent={argosta_markdown} styles={{ textAlign: 'start', fontSize: '13pt' }} />

        </ProjectItem>

      </div>


    </Application>
  );
};

export default Projects;
