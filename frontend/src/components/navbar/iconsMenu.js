import { HashLink as Ancla } from 'react-router-hash-link';
import '../../css/navbar/iconsMenu.css';

export default function IconsMenu({id_ico,title,iconos,urls,name}) {
    
    const elementos = Array.from({ length: iconos }, (_, index) => index);

    return (
        <>
            <nav className="chapternav" id="pagegral">
                <div>
                    <ul className="chapternav-items" id={`contendor-item-${id_ico}`}>
                        <li className="chapternav-item p-0" id={`pag-chapternav-item-${id_ico}`}>                            
                            <figure className="chapternav-icon"></figure>
                            <div className="chapternav-title">
                                <span dangerouslySetInnerHTML={{ __html: title }}></span>                                    
                            </div>                            
                        </li>
                        <hr id="list-hr" />
                        <div id="border-menu">
                            {elementos.map((_, index) => (
                                <li key={index} className="chapternav-item" id={`chapternav-item-ico-0${index}`}>
                                    <Ancla to={urls[index]} className="chapternav-link">
                                        <figure className="chapternav-icon"></figure>
                                        {name[index] && <span>{name[index]}</span>}
                                    </Ancla>                                    
                                </li>
                            ))}                            
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}