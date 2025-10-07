import {useState, useEffect } from 'react';
import '../../css/utils/btnUp.css';
import up from '../../images/utils/up.png';

export default function BtnUp() {
    const [isVisible, setIsVisible] = useState(false);
    
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsVisible(scrollTop > 500); // Muestra el botón cuando se ha desplazado 100px hacia abajo
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Añade un efecto de desplazamiento suave
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`boton-volver-arriba ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
                <img src={up} id="up" alt="up"/>
            </div>
        </>
    )
}