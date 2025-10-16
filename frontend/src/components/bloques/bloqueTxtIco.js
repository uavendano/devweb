import '../../css/components/bloqueTxtIco.css';
import { Link } from 'react-router-dom';
import { HashLink as Ancla } from 'react-router-hash-link';

const imgPath = require.context('../../images/componentes/BloqueTxtIco',true);

export default function BloqueTxtIco({ancla,subtitle,info,buttons,img,altText}) {    

    return (
        <>
            {/* Solo renderiza el ancla si existe */}
            {ancla && <div id={ancla} className="mt-6"></div>}
            <div className="container">
                <div className="row">
                    <div className="col-md-6 order-1 order-md-2 text-center text-md-end mb-3 mb-md-0">
                        <img src={imgPath(`./${img}`)} className="img-fluid" width="300px" height="auto" alt={altText} /> 
                    </div>
                    <div className="col-md-6 order-2 order-md-1">
                        <h2 className="ff-bold fs-subtitle custom-color">{subtitle}</h2>
                        <p className="fs-5 ff-normal fs-texto custom-color">{info}</p>
                        <div>
                            {buttons?.length > 0 &&
                                buttons.map((button, index) => {
                                    // botón normal Dropdown
                                    if (button.isDropdown) {
                                        return (
                                            <div key={index} className="dropdown" style={{ display: "inline-block" }}>
                                                <a href="##" className={`${button.className} dropdown-toggle`} role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                                    {button.text}
                                                </a>
                                                <ul className="dropdown-menu">
                                                    {button.options.map((option, idx) => (
                                                        <li key={idx}>
                                                            <a className="dropdown-item" href={option.path} target="_blank" rel="noopener noreferrer">
                                                                {option.text}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        );
                                    } else if (button.isLinkText) {
                                        // para link simple
                                        return (
                                            <Link key={index} className={`${button.className} text-decoration-none me-5`} to={button.path}>{button.text}</Link>
                                        );
                                    } else {
                                        // botón normal
                                        return (
                                            <Ancla
                                                key={index}
                                                className={button.className}
                                                to={button.path}
                                                target={button.openInNewTab ? "_blank" : "_self"}
                                                rel={button.openInNewTab ? "noopener noreferrer" : ""}
                                                style={{ display: "inline-block", marginRight: "10px" }}
                                            >
                                                {button.text}
                                            </Ancla>
                                        );
                                    }
                                })
                            }
                        </div>
                    </div>                    
                </div>
            </div>
        </>
    );
}