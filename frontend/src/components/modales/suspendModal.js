import React from 'react';

export default function SuspendModal({show, title, message, icon, funsuspend, onClose}) {
    return (
        <>
            {/* Modal de Confirmación */}
            <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex="-1">                
                <div className="modal-dialog" role="document">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title fs-5">Wait a minute!!!</h5>
                                <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h1 className='text-center mb-3 text-warning'>{icon}</h1>
                                <h5 className="text-center mb-3 modal-title fs-5">{title}</h5>
                                <p className='text-center mt-4 mb-3'>{message}</p>
                                <div className='text-end'>
                                    <button type="button" className="btn btn-warning me-3" onClick={funsuspend} data-bs-dismiss="modal">Aceptar</button>
                                    <button type="button" className="btn btn-secondary" onClick={onClose} data-bs-dismiss="modal">Cancelar</button>                                
                                </div>
                            </div>                            
                        </div>
                    </div>                    
                </div>                
            </div> 
        </>
    )
}