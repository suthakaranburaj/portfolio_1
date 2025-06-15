import React from 'react'
import Components from '../index'

export function hero() {
  return (
    <div className="flex justify-between items-center w-[100%]">
      <div className='w-[27%]'>
        <Components.LeftHero />
      </div>
      <div>
        <Components.RightHero />
      </div>
    </div>
  );
}