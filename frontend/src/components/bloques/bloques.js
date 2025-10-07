import { Link } from 'react-router-dom';
import "../../css/components/bloques.css";

export default function Bloques({titleB1,linkB1,titleB2,linkB2,titleB3,linkB3,titleB4,linkB4}) {

    return (    
        <>
            <div className="container mt-6 text-white">
                <div className="row gy-4 justify-content-center">
                    <div className="col-sm-12 col-md-6 col-xl-5 d-flex order-md-1">
                        <div className="w-100 rounded-5 bloque-background">
                            <h3 className="m-auto mt-4 fs-8 ff-bold">{titleB1}</h3>
                            <Link to={linkB1} className="py-4 text-decoration-none fs-5 ff-normal fs-texto custom-color-blue">Más información</Link>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-5 d-flex order-md-2">
                        <div className="w-100 rounded-5 bloque-background">
                            <h3 className="m-auto mt-4 fs-8 ff-bold">{titleB2}</h3>
                            <Link to={linkB2} className="py-4 text-decoration-none fs-5 ff-normal fs-texto custom-color-blue">Más información</Link>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-5 d-flex order-md-3">
                        <div className="bloque-b w-100 rounded-5 bloque-background">
                            <h3 className="m-auto mt-4 fs-8 ff-bold">{titleB3}</h3>
                            <Link to={linkB3} className="py-4 text-decoration-none fs-5 ff-normal fs-texto custom-color-blue">Más información</Link>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-5 d-flex order-md-4">
                        <div className="bloque-b w-100 rounded-5 bloque-background">
                            <h3 className="m-auto mt-4 fs-8 ff-bold">{titleB4}</h3>
                            <Link to={linkB4} className="py-4 text-decoration-none fs-5 ff-normal fs-texto custom-color-blue">Más información</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}