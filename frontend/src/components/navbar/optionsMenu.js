import { useState } from 'react';
import '../../css/navbar/optionsMenu.css';
import { HashLink as Ancla } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export default function OptionsMenu({optionBackLink,optionBackTxt,opciones,txt,urls}) {
    
    const elementos = Array.from({ length: opciones }, (_, index) => index);    
    const [isOpenHamburger, setIsOpenHamburger] = useState(false);
    
    const hamburger= () => {
        setIsOpenHamburger(!isOpenHamburger);
    };

    return (
        <>
            <div className="css-sticky">
                <nav id="ac-localnav" className="navbar navbar-expand-lg" aria-label="Tenth navbar">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <div className="ac-ln-title">
                            {optionBackLink &&
                                <Link to={optionBackLink} className="d-inline-flex align-items-center text-decoration-none text-white ff-bold">
                                    <i className="bi bi-arrow-left-circle me-2"></i>{optionBackTxt}
                                </Link>
                            }
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbars01" aria-controls="navbars01" aria-expanded="false" aria-label="Toggle navigation" onClick={hamburger}>
                            {isOpenHamburger ? <i className="bi bi-caret-up text-white"></i> : <i className="bi bi-caret-down text-white"></i> }
                        </button>
                        <div className="collapse navbar-collapse" id="navbars01">                        
                            <ul className="navbar-nav ms-auto">
                                {elementos.map((index) => (                            
                                    <li key={index} className="nav-item">
                                        <Ancla to={urls[index]} className="nav-link text-white">
                                            {txt[index]}
                                        </Ancla>
                                    </li>
                                ))}
                            </ul>  
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}