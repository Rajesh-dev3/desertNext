import './slidercard.scss';
import cardImage from '../../../assets/mobile_slider_top_one.png';
import Link from 'next/link';

const SliderCard = ({animation,index,openModal}) => {
  return (
    <div className={`sliderCard ${index === animation ? 'active-slide' : ''}`}>
      <div className="slider-card-top-col">
        
      </div>
      <div className="sliderCardContent">
        <p className="sliderCardTitle">
          polaris rzr 1000 cc<br />
          2 seater<br />
          30 min : 1000 aed<br />
          1 hour: 1500 aed
        </p>
          
        <Link href="/tour-detail/">
        <button className="sliderCardButton" >
          Book Now</button>
        </Link>
     
      </div>
    </div>
  );
};

export default SliderCard;
