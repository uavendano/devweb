import '../../css/components/bloqueCentralTipoB.css';
import { Link } from 'react-router-dom';

export default function BloqueCentralTipoB({subtitleB1,titleB1,img1B1,altimg1B1,linkB1,titleB2,img2B2,altimg2B2,linkB2,titleB3,linkB3,titleB4,linkB4}) {
    const imgBloqueTipoB = require.context('../../images/componentes/BloqueCentralTipoB',true);

    return (
        <>
            <div className="container mt-6 text-white">
                <div className="row gy-4 justify-content-center">
                    <div className="col-sm-12 col-md-6 col-xl-5 d-flex order-md-1">
                        <div className="w-100 rounded-5 backgroud-bloqueTipoB">
                            {subtitleB1 && <h2 className="mt-3 fs-4 ff-bold fs-subtitle lg-7">{subtitleB1}</h2>}
                            <h1 className="fs-8 fs-4 ff-bold">{titleB1}</h1>                            
                            <img src={imgBloqueTipoB(`./${img1B1}`)} className="img-fluid mt-auto mb-auto py-5" width="35%" height="auto" alt={altimg1B1} />
                            <Link to={linkB1} className="mb-4 text-decoration-none fs-5 ff-normal fs-texto custom-color-blue">Más información</Link>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-5 d-flex order-md-3">
                        <div className="w-100 rounded-5 backgroud-bloqueTipoB">
                            <h3 className="mt-3 fs-8 ff-bold">{titleB3}</h3>
                            <Link to={linkB3} className="mt-4 mb-4 text-decoration-none fs-5 ff-normal fs-texto custom-color-blue">Más información</Link>                        
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-5 d-flex order-md-2">
                        <div className="w-100 rounded-5 backgroud-bloqueTipoB">
                            <h1 className="fs-8 fs-4 ff-bold">{titleB2}</h1>                            
                            <img src={imgBloqueTipoB(`./${img2B2}`)} className="img-fluid mt-auto mb-auto py-5" width="35%" height="auto" alt={altimg2B2} />
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