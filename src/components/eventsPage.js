import React from 'react';
import image from '../assets/Eventimage.svg';
import icon1 from '../assets/Calendar.svg';
import icon2 from '../assets/Location.svg';
import '../events.css';

const EventsPage = () => (
  <main className='flex-column'>
    <div className='img-div'>
      <img src={image} alt='events header' />
    </div>

    <div className='left intro pad'>
      <h1>Birthday bash</h1>
      <p>Hosted by Esta</p>
    </div>

    <section className='left pad'>
      <div className='domain'>
        <div className='icon1'>
          <img src={icon1} alt='calender' />
        </div>
        <div className='flex-column'>
          <h2 className='left'>18 August 6:00pm</h2>
          <p className='left'>to 19 August 1:00pm</p>
        </div>
      </div>
    </section>
  </main>
);

export default EventsPage;
