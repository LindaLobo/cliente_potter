import React from 'react'

const Eventos = () => {
    return (
        <div id="carouselExample" class="carousel slide mt-5">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <h3 className='fs-1 text-center fw-semibold text-primary-emphasis mb-3'>Festival en la Florida</h3>
                    <a href='https://finde.latercera.com/cultura-pop/potterfest-2024-la-florida/#' target="_blank" >
                        <img src="https://finde.latercera.com/wp-content/uploads/2023/05/Potterfest-2-ok.jpg" class="d-block w-100" alt="muñeco"
                        /> </a>
                </div>
                <div class="carousel-item">
                    <h3 className='fs-1 text-center fw-semibold text-primary-emphasis mb-3'>Baile de Invierno en Santiago</h3>
                    <a href='https://harrypotteryuleballcelebration.com/santiago-de-chile/' target="_blank">
                        <img src="https://harrypotteryuleballcelebration.com/assets/img/info_sydney-img-01.098d32c7.jpg.webp" class="d-block w-100" alt="magos" />
                    </a>
                </div>
                <div class="carousel-item">
                    <h3 className='fs-1 text-center fw-semibold text-primary-emphasis mb-3'>Ciclo del Cine en Providencia</h3>
                    <a href='https://providencia.cl/provi/explora/actividades/familia/ciclo-cine-harry-potter-en-providencia' target="_blank">
                        <img src="https://providencia.cl/provi/site/artic/20231227/imag/foto_0000049520231227141703/RRSS_Harry_Potter_RRSS_copia_IG_1_-_Carola_Nunez_1.png" class="d-block w-100" alt="cartelera" />
                    </a>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Eventos
