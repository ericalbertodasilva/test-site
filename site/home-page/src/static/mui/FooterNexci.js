import React from 'react';
import '../css/index.css';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';


const FooterNexci = () => {
    return (
        <div>
            <Grid 
                container
                direction="row"
                justifyContent="space-around"
                spacing={6} 
                
            >
                
                <Grid item xs={3} sm={3} md={3} className='footer-text'>
                    <p>© 2022 NEXCI LTDA</p>
                    <p><Link href="#/politica_de_privacidade">POLÍTICA DE PRIVACIDADE</Link></p>
                    <p><Link href="#/termo_e_condicoes">TERMO E CONDIÇÕES</Link></p>
                    
                </Grid>
                <Grid item xs={3} sm={3} md={3} className='footer-text'>
                    <p>FALE CONOSCO:</p> 
                    <p>E-mail: <Link href="mailto:contato@nexci.com.br">contato@nexci.com.br</Link></p>
                    <p>Telefone e WhatsApp: <Link href="https://api.whatsapp.com/send?phone=5513991218448">13 99121-8448</Link></p>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    
                </Grid>
            </Grid>
        </div>
        )
    };
    

export default FooterNexci;