import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import '../css/index.css';

import view_your_date from "../image/view-your-data.png";
import voluntario from "../image/voluntario.png";
import controle from "../image/controle.png";
import beneficios from "../image/beneficios.png";
import step_1 from "../image/step_1.png";
import step_2 from "../image/step_2.png";
import step_3 from "../image/step_3.png";

const DescriptionNexci = () => {
    return (
        <div>
            <div>
                <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing={2}
                >
                    <Grid item xs={12} sm={6} md={6}>
                        <p className='text-introduction-description'> Você acha correto que empresas lucrem com seus dados pessoais e você não ganha nada em troca? </p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <img src={view_your_date} style={{width:'100%', height:'100%'}}  alt='Conferindo seus dados'/>
                    </Grid>
                </Grid>
            </div>
            <div className='introduction-body'>
                <Container>
                    <h2 className='pillars-h2'>Pilares que guiam o nosso trabalho </h2>
                </Container>
                <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing={6}
                >
                    <Grid item xs={12} sm={4} md={4}>
                        <div className='pillars-item'>
                            <h3 className='pillars-text'>Ganhe Benefícios</h3>
                            <img 
                                src={beneficios} 
                                style={{width:'90%', height:'90%', marginTop:'10px', marginBottom:'10px'}} 
                                alt='Conferindo seus dados'/>
                            <Button variant="contained" style={{background:'red', color:'white', borderRadius:0}}>
                                SAIBA MAIS
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className='pillars-item'>
                            <h3 className='pillars-text'>Você no Controle </h3>
                            <img 
                                src={controle} 
                                style={{width:'90%', height:'90%', marginTop:'10px', marginBottom:'10px'}} 
                                alt='Conferindo seus dados'/>
                            <Button variant="contained" style={{background:'red', color:'white', borderRadius:0}}>
                                SAIBA MAIS
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} >
                        <div className='pillars-item'>
                            <h3 className='pillars-text'>Dados com causa</h3>
                            <img 
                                src={voluntario} 
                                style={{width:'90%', height:'90%', marginTop:'10px', marginBottom:'10px'}} 
                                alt='Conferindo seus dados'/>
                            <Button variant="contained" style={{background:'red', color:'white', borderRadius:0}}>
                                SAIBA MAIS
                            </Button>
                        </div>
                    </Grid>
                </Grid>
                <Container>
                    <h2 className='pillars-h2'>Meus dados, minhas regras </h2>
                </Container>
                <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing={6}
                >
                    <Grid item xs={12} sm={5} md={5}>
                        <div className='pillars-item'>
                            <img 
                                src={beneficios} 
                                style={{width:'90%', height:'90%', marginTop:'10px', marginBottom:'10px'}} 
                                alt='Conferindo seus dados'/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={7} md={7}>
                        <div className='pillars-text-description'>
                            <p>
                            Descontos em postos de combustível 
                            </p>
                            <p>
                            Descontos para compra de alimentos e bebidas
                            </p>
                            <p>
                            Quer desconto para pagar academia? Nós temos.
                            </p>
                            <p>
                            Quer ganhar cashback nas compras de produtos? Também oferecemos.
                            </p>
                        </div>
                    </Grid>
                </Grid>
                <Container>
                    <h2 className='pillars-h2'>Ganhe recompensas </h2>
                </Container>
                <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing={6}
                >
                    <Grid item xs={12} sm={5} md={5}>
                        <div className='pillars-item'>
                            <img 
                                src={controle} 
                                style={{width:'90%', height:'90%', marginTop:'10px', marginBottom:'10px'}} 
                                alt='Conferindo seus dados'/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={7} md={7}>
                        <div className='pillars-text-description'>
                            <p>
                            Transparência e Credibilidade:
                            </p>
                            <p>
                            <strong>Somente</strong> compartilharemos seus dados com as <strong>empresas de sua confiança. </strong>
                            </p>
                        </div>
                    </Grid>
                </Grid>
                <Container>
                    <h2 className='pillars-h2'>Dados com Causa </h2>
                </Container>
                <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing={6}
                >
                    <Grid item xs={12} sm={5} md={5}>
                        <div className='pillars-item'>
                            <img 
                                src={voluntario} 
                                style={{width:'90%', height:'90%', marginTop:'10px', marginBottom:'10px'}} 
                                alt='Conferindo seus dados'/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={7} md={7}>
                        <div className='pillars-text-description'>
                            <p>
                            Convertemos parte do nosso faturamento com as causas que você indicar.
                            </p>
                        </div>
                    </Grid>
                </Grid>
                <Container>
                    <p className='pillars-h2'>Curtiu?😀 Cadastrar é rapidinho</p>
                </Container>
                <Container>
                    <h2 className='pillars-h2'>COMO FUNCIONA</h2>
                </Container>
                <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" 
                    spacing={6}
                >
                    <Grid item xs={12} sm={4} md={4}>
                        <div className='pillars-item'>
                            <img 
                                src={step_1} 
                                style={{width:'90%', height:'90%', marginTop:'10px', marginBottom:'10px'}} 
                                alt='Conferindo seus dados'/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className='pillars-item'>
                            <img 
                                src={step_2} 
                                style={{width:'90%', height:'90%', marginTop:'10px', marginBottom:'10px'}} 
                                alt='Conferindo seus dados'/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} >
                        <div className='pillars-item'>
                            <img 
                                src={step_3} 
                                style={{width:'90%', height:'90%', marginTop:'10px', marginBottom:'10px'}} 
                                alt='Conferindo seus dados'/>
                        </div>
                    </Grid>
                </Grid>
                {/* <Container>
                    <h2 className='pillars-h2'>FAQ </h2>
                </Container>
                <Container>
                    <h2 className='pillars-h2'>NEXCI NA MIDIA </h2>
                </Container>
                <Container>
                    <h2 className='pillars-h2'>Blog</h2>
                </Container> */}
                
            </div>
        </div>
    )
};


export default DescriptionNexci;