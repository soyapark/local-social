import React, { Fragment, useEffect, useState } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll';
import { Button, Card } from 'antd';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import allStates from "../data/allstates.json";
import geoURL from "../data/geoURL.json";

import config from '../config/index.json';
import logo from "../images/logo.png";


import About from '../components/About';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
import LazyShow from '../components/LazyShow';
import Product from '../components/Product';



const App = () => {
  const { navigation, callToAction } = config;
  const [highlightedStates, setHighlightedStates] = useState([]);
  const [events, setEvents] = useState([{"title": "Southeast gathering @ Emory, Nov 2023", participants: ["GA", "FL"]}, {"title": "Northesast gathering @ NYC, Nov 2022", "participants": ["MA", "NY", "NJ", "PA", "GA"]}]);
  const [selectedEvent, setSelectedEvent] = useState(0);

  useEffect(() => {
    // load all the events

  }, []);

  const selectNewEvent = (index) => {
    setSelectedEvent(index);
  }

  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
          <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Local social</span>
                  <img alt="logo" className="h-16 w-auto sm:h-16" src={logo.src} />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {navigation.map((item) => (
                <Link
                  spy={true}
                  active="active"
                  smooth={true}
                  duration={1000}
                  key={item.name}
                  to={item.href}
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="#how-to"
                className={`font-medium text-primary hover:text-secondary`}
              >
                Call to action
              </a>
            </div>
          </nav>
        </div>

        

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div
              className={`rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden`}
            >
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={logo.src} alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    spy={true}
                    active="active"
                    smooth={true}
                    duration={1000}
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <a
                href={callToAction.href}
                className={`block w-full px-5 py-3 text-center font-medium text-primary bg-gray-50 hover:bg-gray-100`}
              >
                {callToAction.text}
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{"Local"}</span>{' '}
          <span className={`block text-primary xl:inline`}>
            {"conferencing"}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {events.map((event, i) => 
            <Card title={event.title} onClick={(e) => selectNewEvent(i)} className={i == selectedEvent ? "selected-event":""} extra={<a href="#"></a>} style={{ marginBottom: "30px" }}>
              <p>Organizer: </p>
              <p>Things to improve: </p>
            </Card>
          )}
        </p>
        <Button size="large" type="primary" href="#how-to" style={{backgroundColor: "rgba(236, 71, 85, 1)", marginRight:"10px"}}>Organize in my area</Button>
        <Button size="large" href="">Post my event</Button>

      </div>
    </main>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2" style={{zIndex: 900}}>
            <ComposableMap projection="geoAlbersUsa" style={{marginTop: "200px"}}>
              <Geographies geography={geoURL}>
                {({ geographies }) => (
                    geographies.map(geo => {
                      const cur = allStates.find(s => s.val === geo.id);
                      return <Geography
                        key={geo.rsmKey}
                        stroke="#FFF"
                        geography={geo}
                        fill={events[selectedEvent]["participants"].includes(cur.id) ? "rgba(240, 46, 170, 1)": "grey"}
                      />
                    })
                )}
              </Geographies>
            </ComposableMap>
          </div>
        </div>
        
        
      </div>
      <Canvas />
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
    </div>
  );
};

export default App;
