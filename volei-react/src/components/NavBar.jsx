import React from 'react'

const NavBar = () => {
    return (
        <div>
            <div class="barra container-fluid d-flex">
                <img class="img-navbar d-inline-block" src="src/assets/img/Volleyball-logo.png" alt="" />
                <h3 class="text-white fw-light ms-3">WebVolei</h3>
                <div class="login container-fluid">
                    <li class="nav-item dropdown d-flex align-items-center">
                        <a class="nav-item nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            -- Usuário --
                        </a>
                        <ul id="elementsUser" class="dropdown-menu text-white fw-light" aria-labelledby="navbarDropdown">
                            <li><a id="Login" class="ms-2" href="">Login</a></li>
                            <li><a id="Registrar" class="ms-2" href="">Registrar-se</a></li>
                        </ul>
                    </li>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light p-0">
                <div class="barra1 container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="linha container-fluid navbar-nav me-auto my-lg-0 navbar-nav-scroll" >
                            <li class="nav-item">
                                <a class="nav-item nav-link text-white" id="texto-teste" href="">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-item nav-link" id="texto-teste" href="">História</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-item nav-link dropdown-toggle me-1" id="texto-teste" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Fundamentos
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item text-white" href="">Recepção</a></li>
                                    <li><a class="dropdown-item text-white" href="">Saque</a></li>
                                    <li><a class="dropdown-item text-white" href="">Levantamento</a></li>
                                    <li><a class="dropdown-item text-white" href="">Bloqueio</a></li>
                                    <li><a class="dropdown-item text-white" href="">Ataque</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-item nav-link" href="" id="texto-teste">Regras</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-item nav-link" href="" id="texto-teste">Curiosidades</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-item nav-link" href="" id="texto-teste">Referências</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-item nav-link" id="texto-teste" href="">Chat da Comunidade</a>
                            </li>
                            <div id="form" class="container-xxl justify-content-end">
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default NavBar;