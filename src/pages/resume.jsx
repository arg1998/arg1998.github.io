import Application from "../components/Application";
import MarkdownContent from "../components/MarkdownContent"

const grad_ra_job = `
- **Designed and developed a full-stack web application** from scratch for data collection targeting software developers in North America and Europe, ensuring adherence to PIPEDA and CPPA regulations

  - **Front-end:** Created a **novel** vignette-based survey instrument with authentication, feedback, and screening systems
  - **Back-end:** Deployed API and database services using Docker containers on Ubuntu
  - Screened and **recruited 56** (out of 300) professional developers and **managed** their compensation
  - **Technologies:** \`MySQL, Docker, Node.js, PM2, React.js, Python, Express.js, TypeORM, Axios, JWT\`

</br>

- **Led** a mixed-method study on human-bot interactions on GitHub, uncovering new insights into perceptions of bot autonomy and personality. Published one **ICSE** paper and successfully defended thesis
  
  - Used **machine learning** and statistical methods for quantitative data analysis
  - Collaborated with six researchers across three universities in Canada, Netherlands, and Denmark on a weekly basis
  - **Twice awarded** as the **"Top-Performing Graduate Student"**, receiving a total of 2,500 CAD in prizes
`;

const ta_job = `
- **CSC370: Relational Database Systems (MySQL)**
  - Instructed in lab sessions
  - Compiled teaching materials and conducted regular office hours
  - Evaluated assignments, supervised exams, and implemented \`Python\`-based auto-graders for the final project

</br>

- **CSC578B: Data Science for Software Engineering**
  - Graded assignments, exams, and final course projects
  - Contributed to improving the <a href="https://reuse-dept.org/" target="_blank">Department of Reuse</a> format checker
`

const uib_internship = `
- Developed **supply-chain solutions** using Genetic Algorithm for logistics and scheduling of **cargo ships** in real-world scenarios with dynamic constraints. Optimized the application to run **60x faster**. Wrote more than **80 unit tests**

  - Employed **data-driven**, **cache-aware**, and **multi-threaded design**
  - Wrote an AMPL **language parser** for testing solutions and benchmarking
  - Built a **real-time** telemetry system to monitor the application's runtime via a webpage
  - **Technologies:** \`C++17, CMake, GTest, GDB, STL, Perf, SSH, Ubuntu, Node.js, p5.js, Socket.IO, HTML, AMPL\`
`

const rrii_internship = `
- Developed Computer Vision pipelines to classify local rice varieties with **87.1% accuracy**. Trained Deep CNNs to detect broken or corrupt rice seeds with **97.6% accuracy**. Reduced classification time by **120x compared to human baseline**

  - Used **OpenCV** with the **Canny** algorithm to automate seed isolation and cropping
  - Curated a labeled dataset of **1M+** rice seed images with variety and quality metadata
  - Utilized **TensorFlow** to train, test, and deploy **Deep CNNs** + **Softmax** classifiers
  - **Technologies:** \`Python, OpenCV, TensorFlow, Keras, Jupyter Notebooks, Ubuntu\`
`;

const freelance_job = `
- Developed full-stack web and Android applications using **Node.js**, **React.js & React Native**, **Flutter**, **MySQL**, and **Electron.js**.
`

const publications = `
- **A. Ghorbani** *et al.* (2023): <a href="https://doi.org/10.1109/ICSE48619.2023.00123" target="_blank">“Exploring Developer Preferences for GitHub Bots”</a> in IEEE/ACM 45<sup>th</sup> **ICSE**, Melbourne, Australia.
`

