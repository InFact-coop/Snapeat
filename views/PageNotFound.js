import React from 'react'
import styled from 'styled-components'

import logo from '../public/logos/logo1.svg'
import robot from '../public/icons/404-robot.svg'

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-full px-4 pt-6 pb-12">
      <a href="/">
        <img src={logo} alt="Snapeat logo" />
      </a>
      <img
        className="w-32 text-bold"
        src={robot}
        alt="A cute little error robot"
      />
      <div>
        <Text className="text-red font-bold">Oooops, it&apos;s a 404!</Text>
        <Text className="text-red">
          We noticed you lost your way. Not to worry though!
        </Text>
        <Text className="">
          Go back to the homepage but if the problem persists, don&apos;t
          hesitate to{' '}
          <a className="underline" href="/">
            contact us
          </a>
          .
        </Text>
      </div>
      <button className="bg-navy shadow-button rounded-button w-full text-white py-4 ">
        <a className="w-full" href="/">
          Go to homepage
        </a>
      </button>
    </div>
  )
}

const Text = styled.p.attrs({
  className: 'text-xl text-center m-8',
})``

export default PageNotFound
