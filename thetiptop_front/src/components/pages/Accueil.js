import React from 'react'
import Section from '../layout/Section'
import bg1 from '../../assets/three-cups-of-tea-steeping.png';
import bg2 from '../../assets/top-view-of-a-tea-towel-and-container-holding-grain.png';
import Header from '../layout/Header';

const Accueil = () => {
    return (
        <>
            <Header />
            <Section backgroundImagePath={bg1}>
                <h1>Présentation du jeu concours</h1>
                <h4 className="fw-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                    repellendus inventore mollitia incidunt nobis ratione dolores quaerat
                    ab accusantium necessitatibus nihil quam beatae totam distinctio
                    doloribus excepturi deleniti, fugit odio!
                </h4>
            </Section><Section backgroundImagePath={bg2}>
                <h1>Présentation de Thé Tip Top</h1>
                <h4 className="fw-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                    deleniti iste cumque suscipit ab recusandae cupiditate delectus
                    nesciunt quo dolorem totam vitae explicabo repudiandae repellendus
                    perferendis, sed temporibus. Mollitia, vel.
                </h4>
            </Section>
        </>
    )
}

export default Accueil