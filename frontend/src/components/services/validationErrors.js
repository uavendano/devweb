const ValidationErrors = ({ errors, onClose }) => {
    if (errors.length === 0) return null;

    return (
        <div className="my-3 alert alert-danger alert-dismissible fade show" role="alert">
            {errors.map((err, index) => (
                <p key={index}>{err.msg}</p>
            ))}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
        </div>
    );
};

export default ValidationErrors;