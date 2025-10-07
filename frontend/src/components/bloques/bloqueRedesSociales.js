import { Link } from 'react-router-dom';

export default function BloqueRedesSociales({title,img1,link1,txt1,img2,link2,txt2,img3,link3,txt3}) {
    
    const imgRedesSociales = require.context('../../images/componentes/BloqueRedesSociales',true);

    return (
        <>            
            <div className="container-fluid mt-6">
                <div className="container">
                    <div className="row justify-content-center">                    
                        <h1 className="text-center fs-title ff-normal custom-color">{title}</h1>
                    </div>            
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="container">
                    <div className="col-md-12 m-auto text-center">
                        <div className="row justify-content-center">
                            <div className="col-md-4 d-flex flex-column align-items-center text-center">
                                {link1 ? (
                                    <Link to={link1} target="_blank" rel="noopener noreferrer">
                                        <img src={imgRedesSociales(`./${img1}.png`)} className="img-fluid mt-2" width="auto" height="auto" alt={img1} />
                                    </Link>                                    
                                ) : (
                                    <img src={imgRedesSociales(`./${img1}.png`)} className="img-fluid mt-2" width="auto" height="auto" alt={img1} />
                                )}                                
                                {txt1 && (
                                    <div className="mt-3">
                                        <span className="fs-texto ff-normal custom-color">{txt1}</span>
                                    </div>
                                )}
                            </div>				
                            <div className="col-md-4 d-flex flex-column align-items-center text-center">
                                {link2 ? (
                                    <Link to={link2} target="_blank" rel="noopener noreferrer">
                                        <img src={imgRedesSociales(`./${img2}.png`)} className="img-fluid mt-2" width="auto" height="auto" alt={img2} />
                                    </Link>                                    
                                ) : (
                                    <img src={imgRedesSociales(`./${img2}.png`)} className="img-fluid mt-2" width="auto" height="auto" alt={img2} />
                                )}                                
                                {txt2 && (
                                    <div className="mt-3">
                                        <span className="fs-texto ff-normal custom-color">{txt2}</span>
                                    </div>
                                )}
                            </div>				
                            <div className="col-md-4 d-flex flex-column align-items-center text-center">
                                {link3 ? (
                                    <Link to={link3} target="_blank" rel="noopener noreferrer">
                                        <img src={imgRedesSociales(`./${img3}.png`)} className="img-fluid mt-2" width="auto" height="auto" alt={img3} />
                                    </Link>                                    
                                ) : (
                                    <img src={imgRedesSociales(`./${img3}.png`)} className="img-fluid mt-2" width="auto" height="auto" alt={img3} />
                                )}                                
                                {txt3 && (
                                    <div className="mt-3">
                                        <span className="fs-texto ff-normal custom-color">{txt3}</span>
                                    </div>
                                )}
                            </div>				
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}