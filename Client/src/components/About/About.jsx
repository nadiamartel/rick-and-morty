import s from "./About.module.css"
import img from "../img/profile_.jpeg"

const About = () => {
    return (
        <div className={s.container}>

            {/* <h1 className={s.title}>Mi Página de Acerca de Mí</h1> */}

            <main className={s.mainContent}>
                <section className={s.section}>
                    <h2 className={s.sectionTitle}>Sobre Mí</h2>
                    <img className={s.image} src={img} alt="foto" />
                    <p className={s.sectionText}>Hola, soy Nadia. Soy bla. Disfruto bla. Me apasiona bla.</p>
                    <p className={s.sectionText}>Estoy emocionado/a por compartir más sobre mí y mis intereses contigo.</p>
                </section>

                <section className={s.section}>
                    <h2>Mis Habilidades</h2>
                    <ul>
                        <li className={s.listItem}>Habilidad 1</li>
                        <li className={s.listItem}>Habilidad 2</li>
                        <li className={s.listItem}>Habilidad 3</li>
                    </ul>
                </section>

                <section className={s.section}>
                    <h2 className={s.sectionTitle}>Mi Experiencia</h2>
                    <p className={s.sectionText}>Tengo experiencia en bla. He trabajado en bla.</p>
                </section>
            </main>

            <footer className={s.footer}>
                <p>Contacto: mail o redes</p>
            </footer>

        </div >
    )
}

export default About;