const tools_and_libs = `
<a href="https://unity.com/" target="_blank">\`Unity 6\`</a>, 
<a href="https://cmake.org/" target="_blank">\`CMake\`</a>, 
<a href="https://git-scm.com/" target="_blank">\`Git\`</a>, 
<a href="https://www.openssh.com/" target="_blank">\`SSH\`</a>, 
<a href="https://github.com/wolfpld/tracy" target="_blank">\`Tracy Profiler\`</a>, 
<a href="https://www.gnu.org/software/gdb/" target="_blank">\`GDB\`</a>, 
<a href="https://valgrind.org/" target="_blank">\`Valgrind\`</a>, 
<a href="https://clang.llvm.org/" target="_blank">\`Clang\`</a>, 
<a href="https://gcc.gnu.org/" target="_blank">\`GCC\`</a>, 
<a href="https://en.cppreference.com/w/cpp/container" target="_blank">\`STL\`</a>, 
<a href="https://github.com/google/googletest" target="_blank">\`GTest\`</a>, 
<a href="https://github.com/ocornut/imgui" target="_blank">\`Dear ImGui\`</a>,
<a href="https://www.raylib.com/" target="_blank">\`Raylib\`</a>,
<a href="https://www.sfml-dev.org/" target="_blank">\`SFML\`</a>,
<a href="https://p5js.org/" target="_blank">\`p5.js\`</a>,
<a href="https://www.qt.io/" target="_blank">\`Qt\`</a>, 
<a href="https://www.mysql.com/" target="_blank">\`MySQL\`</a>, 
<a href="https://www.mongodb.com/" target="_blank">\`MongoDB\`</a>, 
<a href="https://www.arduino.cc/" target="_blank">\`Arduino\`</a>, 
<a href="https://visualstudio.microsoft.com/" target="_blank">\`Visual Studio\`</a>, 
<a href="https://www.docker.com/" target="_blank">\`Docker\`</a>, 
<a href="https://nodejs.org/" target="_blank">\`NodeJs\`</a>, 
<a href="https://nextjs.org/" target="_blank">\`NextJs\`</a>,
<a href="https://react.dev/" target="_blank">\`ReactJs\`</a>,
<a href="https://reactnative.dev/" target="_blank">\`React Native\`</a>, 
<a href="https://expressjs.com/" target="_blank">\`ExpressJs\`</a>,
<a href="https://fastapi.tiangolo.com/" target="_blank">\`FastAPI\`</a>,
<a href="https://flutter.dev/" target="_blank">\`Flutter\`</a>,
<a href="https://docs.flutter.dev/tools/devtools" target="_blank">\`Flutter Dev Tools\`</a>,
<a href="https://www.electronjs.org/" target="_blank">\`ElectronJs\`</a>, 
<a href="https://www.microsoft.com/en-us/windows" target="_blank">\`Windows\`</a>, 
<a href="https://www.linux.org/" target="_blank">\`Linux\`</a>, 
<a href="https://www.gnu.org/software/bash/" target="_blank">\`Bash\`</a>, 
<a href="https://developer.android.com/" target="_blank">\`Android\`</a>, 
<a href="https://opencv.org/" target="_blank">\`OpenCV\`</a>, 
<a href="https://www.tensorflow.org/" target="_blank">\`TensorFlow\`</a>, 
<a href="https://keras.io/" target="_blank">\`Keras\`</a>, 
<a href="https://pm2.keymetrics.io/" target="_blank">\`PM2\`</a>
<a href="https://numpy.org/" target="_blank">\`NumPy\`</a>,
<a href="https://matplotlib.org/" target="_blank">\`Matplotlib\`</a>,
<a href="https://pandas.pydata.org/" target="_blank">\`Pandas\`</a>,
<a href="https://jupyter.org/" target="_blank">\`Jupyter\`</a>,
<a href="https://scikit-learn.org/" target="_blank">\`Scikit-learn\`</a>,
<a href="https://requests.readthedocs.io/" target="_blank">\`Requests\`</a>,
<a href="https://beautiful-soup-4.readthedocs.io/" target="_blank">\`BeautifulSoup\`</a>
<a href="https://d3js.org/" target="_blank">\`D3.js\`</a>,
<a href="https://jquery.com/" target="_blank">\`jQuery\`</a>,
<a href="https://redux.js.org/" target="_blank">\`Redux\`</a>,
<a href="https://mongoosejs.com/" target="_blank">\`Mongoose\`</a>,
<a href="https://typeorm.io/" target="_blank">\`TypeORM\`</a>,
<a href="https://socket.io/" target="_blank">\`Socket.IO\`</a>,
<a href="https://axios-http.com/" target="_blank">\`Axios\`</a>,
<a href="https://ggplot2.tidyverse.org/" target="_blank">\`ggplot2\`</a>,
<a href="https://dplyr.tidyverse.org/" target="_blank">\`dplyr\`</a>,
<a href="https://www.tidyverse.org/" target="_blank">\`Tidyverse\`</a>,
`;



const ResumeSection = ({ children, title, id }) => (
  <>
    <h1 className="resume-section-title" id={id}>{title}</h1>
    <div className="resume-section-container">
      {children}
    </div>
  </>
)

const ResumeSubSection = ({ children, title }) => (
  <div>
    <h5 className="resume-sub-section-title"> - {title}</h5>
    <div className="resume-sub-section-container">
      {children}
    </div>
  </div>
)

const EducationEntry = ({ university, degree, date, gpa, more }) => {
  return (
    <div className="resume-entry-header">
      <div className="education-entry-col col-start">
        <span className="resume-entry-title">{degree}</span>
        <span className="resume-entry-subtitle"><i className="bi bi-geo-alt" />  {university}</span>
      </div>

      <div className="education-entry-col col-end">
        <span className="resume-entry-date"><i className="bi bi-calendar2" /> {date}</span>
        {gpa && <span className="education-entry-gpa">{gpa}</span>}
      </div>

      {more && <div>{more}</div>}
    </div >
  )
}

