import React from 'react';
import image from '../assets/Eventimage.svg';
import icon1 from '../assets/Calendar.svg';
import icon2 from '../assets/Location.svg';
import icon4 from '../assets/arrow.svg';
import '../events.css';

const EventsPage = () => (
  <main className='flex-column'>
    <div className='img-div'>
      <img src={image} alt='events header' />
    </div>

    <div className='left intro pad img-div'>
      <h1>Birthday bash</h1>
      <p className='light'>Hosted by Esta</p>
    </div>

    <section className='left pad img-div'>
      <div className='domain'>
        <div className='icon1'>
          <img src={icon1} alt='calender' />
        </div>
        <div className='flex-column'>
          <h2 className='left'>18 August 6:00pm</h2>
          <p className='left light'>to 19 August 1:00pm</p>
        </div>
      </div>

      <div className='flex bottom'>
        <div className='domain'>
          <div className='icon1'>
            <img src={icon2} alt='calender' />
          </div>
          <div className='flex-column'>
            <h2 className='left'>Street name</h2>
            <p className='left light'>19 london street</p>
          </div>
        </div>

        <div className='icon sm'>
          <img className='in-arr' src={icon4} alt='icon' />
        </div>
      </div>
    </section>
  </main>
);

export default EventsPage;
