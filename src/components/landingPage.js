import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <main>
    <section id='headline' className='contain flex-column'>
      <h1>Imagine if <span>Snapchat</span> had events.</h1>
      <p>Easily host and share events with your friends across any social media.</p>
    </section>

    <section className='details'>
      <div className='limg-div'>
        <img src='../assets/image1.svg' alt='card' />
      </div>

      <div className='btn'>
        <Link to='/events'>Create My event</Link>
      </div>
    </section>
  </main>
);

export default LandingPage;
