// Navigation Bar SECTION
const navBar = {
    show: true,
};

// Main Body SECTION
const mainBody = {
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Jose",
    middleName: "",
    lastName: "Francis",
    message: " Passionate about changing the world with technology. ",
    icons: [{
            image: "fa-github",
            url: "https://github.com/joseettan",
        },
        {
            image: "fa-facebook",
            url: "https://www.facebook.com/josef410",
        },
        {
            image: "fa-instagram",
            url: "https://www.instagram.com/josettans_insta/",
        },
        {
            image: "fa-linkedin",
            url: "https://www.linkedin.com/in/jose-francis-b599094a/",
        },

    ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
    show: true,
    heading: "About Me",
    imageLink: require("../editable-stuff/jose2-min.png"),
    imageSize:300,
     message: "My name is Jose Francis. Currently B.Tech student at Amal Jyothi College Of Engineering,Kanjirappally. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
    resume: "https://drive.google.com/file/d/1Yta549UH_5-4kvMaUriGtztBskGLcmet/view?usp=sharing",
};

// PROJECTS SECTION

const repos = {
    show: true,
    heading: "Recent Projects",
    gitHubUsername: "Joseettan",
    reposLength: 4,
    specificRepos: [],
};





const skills = {
    show: true,
    heading: "Skills",
    hardSkills: [
        { name: "C/C++", value: 90 },
        { name: "HTML/CSS", value: 80 },
        { name: "PHP", value: 70 },
        { name: "MySQL", value: 70 },
        { name: "JavaScript", value: 90 },
        { name: "React", value: 65 },
        { name: "Firebase", value: 60 },
    ],
    softSkills: [
        { name: "Positive Attitude", value: 900 },
        { name: "Leadership", value: 90 },
        { name: "Active Learner", value: 80 },
        { name: "Adaptability", value: 85 },
        { name: "Problem Solving", value: 75 },
        { name: "Empathy", value: 90 },
        { name: "Works under pressure", value: 90 },
    ],
};

// GET IN TOUCH SECTION
const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message: "I'm currently looking for full-time Software Engineering! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
    email: "josef410@gmail.com",
};

export { navBar, mainBody, about, repos, skills, getInTouch };