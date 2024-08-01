import ImageLogo from '../src/assets/VSCF.svg'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsThreads } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Hero(){
    return(
    <>
        <div className="Container">
        <div className="banner-container">
          <Link to='/'>
            <img src={ImageLogo} width={100} height={100}/>
            <h1 className="banner-heading">
            Vision Sandakan Chess Federation
            </h1>
          </Link>
          <a target='_blank'href="https://instagram.com/vscf_chess">
            <FaInstagram size={25} className="Icons"/>
          </a>
          <a target='_blank'href="https://chat.whatsapp.com/CgtcXQErria1AaVIdaLvyL">
            <FaWhatsapp size={25} className="Icons"/>
          </a>
          <a target='_blank'href="https://www.threads.net/@vscf_chess?xmt=AQGzwHZhPGqRcuDTsbt5J2Bw7IgJDo783-qiSjnf3oMg6vU">
            <BsThreads size={23} className="Icons"/>
          </a>
        </div>
      </div>
    </>
    )
}