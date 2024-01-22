import React, { useEffect } from 'react';
import './main.css';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import img from '../../Assets/img (1).jpg';
import img2 from '../../Assets/img (2).jpg';
import img3 from '../../Assets/img (3).jpg';
import img4 from '../../Assets/img (4).jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Armorial monumental',
    description:
      'The European historical and monumental armorial publishes heraldic photographic inventory campaigns carried out thanks to missions commissioned by local authorities (approx. 5000 entries).',
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Weapon search',
    description: 'Heraldry lists European coats of arms in the form of coats of arms, the result of multiple countings (approx. 198,000 entries).',
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Heraldry and the book',
    description:
      'Heraldry and the Book publishes notices on binding irons and heraldic or emblematic presences on or in the handwritten or printed book (approx. 1300 notices).',
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Heraldry Library',
    description: 'Heraldry lists European coats of arms in the form of coats of arms, the result of multiple countings (approx. 198,000 entries).',
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 data-aos='fade-right' className='title'>
          Learn about Heraldry
        </h3>
      </div>

      <div className='secContent grid'>
        {Data.map(({ id, imgSrc, destTitle, description }) => (
          <div key={id} data-aos='fade-up' className='singleDestination'>
            <div className='imageDiv'>
              <img src={imgSrc} alt={destTitle} />
            </div>

            <div className='cardInfo'>
              <h4 className='destTitle'>{destTitle}</h4>

              <div className='desc'>
                <p>{description}</p>
              </div>

              <button className='btn flex'>
                DETAILS <HiOutlineClipboardCheck className='icon' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;
