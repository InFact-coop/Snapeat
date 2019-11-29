import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import axios from 'axios'

import { useRouteDispatch } from '../state/routeContext'
import { useFoodDataDispatch } from '../state/foodDataContext'
import {
  CHANGE_VIEW,
  // LOADING,
  FOOD_DATA,
  ERROR,
  SET_FOOD_PHOTO,
} from '../utils/constants'
import { HeaderWithLogo } from '../components/Header'
import fileNameFormatter from '../utils/fileNameFormatter'

import buttonBG from '../public/backgrounds/camera_bg.svg'
import cameraBG from '../public/icons/camera_icn.svg'

import cameraButton from '../public/icons/btn_round.svg'

const Home = () => {
  const routeDispatch = useRouteDispatch()
  const foodDataDispatch = useFoodDataDispatch()
  const [photo, setPhoto] = useState()

  useEffect(() => {
    if (!photo) {
      return undefined
    }

    if (
      photo.file &&
      !(photo.file.type === 'image/jpeg' || photo.file.type === 'image/png')
    ) {
      return routeDispatch({ type: CHANGE_VIEW, view: ERROR })
    }

    foodDataDispatch({ type: SET_FOOD_PHOTO, payload: photo })

    return routeDispatch({ type: CHANGE_VIEW, view: FOOD_DATA })
  }, [foodDataDispatch, photo, routeDispatch])

  const onImageSelect = e => {
    e.preventDefault()

    const file = e.target.files[0]

    if (file) {
      setPhoto({
        file,
        fileName: fileNameFormatter(file.name),
        fileURL: URL.createObjectURL(file),
      })
    }
  }

  return (
    <Dashboard>
      <HeaderWithLogo />
      <CameraContainer>
        <p className="font-bold">What is your child eating for dinner?</p>
        <p>Share a photo</p>
      </CameraContainer>
      <ButtonForm>
        <Label htmlFor="image">
          <p>Snap a photo of their meal</p>
          <img
            className="w-20 sm:w-auto self-end mb-11"
            alt="camera-button"
            src={cameraButton}
          />
        </Label>
        <input
          className="hidden"
          type="file"
          id="image"
          name="image"
          accept="image/png, image/jpeg"
          multiple={false}
          files={photo}
          onChange={onImageSelect}
        />
      </ButtonForm>
    </Dashboard>
  )
}

const Dashboard = styled.div.attrs({
  className: 'w-full h-full text-center text-navy',
})`
  display: grid;
  grid-template-rows: 18% 1fr 25%;
  background: url(${cameraBG}) center/45% auto no-repeat;
`

const Label = styled.label`
  height: 100%;
  display: grid;
  grid-template-rows: 20px 1fr;
  grid-gap: 10px;
  justify-items: center;
`
const ButtonForm = styled.form.attrs({
  className: 'w-full',
})`
  background: url(${buttonBG}) left bottom/contain no-repeat;
`

const CameraContainer = styled.div.attrs({
  className: 'w-full font-xl px-4 pt-5 pb-2d5',
})``

export default Home
