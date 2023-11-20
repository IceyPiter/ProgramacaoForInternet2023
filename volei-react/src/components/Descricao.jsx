import React from 'react'

const Descricao = () => {
    return (
        <div>
            <div class="justify-content-center mt-5 mb-5">
                <h2 id="span-who" class="iniNoticias text-center fw-light wow bounceInDown" data-wow-delay="0.3s"><i class="me-2" data-feather="globe"></i>Notícias<i class="ms-2" data-feather="globe"></i></h2>
            </div>
            <div id="carousel-1" class="d-flex wow slideInLeft" data-wow-delay="0.4s">
                <div id="carouselExampleDark" class="carousel carousel-dark slide mb-4" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner container-fluid">
                        <div class="carousel-item active" id="carousel-border" data-bs-interval="2000">
                            <img src="src/assets/img/noticia7.jpg" class="d-block w-100" id="car-img" data-bs-interval="500" alt="..."/>
                                <div class="carousel-caption d-none d-md-block text-white ms-1" id="carousel-text">
                                    <h4 id="span-who">DEFENDENDO O TÍTULO</h4>
                                    <p class="ms-2 me-2">Convocados para defender o Brasil na Copa Pan-Americana, Thierry e Lukas Bergmann disputam o CBI sub-21 pelo Sesi-SP.</p>
                                </div>
                        </div>
                        <div class="carousel-item" id="carousel-border" data-bs-interval="2000">
                            <img src="src/assets/img/noticia8.jpg" class="d-block w-100" id="car-img" data-bs-interval="500" alt="..."/>
                                <div class="carousel-caption d-none d-md-block text-white" id="carousel-text">
                                    <h4 id="span-who">AS MAIS JOVENS</h4>
                                    <p class="ms-2 me-2">Aos 14 anos, gêmeas baianas são as caçulas da Copa Regional Nordeste 2, que reúne 28 duplas em Recife.</p>
                                </div>
                        </div>
                        <div class="carousel-item" id="carousel-border" data-bs-interval="2000">
                            <img src="src/assets/img/noticia9.jpg" class="d-block w-100" id="car-img" data-bs-interval="500" alt="..."/>
                                <div class="carousel-caption d-none d-md-block text-white" id="carousel-text">
                                    <h4 id="span-who">SEGUNDO CONSECUTIVO</h4>
                                    <p class="ms-2 me-2">Sesi-SP conquista o bicampeonato do CBI masculino sub-21.</p>
                                </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next text-white" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div id="not-gen">
                <div id="kb" class="d-flex">
                    <div class="justify2 ms-5 me-3 wow slideInLeft" data-wow-delay="0.6s">
                        <h4 class="text-center mt-3" id="span-justify">Vôlei é o esporte que mais desperta algum interesse entre brasileiros conectados</h4>
                        <div class="text-center">
                            <p class="m-4" id="text-not-gen">Segundo dados da onda mais recente do Sponsorlink, maior pesquisa especializada em esportes do mundo do IBOPE Repucom, 87% dos brasileiros conectados com 18 anos ou mais se declaram interessados (muito interessados, interessados ou pouco interessados) por Vôlei,</p>
                            <p class="m-4" id="text-not-gen">o que representa 96 milhões de indivíduos. Em 2013, quando iniciamos a pesquisa, o número de brasileiros conectados que se declaram fãs de vôlei era de 45 milhões,</p>
                            <p class="m-4" id="text-not-gen">"ou seja, o volume de internautas brasileiros interessados pelo esporte dobrou na última década, um crescimento de 113%</p>
                            <p class="m-4 mb-3" id="text-not-gen">A pesquisa também revela que o Vôlei é um dos esportes mais praticados do País, atingindo 19% dos internautas brasileiros. Índice muito próximo a Corrida de Rua (21%), Andar de Bicicleta (22%) e Jogar Futebol (22%), que lideram a lista das atividades esportivas mais praticadas</p>
                        </div>
                    </div>
                    <div class="justify2 me-5 wow slideInRight" data-wow-delay="0.6s">
                        <h4 class="text-center mt-3" id="span-justify">Federação Internacional de Vôlei lança projeto para impulsionar o crescimento global do vôlei</h4>
                        <div class="text-center">
                            <p class="m-4" id="text-not-gen">O voleibol brasileiro ampliou o império de conquistas pelo mundo em 2010. A seleção masculina conquistou o tricampeonato mundial, na Itália. Com esta conquista, o Brasil tornou-se o maior vencedor da história da competição,</p>
                            <p class="m-4" id="text-not-gen">ultrapassando a Itália, que acumulava oito conquistas. A seleção feminina, comandada por José Roberto Guimarães, terminou o ano com duas medalhas de prata, uma no Grand Prix outra no Campeonato Mundial.</p>
                            <p class="m-4" id="text-not-gen">As seleções infanto-juvenil e juvenil femininas e a juvenil masculina conquistaram os Campeonatos Sul-Americanos. A equipe infanto-juvenil masculina ficou com a medalha de prata.</p>
                            <p class="m-4 mb-3" id="text-not-gen">Ao todo, o voleibol brasileiro disputou 41 competições e subiu ao pódio 44 vezes, conquistando 15 medalhas de ouro, 14 de prata e 15 de bronze.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Descricao;