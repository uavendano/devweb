import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Verifica si la URL contiene un ancla (#)
    if (location.hash) {
      return;
    }

    // Si no hay ancla, sube automáticamente sin animación
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);

  return null;
};

export default ScrollToTop;