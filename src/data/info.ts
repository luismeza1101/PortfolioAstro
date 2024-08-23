interface SkillsCard {
  name: string;
}
interface ProyectCard {
  img: string;
  name: string;
  descripcion: string;
  tecnologias: string[];
  repositorio: string;
  url: string;
}

export const cards_skills: SkillsCard[] = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "JavaScript",
  },
  {
    name: "TypeScript",
  },
  {
    name: "React",
  },
  {
    name: "Tailwind",
  },
  {
    name: "Trello",
  },
  {
    name: "Figma",
  },
  {
    name: "Git",
  },
  {
    name: "Github",
  },
  {
    name: "Astro"
  },
  {
    name: "Next"
  }
];

export const proyects_data: ProyectCard[] = [
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
    img: "lista_notificaciones.png",
    name: "Lista de Notificaciones",
    descripcion:
      "Lista de notificaciones de una red social en la cual se visualizará toda la información sobre interacciones de usuarios con nuestro perfil de usuario, desafio desarrollado de Frontend Mentor.",
    tecnologias: ["HTML", "TypeScript", "React", "Tailwind CSS"],
    repositorio: "https://github.com/luismeza1101/Notifications.git",
    url: "https://amazing-taiyaki-5ce932.netlify.app/",
  },
  {
    img: "clima.png",
    name: "Sitio web del clima",
    descripcion: "Este sitio web esta desarrollado para que puedas saber la temperatura actual del lugar en el que te encuentras, ademas cuenta con 4 espacios vacios adicionales donde puedes tener el clima de la ciudad que quieras",
    tecnologias: ["Next.js", "Tailwind CSS", "Typescript"],
    repositorio: "https://github.com/luismeza1101/Clima.git",
    url: "https://clima-sigma-dusky.vercel.app/"
  }
];
