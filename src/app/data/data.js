import { TechIcon,iconsData } from "./icons"
const projects =[
    {
        title:"EV Rental",
        discription:"Its a Ev-bike renatal servies project",
        tech:[
            { name: "React", icon: TechIcon.React },
            { name: "CSS", icon: TechIcon.Sass },
            { name: "JS", icon: TechIcon.NodeJS},
            { name: "JS", icon: TechIcon.MongoDB}
        ]

    },{
        title:"Movie Reviews",
        discription:"You can see all type movies and TV Sreies revies and rateings here",
        tech:[
            { name: "React", icon: TechIcon.React},
            { name: "CSS", icon: TechIcon.Sass },
            { name: "JS", icon: TechIcon.Redux}
        ]
    },{
        title:"Portfolio Site",
        discription:"It's my Portfolio ",
        tech:[
            { name: "HTML", icon: TechIcon.NextJs},
            { name: "CSS", icon: TechIcon.TailWind}
        ]
    },{
        title:"Buy Me Chai",
        discription:"its a Blockchain Decentrlized site",
        tech:[
            { name: "HTML", icon: TechIcon.React},
            { name: "CSS", icon: TechIcon.NodeJS}
        ]
    }

]

const tech =[
    {
        name:"HTML",
        tech:TechIcon.HTML,

    },
    {
        name:"CSS3",
        tech:TechIcon.CSS,

    },
    {
        name:"JavaScript",
        tech:TechIcon.JS,

    },
    {
        name:"ReactJS",
        tech:TechIcon.React,

    }, {
        name:"NodeJS",
        tech:TechIcon.NodeJS,

    }, {
        name:"NextJS",
        tech:TechIcon.NextJs,

    },{
        name:"Tailwind",
        tech:TechIcon.TailWind,

    },{
        name:"BootStrp",
        tech:TechIcon.Bootstrap,

    },{
        name:"Sass",
        tech:TechIcon.Sass,

    },{
        name:"TypeScript",
        tech:TechIcon.TypeScript,

    },
    {
        name:"Redux",
        tech:TechIcon.Redux,

    },
    {
        name:"MongoDB",
        tech:TechIcon.MongoDB,

    } ,{
        name:"MySQL",
        tech:TechIcon.SQL,

    },{
        name:"PGSQL",
        tech:TechIcon.PGSQL,

    }
]
const Other=[
    {
        name:"Git&",
        tech:TechIcon.Git,

    },{
        name:"Docker",
        tech:TechIcon.Docker,

    },{
        name:"Postman",
        tech:TechIcon.Postman,

    },{
        name:"VScode",
        tech:TechIcon.VSCode,

    }
]

const social =[
    {
        name:"Github",
        icon:iconsData.Github,
        url:"https://github.com/PallavP-07"
    },{
        name:"Linkedin",
        icon:iconsData.Linkedin,
        url:"https://www.linkedin.com/in/pallav-panda-a0b00718a/"
    },{
        name:"E-mail",
        icon:iconsData.Mail,
        url: "mailto:pallav811@gmail.com"
    }
]
export {projects,tech,Other,social}