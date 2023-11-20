import React from 'react'

const Rodape = () => {
    return (
        <div>
            <footer class="container-fluid">
                <div class="justify-content-center text-white fw-light d-flex">
                    <div class="text-center">
                        <div class="text-center d-flex justify-content-center">
                            <div class="me-3 mt-2"><a id="contato" href="https://github.com/IceyPiter"><i data-feather="github"></i> GitHub</a></div>
                            <div class="me-3 mt-2"><a id="contato" href="https://twitter.com/MoraesMichalski?t=QQjbt5rUnsjlaBzuRChZ4g&s=09"><i data-feather="twitter"></i> Twitter</a></div>
                            <div class="me-3 mt-2"><a id="contato" href="https://instagram.com/dpedromichalski?utm_source=qr&iqshid=MzNINGNkZWQ4Mg%3D%3D"><i data-feather="instagram"></i> Instagram</a></div>
                        </div>
                        <h5 id="textFooter">Developed By Piter &#169 2023</h5>
                    </div>
                    <h3 class="traco fw-bold me-3">-</h3>
                    <div class="text-center">
                        <div class="text-center d-flex justify-content-center">
                            <div class="me-3 mt-2"><a id="contato" href="https://github.com/Linkadah"><i data-feather="github"></i> GitHub</a></div>
                            <div id="contato" class="me-3 mt-2"><a id="contato" href="https://www.twitch.tv/linkadah_?sr=a"><i data-feather="twitch"></i> Twitch</a></div>
                            <div class="me-3 mt-2"><a id="contato" href="https://instagram.com/_krlachristinacomh?igshid=MzRlODBiNWFlZA=="><i data-feather="instagram"></i> Instagram</a></div>
                        </div>
                        <h5 id="textFooter">Developed By Carla &#169 2023</h5>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Rodape;