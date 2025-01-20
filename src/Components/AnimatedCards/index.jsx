import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import JS from '../../assets/JS.svg';
import net from '../../assets/net.svg';
import ploy from '../../assets/ploy.svg';
import react from '../../assets/react.svg';
import Ruby from '../../assets/Ruby.svg';
import Shopy from '../../assets/Shopy.svg';
import TS from '../../assets/TS.svg';
import WP from '../../assets/WP.svg';
import flutter from '../../assets/flutter.svg';
import Etherium from '../../assets/Etherium.svg';
import bc from '../../assets/bc.svg';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className="flex flex-col items-center">
    <img src={JS}  role="presentation" className="w-24 h-24" />
    <span className="mt-2 text-center">JavaScript</span>
  </div>,
  <div className="flex flex-col items-center">
    <img src={net}  role="presentation" className="w-24 h-24" />
    <span className="mt-2 text-center">Network</span>
  </div>,
  <div className="flex flex-col items-center">
    <img src={ploy}  role="presentation" className="w-24 h-24" />
    <span className="mt-2 text-center">Ploy</span>
  </div>,
  <div className="flex flex-col items-center">
    <img src={react}  role="presentation" className="w-24 h-24" />
    <span className="mt-2 text-center">React</span>
  </div>,
  <div className="flex flex-col items-center">
    <img src={Ruby}  role="presentation" className="w-24 h-24" />
    <span className="mt-2 text-center">Ruby</span>
  </div>,
  <div className="flex flex-col items-center">
    <img src={Shopy}  role="presentation" className="w-24 h-24" />
    <span className="mt-2 text-center">Shopy</span>
  </div>,
  <div className="flex flex-col items-center">
    <img src={TS}  role="presentation" className="w-24 h-24" />
    <span className="mt-2 text-center">TypeScript</span>
  </div>,
  <div className="flex flex-col items-center">
    <img src={WP}  role="presentation" className="w-24 h-24" />
    <span className="mt-2 text-center">WordPress</span>
  </div>,
  <div className="flex flex-col items-center">
    <img src={flutter}  role="presentation" className="w-24 h-24" />
    <span className="mt-2 text-center">Flutter</span>
  </div>,
  <div className="flex flex-col items-center">
    <img src={Etherium}  role="presentation" className="w-24 h-24" />
    <span className="mt-2 text-center">Ethereum</span>
  </div>,
  <div className="flex flex-col items-center">
    <img src={bc}  role="presentation" className="w-24 h-24" />
    <span className="mt-2 text-center">Blockchain</span>
  </div>,
];


const MyCarousel = () =>
  <div className="mt-[5.5rem] ">
    <AliceCarousel autoPlay infinite 
      autoPlayStrategy='none' autoPlayInterval={500}
      disableDotsControls disableButtonsControls
      responsive={{
        0: {
          items: 3,
          itemsFit: 'contain',
        },
        1024: {
          items: 8,
          itemsFit: 'contain',
        }
      }}
      items={items} />
  </div>

export default MyCarousel;
