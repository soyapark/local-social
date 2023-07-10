import React, { Fragment, useEffect, useState } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import allStates from "../data/allstates.json";
import geoURL from "../data/geoURL.json";

import config from '../config/index.json';
import logo from "../images/logo.png";

const Menu = () => {
  const { navigation, company, callToAction } = config;
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
    <>

    </>
  );
};

export default Menu;
