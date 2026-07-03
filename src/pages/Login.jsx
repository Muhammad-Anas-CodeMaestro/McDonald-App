import React, { useState } from 'react';
import McDonaldPic from '/McDonaldPic.png';
import { email } from '../data/userValue.js';
import { password } from '../data/userValue.js';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Foam from '../componets/Foam.jsx';
import Background from '../componets/Backgound.jsx';

export default function Login () {

  return (
    <div className="flex items-center justify-around h-screen w-full bg-yellow-500">
      <div className = 'h-full w-full flex flex-col items-center justify-center'>
        <Foam />
      </div>
      <div className="w-10/12">
        <img src={ McDonaldPic } alt="McDonald's" className="" />
      </div>
    </div>
  );
}