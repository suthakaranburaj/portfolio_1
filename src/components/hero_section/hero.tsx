import React from 'react'
import Components from '../index'

export function hero() {
  return (
    <div className="flex justify-between items-center w-[100%] h-[100%] py-auto">
      <div className='w-[27%] h-[100%] flex justify-between items-center'>
        <Components.LeftHero />
      </div>
      <div className='pl-20 w-[85%] h-[60%] flex justify-between items-center py-auto'>
        <Components.RightHero />
      </div>
    </div>
  );
}