/**
 * @copyright 2024 Jordy VUONG
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { gsap } from "gsap";
import _ScrollTrigger, { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);




/**
 * Components
 */
import ReviewCard from "./ReviewCard";

const reviews = [
    {
      content: '',
      name: 'Christine Vaillant',
      imgSrc: '/images/people-1.jpg',
      company: 'Learn Media'
    },
    {
      content: 'En tant qu’ancienne collègue de Jordy, je vous assure qu’il est déterminé et présente une attitude positive et affirmée au travail. C’est un réel avantage pour votre entreprise !',
      name: 'Manon Leclere',
      imgSrc: '/images/leclere-manon.png',
      company: 'Fnac'
    },
    {
      content: '[...] Jordy est un étudiant plein de potentiel et surtout il a une grande qualité : il est curieux. La curiosité est une très bonne "maladie" ; car cela nous amène à aller en dehors de nos domaines de prédilection. Et c\'est exactement ce qu\'a fait Jordy, il est allé plus loin tout seul en s\'auto-formant. Une très belle récompense pour moi [•••]. Merci à toi Jordy d\'être un étudiant modèle et surtout, et j\'en suis sûre, un professionnel autodidacte qui ira loin et surtout qui s\'en donnera les moyens.',
      name: 'Christine Vaillant',
      imgSrc: '/images/vaillant-christine.png',
      company: 'LearnMedia'
    },
    {
      content: 'Ravi d\'avoir accompagné Jordy lors du programme de spécialisations en Marketing Digital, E-commerce et Entrepreneuriat que j\'ai animé au CFA Descartes. Il sait donner un cap commun, favoriser la cohésion d’équipe, booster et optimiser tout projet innovant tout en étant autonome, inclusif, créatif et force de proposition.Son professionnalisme, sa rigueur, son esprit critique et son humour font de Jordy un learning et business booster pour tout projet innovant.',
      name: 'Rotana Ty',
      imgSrc: '/images/ty-rotana.png',
      company: 'Learner Experience Design & Hosting'
    },
    {
      content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
      name: 'Ava Thompson',
      imgSrc: '/images/people-5.jpg',
      company: 'TechMosaic'
    },
    {
      content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
      name: 'Jonathan',
      imgSrc: '/images/people-6.jpg',
      company: 'Skyline Digital'
    }
  ];


const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true
      },
      x: '-1000'
    })
  });

  return (
    <section 
    id="reviews"    
    className="section overflow-hidden"
    >
    <div className="container">

    <h2 className="headline-2 mb-8 reveal-up">
        Ce que disent mes recommandations
    </h2>

    <div className="scrub-slide flex items-stretch gap-3 w-fit">
        {reviews.map(({content, name, imgSrc, company}, key)=> (
            <ReviewCard 
                key={key}
                name={name}
                imgSrc={imgSrc}
                company={company}
                content={content}
            />
        ))}
    </div>

    </div>
    </section>
  )
}

export default Review
