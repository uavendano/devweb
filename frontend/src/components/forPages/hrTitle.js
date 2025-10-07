export default function Hr({ t1, t2 }) {
    return (
        <>
            <div className="container col-md-12 col-lg-7 d-flex align-items-center mt-6">
                <div className="flex-grow-1" style={{borderTop: '2px solid #4E4E4E'}}></div>
                <div className="px-3 text-center">
                    <div className='fs-5 fs-subtitle ff-bold custom-color'>{t1}</div>
                     {t2 && <div className='fs-5 fs-subtitle ff-bold custom-color'>{t2}</div>}
                </div>
                <div className="flex-grow-1" style={{borderTop: '2px solid #4E4E4E'}}></div>
            </div>
        </>
    );
}