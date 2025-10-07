import { Link } from 'react-router-dom';

export default function BloqueAplicaciones({ subtitle, productos = [] }) {
    const imgBloqueApps = require.context('../../images/componentes/BloqueAplicaciones',true);

    return (
        <>
            <div className="container-fluid mt-5 mt-md-6">
                <div className="container">
                    <div className="col-md-12 m-auto">
                        <div className="row justify-content-center">
                            <div className="col-md-12 m-auto">
                                <h2 className="text-white text-center fs-subtitle ff-bold">{subtitle}</h2>                    
                            </div>				
                        </div>
                    </div>
                    <div className="col-md-12 m-auto text-center mt-5">
                        <div className="row justify-content-center">
                            {productos.map((producto, index) => (
                                <div key={index} className="col-md-4 d-block d-md-flex mb-5 mb-md-0">
                                    <div className="card bg-transparent border-0 text-center d-flex flex-column h-100">
                                        <img src={imgBloqueApps(`./${producto.icono}`)} className="m-auto img-fluid img-w-50" width="160" height="auto" alt={producto.alt} />
                                        <h3 className="text-white mt-4 fs-subtitle ff-bold">{producto.nombre}</h3>
                                        <p className="text-white lh-sm fs-5 fs-texto ff-normal flex-grow-1">{producto.descripcion}</p>
                                        <Link to={producto.link} className="mt-auto text-decoration-none fs-5 ff-normal fs-texto custom-color-blue">Más información</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}