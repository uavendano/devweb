import '../../css/components/sliderPartners.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routes.js';

export default function SliderPartners() {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    };
    
    return (
        <>            
            <div className="container-fluid bg-white mt-5">
                <div className="container p-5">
                    <Slider {...settings}>
                        <div>                        
                            <Link to={ROUTES.PARTNER_ARTICULATE} target="_blank" rel="noopener noreferrer">
                                <div className="bg-icon img-articulate"></div>
                            </Link>
                        </div>
                        <div>
                            <Link to={ROUTES.PARTNER_TOTARA} target="_blank" rel="noopener noreferrer">
                                <div className="bg-icon img-totara"></div>
                            </Link>
                        </div>
                        <div>
                            <Link to={ROUTES.PARTNERS_EXCELSOFT} target="_blank" rel="noopener noreferrer">
                                <div className="bg-icon img-excelsoft"></div>
                            </Link>
                        </div>
                        <div>
                            <Link to={ROUTES.PARTNER_EDIFICE} target="_blank" rel="noopener noreferrer">
                                <div className="bg-icon img-edifice"></div>
                            </Link>
                        </div>
                        <div>
                            <Link to={ROUTES.PARTNER_MOTRAIN} target="_blank" rel="noopener noreferrer">
                                <div className="bg-icon img-motrain"></div>
                            </Link>
                        </div>
                        <div>
                            <Link to={ROUTES.PARTNER_LAMBDA} target="_blank" rel="noopener noreferrer">
                                <div className="bg-icon img-lambda"></div>
                            </Link>
                        </div>                        
                        <div>
                            <Link to={ROUTES.PARTNER_AVILAR} target="_blank" rel="noopener noreferrer">
                                <div className="bg-icon img-avilar"></div>
                            </Link>
                        </div>
                        <div>
                            <Link to={ROUTES.PARTNER_VYOND} target="_blank" rel="noopener noreferrer">
                                <div className="bg-icon img-vyond"></div>
                            </Link>                            
                        </div>
                        <div>
                            <Link to={ROUTES.PARTNER_OTTOLEARN} target="_blank" rel="noopener noreferrer">
                                <div className="bg-icon img-otto"></div>
                            </Link>
                        </div>
                        <div>
                            <Link to={ROUTES.PARTNER_EXACT} target="_blank" rel="noopener noreferrer">
                                <div className="bg-icon img-exact"></div>
                            </Link>
                        </div>
                        <div>
                            <Link to={ROUTES.PARTNER_BELATRIX} target="_blank" rel="noopener noreferrer">
                                <div className="bg-icon img-belatrix"></div>
                            </Link>
                        </div>
                        <div>
                            <Link to={ROUTES.PARTNER_GO1} target="_blank" rel="noopener noreferrer">
                                <div className="bg-icon img-go1"></div>
                            </Link>                       
                        </div>
                        <div>                            
                            <div className="bg-icon img-centro-liderazgo"></div>                            
                        </div>
                        <div>
                            <Link to={ROUTES.PARTNER_BEYOND} target="_blank" rel="noopener noreferrer">
                                <div className="bg-icon img-beyond"></div>
                            </Link>
                        </div>
                        <div>                            
                            <div className="bg-icon img-ibs"></div>                            
                        </div>
                        <div>
                            <Link to={ROUTES.PARTNER_LEARNMEXICO} target="_blank" rel="noopener noreferrer">
                                <div className="bg-icon img-learn"></div>
                            </Link>
                        </div>
                        <div>
                            <Link to={ROUTES.PARTNER_NETEX} target="_blank" rel="noopener noreferrer">
                                <div className="bg-icon img-netex"></div>
                            </Link>
                        </div>                        
                    </Slider>
                </div>
            </div>
        </>
    );
}