export default function ErrorModal({show, message, onClose}) {
    return (
        <>
            {/* Error Modal */}             
            <div className={`modal fade ${show  ? 'show' : ''}`} style={{ display: show  ? 'block' : 'none' }} tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title fs-5">¡Ooops!</h5>
                                <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>                           
                            <div className="modal-body">  
                                <h1 className='text-center mb-3 text-danger'><i className="bi bi-x-octagon"></i></h1>                            
                                <h5 className="text-center mb-3 modal-title fs-5">¡A ocurrido un error!</h5>
                                <p className='text-center mt-4 mb-3'>{message}</p>                                
                                <div className='text-end'>
                                    <button type="button" className="btn btn-primary" onClick={onClose} data-bs-dismiss="modal">Cerrar</button>
                                </div>                                
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}