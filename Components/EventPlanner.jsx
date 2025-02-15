import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';


const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className='description'>
                <p>
                    Plan and organize your events effortlessly with Event Planner.
                    From b-days to meetings, we've got you covered.
                </p>

                <button className='get-started-button'>Get Started</button>
            </section>
            <section className='events_categories'>
                <ul>
                    <h2>Social events</h2>
                    <li>Birthday parties</li>
                        <li>Anniversary celebrations</li>
                        <li>Wedding receptions</li>
                        <li>Baby showers</li>
                </ul>
                <ul>
                    <h2>Entertainment events</h2>
                    <li>Concerts</li>
                    <li>Film</li>
                    <li>Art exhibits</li>
                </ul>
                <ul>
                    <h2>Community events</h2>
                    <li>Fundraising</li>
                    <li>BBQ</li>
                </ul>
            </section>
            <section className='features'>
                <h2>Features</h2>
                <ul>
                    <li>Ezpz event design and management</li>
                    <li>Customizable event templates</li>
                    <li>Reminders and notifications</li>
                </ul>
            </section>
            <section className='testimonials'>
                <h2>Testimonials</h2>
                <div className='testimonial'>
                    <p>"Highly recommended event planner"</p>
                    <p className='author'>- Emily Johnson</p>
                </div>
                <div className='testimonial'>
                    <p>"Worst event planner ever"</p>
                    <p className='author'>- Johnson Emily</p>
                </div>               
            </section>
            <section className='contact'>
                <h2>Contact Us</h2>
                <form>
                    <input type='text' placeholder='Name' />
                    <input type='email' placeholder='Email'/>
                    <textarea placeholder='Message'></textarea>
                    <button className='submit-button'>Send</button>
                </form>
            </section>
            <Footer/>
        </div>
    );
};

export default EventPlanner;