const CertificateEntry = ({ title, issuer }) => {
  return (
    <div className="resume-certificate-container">
        <span className="resume-entry-title">{title}</span>
        <span className="resume-entry-subtitle">{issuer}</span>
    </div >
  )
}

const ExperienceEntry = ({ children, title, location, date }) => (
  <div className="experience-entry-container">
    <div className="resume-entry-header">
      <div className="experience-entry-col col-start">
        <span className="resume-entry-title">{title}</span>
        <span className="resume-entry-subtitle"><i className="bi bi-geo-alt" /> {location}</span>
      </div>

      <div className="experience-entry-col col-end">
        <span className="resume-entry-date"><i className="bi bi-calendar2" /> {date}</span>
      </div>
    </div>
    <div className="experience-entry-content">
      {children}
    </div>
  </div>
)

const Resume = () => {
  const homePagePreviewData = {
    description: "Software Engineer | M.Sc. Computer Science",
    image: "https://www.argosta.me/assets/images/link_preview_img_1.jpeg",
    url: "https://www.argosta.me/resume"
  }
  return (
    <Application currentRoute={"/resume"} pageTitle={"ARGOSTA → Resume"} pagePreviewData={homePagePreviewData}>
      <div className="resume-container">
        <ResumeSection title={<><i className="bi bi-mortarboard"></i> Education</>} id="education">
          <EducationEntry degree={"M.Sc. Computer Science"} university={"University of Victoria, BC, Canada"} date={"Sep 2021 - Dec 2023"} />
          <EducationEntry degree={"B.Eng. Computer Engineering"} university={"University of Tehran, Tehran, Iran"} date={"Sep 2016 - Sept 2020"} />
        </ResumeSection>

        <ResumeSection title={<><i className="bi bi-tools"></i> Skills</>} id="skills">
          <ResumeSubSection title={"Languages : "}>
            <MarkdownContent MarkdownFileContent={`\`C++\`, \`C#\`, \`Python\`, \`R\`, \`SQL\`, \`JavaScript\`, \`Dart\`, \`C\`, \`Java\`, \`Assembly\`, \`LaTeX\``} />
          </ResumeSubSection>

          <ResumeSubSection title={"Tools, Frameworks, and Libraries: "}>
            <MarkdownContent MarkdownFileContent={tools_and_libs} />
          </ResumeSubSection>
          
        </ResumeSection>

        <ResumeSection title={<><i className="bi bi-journal-code"></i> Experiences</>} id="experiences">
          <ExperienceEntry title={"Graduate Research Assistant"} location={"Octeral lab, UVic, Victoria, BC, Canada"} date={"Sep 2021 - Sep 2023"}>
            <MarkdownContent MarkdownFileContent={grad_ra_job} />
          </ExperienceEntry>

          <ExperienceEntry title={"Teaching Assistant"} location={"University of Victoria, BC, Canada"} date={"Sep 2021 - Sep 2022"}>
            <MarkdownContent MarkdownFileContent={ta_job} />
          </ExperienceEntry>

          <ExperienceEntry title={"C++ Software Developer Intern"} location={"University of Bergen, Norway ( Remote )"} date={"Jan 2021 -- June 2021"}>
            <MarkdownContent MarkdownFileContent={uib_internship} />
          </ExperienceEntry>

          <ExperienceEntry title={"Computer Vision Engineer Intern"} location={"Rice Research Institute of Iran (RRII), Rasht, Iran"} date={"May 2020 -- Sept 2020"}>
            <MarkdownContent MarkdownFileContent={rrii_internship} />
          </ExperienceEntry>

          <ExperienceEntry title={"Full-stack Software Developer (Freelance)"} location={"Rasht, Gilan, Iran"} date={"Mar 2017 -- Apr 2020"}>
            <MarkdownContent MarkdownFileContent={freelance_job} />
          </ExperienceEntry>
        </ResumeSection>


        <ResumeSection title={<><i className="bi bi-paperclip"></i> Publications</>} id="publications">
            <MarkdownContent MarkdownFileContent={publications}/>
        </ResumeSection>

        <ResumeSection title={<><i className="bi bi-patch-check"></i> Certificates</>} id="certificates">

          <CertificateEntry title={"Convolutional Neural Networks"} issuer={" Coursera — DeepLearning.ai"} />
          <CertificateEntry title={"Structuring Machine Learning Projects"} issuer={" Coursera — DeepLearning.ai"} />
          <CertificateEntry title={"Improving Deep Neural Networks"} issuer={" Coursera — DeepLearning.ai"} />
          <CertificateEntry title={"Neural Networks and Deep Learning"} issuer={" Coursera — DeepLearning.ai"} />
          <CertificateEntry title={"Heuristic Algorithms Workshop "} issuer={"University of Tehran"} />

        </ResumeSection>
      </div>

    </Application>
  );
};

export default Resume;
