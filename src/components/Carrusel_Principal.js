import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carrusel_Principal() {
    const imageStyle = {
        width: '250px',
        height: '300px',
        margin: '0 auto', // Centra horizontalmente
        display: 'flex',
        alignItems: 'center', // Centra verticalmente
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    {/* Carrusel en la parte izquierda */}
                    <Carousel>
                        <Carousel.Item>
                            <img
                                src="/images/abani1.jpeg"
                                alt="Producto 1"
                                style={imageStyle}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src="/images/abani2.webp"
                                alt="Producto 1"
                                style={imageStyle}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src="/images/abani3.webp"
                                alt="Producto 1"
                                style={imageStyle}
                            />
                        </Carousel.Item>
                        {/* Agrega más elementos al carrusel según sea necesario */}
                    </Carousel>
                    
                </div>
                <div className="col-md-4">
                    {/* Carrusel en el centro */}
                    <Carousel>
                        <Carousel.Item>
                            <img
                                src="/images/cafete1.jpg"
                                alt="Producto 2"
                                style={imageStyle}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src="/images/cafete2.jpg"
                                alt="Producto 2"
                                style={imageStyle}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src="/images/cafete3.webp"
                                alt="Producto 2"
                                style={imageStyle}
                            />
                        </Carousel.Item>
                        {/* Agrega más elementos al carrusel según sea necesario */}
                    </Carousel>
                </div>
                <div className="col-md-4">
                    {/* Carrusel en la parte derecha */}
                    <Carousel>
                        <Carousel.Item>
                            <img
                                src="/images/laHP1.jpg"
                                alt="Producto 3"
                                style={imageStyle}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src="/images/laHP2.jpg"
                                alt="Producto 3"
                                style={imageStyle}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src="/images/laHP3.jpeg"
                                alt="Producto 3"
                                style={imageStyle}
                            />
                        </Carousel.Item>
                        {/* Agrega más elementos al carrusel según sea necesario */}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Carrusel_Principal;
