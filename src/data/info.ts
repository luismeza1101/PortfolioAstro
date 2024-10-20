interface SkillsCard {
  skill: string;
  color: string;
}

interface ProyectCard {
  img: string;
  name: string;
  descripcion: string;
  tecnologias: string[];
  repositorio: string;
  url: string;
}

export const skills: SkillsCard[] = [
  { skill: "HTML", color: "#f16a30" },
  { skill: "CSS", color: "#306af1" },
  { skill: "JavaScript", color: "#f7e025" },
  { skill: "TypeScript", color: "#377cc8" },
  { skill: "React", color: "#1ba1cc" },
  { skill: "Tailwind", color: "#36b6f2" },
  { skill: "Trello", color: "#087ec5" },
  { skill: "Git", color: "#f05639" },
  { skill: "Github", color: "#000000" },
  { skill: "Astro", color: "#f16a30" },
  { skill: "Next", color: "#f16a30" },
  { skill: "Python", color: "#f16a30" },
  { skill: "FastAPI", color: "#f16a30" },
];

export const proyects_data: ProyectCard[] = [
  {
    img: "Pulse.png",
    name: "PULSE",
    descripcion:
      "Red social basica donde puedes conectar con mas personas y conversar sobre diversos temas, podrás crear posts y comentar los posts de los demás",
    tecnologias: ["Next.js", "Tailwind CSS", "Typescript", "Python", "FastAPI"],
    repositorio: "https://github.com/luismeza1101/Pulse.git",
    url: "https://pulse-front-5ccjdok4w-luismeza1101s-projects.vercel.app",
  },
  {
    img: "clima.png",
    name: "Sitio web del clima",
    descripcion:
      "Este sitio web esta desarrollado para que puedas saber la temperatura actual del lugar en el que te encuentras, ademas cuenta con 4 espacios vacios adicionales donde puedes tener el clima de la ciudad que quieras",
    tecnologias: ["Next.js", "Tailwind CSS", "Typescript"],
    repositorio: "https://github.com/luismeza1101/Clima.git",
    url: "https://clima-sigma-dusky.vercel.app/",
  },
  {
    img: "certus_capacitacion.png",
    name: "Plataforma de Gestion de Capacitacion Docente",
    descripcion:
      "Esta plataforma está diseñado para solucionar el problema que tienen algunas intituciones educativas, en el proceso de capacitar a los docentes en planilla, con el objetivo de que brinden una mejor enseñanza a todos los alumnos de la intitución.",
    tecnologias: ["HTML", "CSS", "TypeScript", "React"],
    repositorio: "https://github.com/luismeza1101/FormativasFinal.git",
    url: "https://main--mellifluous-churros-070abd.netlify.app/",
  },
  {
    img: "sneakerShop.png",
    name: "Tienda virtual de zapatillas",
    descripcion:
      "Desafio dificil recopilado del sitio web Frontend Mentor, que simula la seccion de un e-commerce de una tienda de zapatillas en linea",
    tecnologias: ["Next.js", "Tailwind CSS", "Typescript"],
    repositorio: "https://github.com/luismeza1101/SneakerStore.git",
    url: "https://sneaker-store-bice.vercel.app/",
  },
];
