import React from 'react'
import styled from 'styled-components'

import logo from '../public/logos/logo1.svg'
import robot from '../public/icons/404-robot.svg'

function Error({ statusCode }) {
  return (
    <div className="flex flex-col justify-between items-center w-full h-screen px-4 pt-6 pb-12">
      <a href="/">
        <img src={logo} alt="Snapeat logo" />
      </a>
      <img
        className="w-32 text-bold"
        src={robot}
        alt="A cute little error robot"
      />
      <div>
        <Text className="text-red font-bold">
          Oooops, it&apos;s {statusCode ? `a ${statusCode}` : 'an error'}!
        </Text>
        <Text className="text-red">
          We noticed you lost your way. Not to worry though!
        </Text>
        <Text className="">
          Go back to the homepage but if the problem persists, don&apos;t
          hesitate to{' '}
          <a
            className="underline"
            href="https://airtable.com/shrA8ckDkLTVqLoab"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact us
          </a>
          <span>.</span>
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

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
