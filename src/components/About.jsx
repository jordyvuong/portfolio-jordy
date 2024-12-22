/**
 * @copyright 2024 Jordy VUONG
 * @license Apache-2.0
 */


const aboutItems = [
    {
      label: 'Projet réalisé',
      number: 9
    },
    {
      label: 'Années d\'expérience',
      number: 1
    }
  ];


const About = () => {
  return (
    <section
        id="about"
        className="section"
    >
        <div className="container">

            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                Bienvenue ! Je suis Jordy, développeur web passionné par la création de sites à la fois esthétiques et ultra-fonctionnels. Alliant créativité et expertise technique, je transforme votre vision en une œuvre digitale qui se distingue autant par son design que par ses performances.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                {
                    aboutItems.map(({label, number}, key) => (
                        <div key={key}>
                            <div className="flex items-center md:mb-2">
                                <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                            </div>

                            <p className="text-sm text-zinc-400">{label}</p>
                        </div>
                    ))
                }

                <img 
                src="/images/logo.svg" 
                alt="Logo"
                width={30}
                height={30} 
                className="ml-auto md:w-[40px] md:h-[40px]" 
                />
                </div>
            </div>

        </div>
    </section>
  )
}

export default About