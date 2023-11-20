import React from 'react'

const Header = () => {
    return (
        <div>
            <div id="div-who" class="text-center">
                <section id="sec" class="py-5 text-center container-lg">
                    <div class="row py-lg-5">
                        <div id="text-quem" class="col-lg-6 col-md-8 mx-auto">
                            <h1 class="text-white wow bounceInDown" data-wow-delay="0.2s">QUEM SOMOS NÓS?</h1>
                        </div>
                    </div>
                </section>
            </div>
            <div class="justify">
                <h4 class="text-center fw-light mt-3 wow bounceInDown" data-wow-delay="0.4s" id="span-who"><i class="me-2" data-feather="corner-down-right"></i>Nosso Objetivo<i class="ms-2" data-feather="corner-down-left"></i></h4>
                <div class="text-center text-white">
                    <p class="m-2 mt-4">Somos <span id="span-who">Pedro Moraes Michalski e Carla Christina de Oliveira,</span> estudantes do 3° ano do curso técnico em Informática integrado ao ensino médio do Instituto Federal do Paraná (IFPR) – Campus Cascavel. O desenvolvimento desse site informativo sobre voleibol é parte integrante do trabalho de conclusão do referido curso. </p>
                    <p class="m-2">Conforme destacado pela ministra Ana Moser, “o esporte é um fenômeno muito amplo, e é muito importante abrir canais de conversa para pensar nele como um todo no País. Queremos a contribuição de cada um para que possamos, juntos, construir um novo cenário para o esporte amador e profissional” (MINISTÉRIO DO ESPORTE, 2023). Nesse sentido, nosso site tem como objetivo auxiliar os iniciantes a conhecerem e entenderem melhor sobre o voleibol, orientá-los nessa pratica, concentrar informações e noticias em uma só plataforma, além de melhorar e também expandir as divulgações relacionadas a este esporte. </p>
                </div>
            </div>
        </div >
    );
}

export default Header;