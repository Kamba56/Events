import React from 'react';
import icon1 from '../assets/aA.svg';
import icon2 from '../assets/lock.svg';
import icon3 from '../assets/reload.svg';
import icon4 from '../assets/arrow.svg';
import icon5 from '../assets/Symbol.svg';
import icon6 from '../assets/book.svg';
import icon7 from '../assets/copy.svg';

const Footer = () => (
  <footer className='flex-column'>
    <div className='flex top'>
      <div className='icon'>
        <img src={icon1} alt='icon' />
      </div>

      <div className='domain'>
        <div className='icon'>
          <img src={icon2} alt='icon' />
        </div>
        <span>domain.com</span>
      </div>

      <div className='icon'>
        <img src={icon3} alt='icon' />
      </div>
    </div>

    <div className='flex'>
      <div className='icon sm'>
        <img src={icon4} alt='icon' />
      </div>

      <div className='icon sm'>
        <img className='in-arr' src={icon4} alt='icon' />
      </div>

      <div className='icon'>
        <img src={icon5} alt='icon' />
      </div>

      <div className='icon'>
        <img src={icon6} alt='icon' />
      </div>

      <div className='icon'>
        <img src={icon7} alt='icon' />
      </div>
    </div>
  </footer>
);

export default Footer;
