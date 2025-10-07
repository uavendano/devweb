import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routes.js';

export default function Unauthorized() {
    return (
        <>
            <div className="container" style={{marginTop:"5%"}}>
                <div className="alert alert-danger mt-4 alert-dismissible fade show" role="alert">
                    <b>¡Acceso denegado!</b> <br />
                    No tienes permisos para esta página        
                </div>    
                <div style={{textAlign: "center"}}>
                    <Link to={ROUTES.DASHBOARD} className="btn btn-primary">Continuar</Link>
                </div>
            </div>
        </>
    );
}