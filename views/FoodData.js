import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import axios from 'axios'
import * as R from 'ramda'
import { useRouteDispatch } from '../utils/routeContext'
import { GO_BACK } from '../utils/constants'

import * as Steps from '../components/foodData'
import Types from '../components/foodData/Types'
import Ratios from '../components/foodData/Ratios'
import Tags from '../components/foodData/Tags'

import backIcon from '../public/icons/back_white.svg'
import nextIcon from '../public/icons/btn_round-next.svg'

const initialValues = {
  types: [],
  fruitRatio: '',
  vegRatio: '',
  tags: [],
}
const onSubmit = ({ incrementPage, formCompleted }) => async values => {
  try {
    //eslint-disable-next-line no-console
    console.log('Food data form submitted', values)

    if (!formCompleted) incrementPage()

    await axios.get()

    incrementPage()
  } catch (e) {
    // TODO: trigger submit error (maybe with toast error)

    //eslint-disable-next-line no-console
    console.error('Error submitting food data form', e)
  }
}

const ControlsBack = ({ decrementPage, page }) => {
  const routeDispatch = useRouteDispatch()
  return (
    <StyledControlsBack>
      {page === Steps.Types ? (
        <Back onClick={() => routeDispatch({ type: GO_BACK })}>
          <img src={backIcon} alt="Back" />
        </Back>
      ) : (
        <Back onClick={decrementPage}>
          <img src={backIcon} alt="Back" />
        </Back>
      )}
    </StyledControlsBack>
  )
}

const ControlsNext = ({ incrementPage, page }) => {
  return (
    <StyledControlsNext>
      {page === Steps.Tags ? (
        <Next type="submit">
          <img src={nextIcon} alt="Next" />
        </Next>
      ) : (
        <Next onClick={incrementPage}>
          <Next type="submit">
            <img src={nextIcon} alt="Next" />
          </Next>
        </Next>
      )}
    </StyledControlsNext>
  )
}

const MultiStep = ({ children }) => {
  const [page, setPage] = useState(Steps.Types)

  const steps = React.Children.toArray(children)
  const pages = steps.map(step => step.type.componentName)
  const activePage = R.find(R.pathEq(['type', 'componentName'], page))(steps)

  const incrementPage = () => {
    const pageIndex = R.findIndex(R.equals(page))(pages)
    setPage(pages[pageIndex + 1])
  }

  const decrementPage = () => {
    const pageIndex = R.findIndex(R.equals(page))(pages)
    setPage(pages[pageIndex - 1])
  }

  const { validationSchema } = activePage && activePage.type
  const Container = styled.main``

  return (
    <Formik
      {...{
        initialValues,
        validationSchema,
        onSubmit: onSubmit({
          incrementPage,
        }),
        enableReinitialize: false,
      }}
    >
      {({ validateForm, values, setTouched, setFieldValue, errors }) => {
        return (
          <Container>
            <ControlsBack {...{ decrementPage, page }} />
            <StyledForm>
              <Food />
              <RenderStep
                {...{
                  validateForm,
                  page,
                  setTouched,
                  activePage,
                  props: {
                    setPage,
                    values,
                    incrementPage,
                    decrementPage,
                    setFieldValue,
                    errors,
                  },
                }}
              />
            </StyledForm>
            <ControlsNext {...{ incrementPage, page }} />
          </Container>
        )
      }}
    </Formik>
  )
}
const RenderStep = ({ activePage, validateForm, page, setTouched, props }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    setTouched({})
    validateForm()
  }, [page, setTouched, validateForm])

  return React.cloneElement(activePage, props)
}

const StyledForm = styled(Form).attrs({
  className: 'bg-lightgray h-screen px-4 py-5d5 flex flex-col items-center',
})``

const Food = styled.img.attrs({
  src:
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdefault.mygourmetcreatio.netdna-cdn.com%2Fwp-content%2Fuploads%2F2014%2F12%2FThai-Basil-Beef-2.jpg&f=1&nofb=1',
  className: 'absolute top-0 min-w-full',
  alt: 'Photo of users dinner',
})``

const StyledControlsBack = styled.nav.attrs({
  className: 'absolute top-0 min-w-full z-10',
})``
const Back = styled.button.attrs({
  className: 'm-4',
})``

const StyledControlsNext = styled.nav.attrs({
  className: 'flex justify-center',
})``
const Next = styled.button.attrs({
  className: '',
})``

const FoodData = () => {
  return (
    <MultiStep>
      <Types />
      <Ratios />
      <Tags />
    </MultiStep>
  )
}

export default FoodData
