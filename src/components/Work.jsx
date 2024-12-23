/**
 * @copyright 2024 Jordy VUONG
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: 'images/bash.png',
      title: 'Gestion automatisée des utilisateurs et groupes pour PME',
      tags: ['BASH', 'Developpement'],
      projectLink: 'https://github.com/jordyvuong/gestion_user_grp_pme'
    },
    {
      imgSrc: 'images/vparrot.png',
      title: 'Site vitrine pour garage',
      tags: ['Developpement', 'Web-design', 'Symfony'],
      projectLink: 'https://github.com/jordyvuong/projet_garage'
    },
    {
      imgSrc: 'images/memory-game.jpeg',
      title: 'Memory game',
      tags: ['Developpement', 'API'],
      projectLink: 'https://github.com/jordyvuong/jeu-de-la-memoire'
    },
    {
      imgSrc: 'images/loading.jpg',
      title: 'Projet en cours...',
      tags: ['Web-design', 'Developpement'],
      projectLink: 'https://github.com/jordyvuong'
    },
    {
      imgSrc: 'images/loading.jpg',
      title: 'Projet en cours...',
      tags: ['eCommerce', 'Developpement'],
      projectLink: 'https://github.com/jordyvuong'
    },
    {
      imgSrc: 'images/loading.jpg',
      title: 'Projet en cours...',
      tags: ['Web-design', 'Developpement'],
      projectLink: 'https://github.com/jordyvuong'
    },
  ];


const Work = () => {
  return (
    <section 
    id="work"
    className="section"
    >
        <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
            Les points forts de mon portfolio
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink}, key)=> (
                <ProjectCard 
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    classes="reveal-up"    
                />
            ))}
        </div>

        </div>
    </section>
  )
}

export default Work
