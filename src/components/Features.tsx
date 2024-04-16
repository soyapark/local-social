import React from 'react';

import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { title, subtitle, description } = features;
  return (
    <div className={`py-12 bg-background`} id="how-to">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-l text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 ">
            <ol>
              <li>
                1. Gauge people's interest in joining and check their availability by setting up a google form. Refer to this template: <a href="https://forms.gle/w8N5vKWwaQE2UCWo8" target="_blank" rel="noopener noreferrer">Link to the Google Form</a>
              </li>
              <li>
                2. Once you get a critical mass, fix the date and let everyone know. And also post your event at this website. 
              </li>
              <li>
                3. Scout for where to host the event. The event does not have to happen at the home institute of the organizers, but somewhere convinient and accessible. Contact some respondents and ask them if they can get a room and snacks for coffee breaks. 
              </li>
              <li>
                 4. Plan agenda using <a href="https://local-planner.netlify.app" target="_blank" rel="noopener noreferrer">our recommender tool</a>. Now this is the fun part! You have complete wiggle room to customize the event as you wish. You can tweak previous event. {/*Copy this template: <a href="https://docs.google.com/document/d/1PhpaJmWYQy96BmstJe0b0WlxJTt-uBfb4moLvtTKu1k/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Link to a Google Doc</a>.*/} We urge you to include a brief townhall in your event and share very very short summary of it, so the next organizer can improve up on your event.  
              </li>
              <li>
                5. Have fun at the event :)  
              </li>
            </ol>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
