import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import JS from '../../assets/js.svg';
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
  <img src={JS} onDragStart={handleDragStart} role="presentation" className="w-24 h-28" />,
  <img src={net} onDragStart={handleDragStart} role="presentation" className="w-32 h-36" />,
  <img src={ploy} onDragStart={handleDragStart} role="presentation" className="w-24 h-28" />,
  <img src={react} onDragStart={handleDragStart} role="presentation" className="w-24 h-28" />,
  <img src={Ruby} onDragStart={handleDragStart} role="presentation" className="w-20 h-24" />,
  <img src={Shopy} onDragStart={handleDragStart} role="presentation" className="w-24 h-28" />,
  <img src={TS} onDragStart={handleDragStart} role="presentation" className="w-24 h-28" />,
  <img src={WP} onDragStart={handleDragStart} role="presentation" className="w-24 h-28" />,
  <img src={flutter} onDragStart={handleDragStart} role="presentation" className="w-32 h-36" />,
  <img src={Etherium} onDragStart={handleDragStart} role="presentation" className="w-32 h-36" />,
  <img src={bc} onDragStart={handleDragStart} role="presentation" className="w-32 h-36" />,
];

const MyCarousel = () => <AliceCarousel  autoPlay infinite
autoPlayStrategy='none' autoPlayInterval={1000}
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
 
items={items} />;
export default MyCarousel;
