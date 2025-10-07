export default function SuccessModal({ show, message, onClose }) {
    return (
        <>
            {/* Success Modal */}
            <div className={`modal fade ${show  ? 'show' : ''}`} style={{ display: show  ? 'block' : 'none' }} tabIndex="-1">                
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fs-5">Great!</h5>
                            <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>                       
                        <div className="modal-body">
                            <h1 className='text-center text-success'><i className="bi bi-check-circle-fill"></i></h1>
                            <h5 className="text-center mb-3 modal-title fs-5">¡Proceso exitoso!</h5>
                            <p className='text-center mt-4 mb-3'>{message}</p>
                            <div className='text-end '>
                                <button type="button" className="btn btn-primary" onClick={onClose} data-bs-dismiss="modal">Aceptar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}