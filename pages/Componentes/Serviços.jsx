import React from 'react';
import { Element } from "react-scroll";

function Serviços() {
  return (
      <>
          <Element id='services' name='services'>
              <div className='w-full my-40 h-auto flex flex-col justify-center items-center'>
                  <p className="text-sm uppercase text-gray-400">Minhas habilidades</p>
                  <h1 className="text-indigo-900 text-6xl font-bold text-center mt-4">Minha Expertise</h1>
              </div>
          </Element>
    </>
  )
}

export default Serviços