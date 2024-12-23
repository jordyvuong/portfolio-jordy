/**
 * @copyright 2024 Jordy VUONG
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItem = [
    {
      imgSrc: 'images/html5.svg',
      label: 'HTML5',
      desc: 'Structure'
    },
    {
      imgSrc: 'images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: 'images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: 'images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: 'images/symfony_dynamic_02.svg',
      label: 'Symfony',
      desc: 'PHP Framework'
    },
    {
      imgSrc: 'images/mysql.svg',
      label: 'MySQL',
      desc: 'Database'
    },
    {
      imgSrc: 'images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: 'images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];


const Skill = () => {
  return (
    <section className="section">
        <div className="container">

            <h2 className="headline-2 reveal-up">
                Outils essentiels que j'utilise
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                Découvrez les outils et technologies que j'utilise pour créer des sites web et des applications exceptionnels et performants.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc }, key)=> (
                        <SkillCard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                        />
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default Skill
