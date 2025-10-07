export default function BloquePersonajes({ subtitle, personajes = [] }) {
    const imgBloquePersonajes = require.context('../../images/componentes/BloquePersonajes',true);

    return (
        <>
            <div className="container-fluid mt-6">
                <div className="container">
                    <div className="col-md-12 m-auto">
                        <div className="row justify-content-center">
                            <div className="col-md-12 m-auto">
                                <h2 className="text-center fs-subtitle ff-bold custom-color-orange">{subtitle}</h2>                    
                            </div>				
                        </div>
                    </div>
                    <div className="col-md-12 m-auto text-center mt-5">
                        <div className="row justify-content-center">
                            {personajes.map((personaje, index) => (
                                <div key={index} className="col-md-4 d-flex">
                                    <div className="card bg-transparent border-0 text-center d-flex flex-column h-100">
                                        <img src={imgBloquePersonajes(`./${personaje.icono}`)} className="mx-auto img-fluid img-w-md-40" width="300" height="300" alt={personaje.alt} />                                        
                                        <p className="mt-4 mb-0 fs-5 custom-color fs-texto ff-normal">{personaje.descripcion}</p>
                                        <h3 className="mb-3 custom-color-orange fs-subtitle ff-normal">{personaje.nombre}</h3>
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