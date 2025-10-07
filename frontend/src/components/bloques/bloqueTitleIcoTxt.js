export default function BloqueTitleIcoTxt({ancla,title,img,alt,txt}) {
    const imgBTIT = require.context('../../images/componentes/BloqueTitleIcoTxt',true);

    return (
        <>
            <div className='container mt-6 custom-color'>
                <div className="col-md-12 m-auto text-center">
                    {ancla && <span id={ancla}></span>}
                    <h1 className="fs-title ff-normal">{title}</h1>
                    <img src={imgBTIT(`./${img}`)} className="img-fluid img-w-65 mt-5" alt={alt} />
                    {txt && <p className='mt-5 fs-5 fs-texto ff-normal'>{txt}</p>}
                </div>
            </div>
        </>
    );
}