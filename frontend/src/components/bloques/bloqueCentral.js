import '../../css/components/bloqueCentral.css';
import { Link } from 'react-router-dom';

export default function BloqueCentral({titleB1,img1B1,altimg1B1,img2B1,altimg2B1,img3B1,altimg3B1,linkB1,subtitle,titleB2,img4B2,altimg4B2,linkB2,titleB3,linkB3,titleB4,linkB4}) {
    
    const imgBloque = require.context('../../images/componentes/BloqueCentral',true);

    return (
        <>
            <div className="container mt-6 text-white">
                <div className="row gy-4 justify-content-center">
                    <div className="col-sm-12 col-md-6 col-xl-5 d-flex order-md-1">
                        <div className="w-100 rounded-5 backgroud-bloque">
                            <h3 className="mt-3 fs-8 ff-bold">{titleB1}</h3>
                            <img src={imgBloque(`./${img1B1}`)} className="mt-3 img-fluid img-w-50" width="200" height="180" alt={altimg1B1} />
                            <div className="d-flex justify-content-center gap-5 mb-4">
                                <img src={imgBloque(`./${img2B1}`)} className="mt-3 img-fluid img-w-40" width="200px" height="auto" alt={altimg2B1} />
                                <img src={imgBloque(`./${img3B1}`)} className="mt-3 img-fluid img-w-40" width="200px" height="auto" alt={altimg3B1} />
                            </div>
                            <Link to={linkB1} className="mb-4 text-decoration-none fs-5 ff-normal fs-texto custom-color-blue">Más información</Link>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-5 d-flex order-md-3">
                        <div className="w-100 rounded-5 backgroud-bloque">
                            <h3 className="mt-3 fs-8 ff-bold">{titleB3}</h3>
                            <Link to={linkB3} className="mt-4 mb-4 text-decoration-none fs-5 ff-normal fs-texto custom-color-blue">Más información</Link>                        
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-5 d-flex order-md-2">
                        <div className="w-100 rounded-5 backgroud-bloque">
                            {subtitle && <h2 className="mb-0 fs-4 ff-bold fs-subtitle lg-7">{subtitle}</h2>}
                            <h3 className="mt-3 fs-8 fs-4 ff-bold">{titleB2}</h3>                            
                            <img src={imgBloque(`./${img4B2}`)} className="mt-3 img-fluid mt-auto mb-auto" width="50%" height="auto" alt={altimg4B2} />
                            <Link to={linkB2} className="mb-4 text-decoration-none fs-5 ff-normal fs-texto custom-color-blue">Más información</Link>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-5 d-flex order-md-4">
                        <div className="w-100 rounded-5 backgroud-bloque">
                            <h3 className="mt-3 fs-8 fs-4 ff-bold">{titleB4}</h3>
                            <Link to={linkB4} className="mt-4 mb-4 text-decoration-none fs-5 ff-normal fs-texto custom-color-blue">Más información</Link>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}