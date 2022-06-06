import React from 'react';
import image_introduction from "../image/introduction.jpg";
import Container from '@mui/material/Container';
import '../css/index.css';

const IntroductionSite = () => {
    return (
        <div>
            <div>
                <img 
                    src={image_introduction} 
                    style={{width:'100%', height:'100%'}} 
                    alt='Você esta pronto para controlar seu dados'
                    />
            </div>
            <div className='introduction-body'>
                <Container>
                    <h1 className='text-introduction'>Bem-vindo a Nexci!</h1>
                    <p className='text-introduction-description'>Nascemos com o propósito de dar aos brasileiros mais poder e controle sobre seus dados.</p>
                    <p className='text-introduction-description'>E ainda ganhar recompensas por isso.</p>
                </Container> 
            </div>
        </div>
    )
};


export default IntroductionSite;