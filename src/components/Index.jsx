import React from 'react'
import { useContext } from "react";
import { context } from './../context/context'
import { How } from './How/How';
import { What } from './What/What';

export const Index = () => {
  const { setVisibleLogIn, setVisibleSignUp, user } = useContext(context);

  return (
    <>
      <div className='index-container' >
        <div className='data-container'>
          <div className='text-container'>
            <h1>SYSTEM FOR SEGMENTATION AND COUNTING OF NANOPARTICLES</h1>
          </div>
          <div className='half-line'>
          </div>
          <div className='description-container'>
            <p>System to generate reports of size and quantity of nanoparticles in scanning electron microscope (SEM) and Transmission electron microscopes (TEM) micrographs.</p>
          </div>
          {user != '' ? (
            <p className='menssage'>Welcome {user}!</p>
          ) : (
            <div className='buttons-container'>
              <button className='white-button' onClick={() => { setVisibleLogIn(true) }} >Log in</button>
              <button className='black-button' onClick={() => { setVisibleSignUp(true) }} >Sign up</button>
            </div>
          )}

        </div>
        <div className='image-container'>
          <img clasName='main-image' src="./image/microscope_tem.jpg" alt="" />
        </div>
      </div>
      <div className='spacer layer1'></div>
      <What />
      <div className='spacer layer2'></div>
      <How />
    </>
  )
}
