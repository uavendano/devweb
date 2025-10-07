export default function BloqueTitleIcoTitleTxt({textColor,title1,img,alt,title2,info}) {
    const imgBTITT = require.context('../../images/componentes/BloqueTitleIcoTitleTxt',true);

    return (
        <div className={`container mt-5 ${textColor}`}>
            <div className="col-md-12 m-auto text-center">
                <h1 className="pb-5 pb-6 fs-title ff-bold">{title1}</h1>
                <img src={imgBTITT(`./${img}`)} className="img-fluid img-w-50" width="450" height="auto" alt={alt} />
                <h1 className="mt-6 pb-5 fs-title ff-bold">{title2}</h1>
                <p className='fs-5 fs-texto ff-normal'>{info}</p>
            </div>
        </div>
    );
}