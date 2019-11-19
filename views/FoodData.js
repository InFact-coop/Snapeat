import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import axios from 'axios'
import * as R from 'ramda'

import * as Steps from '../components/foodData'
import Types from '../components/foodData/Types'
import Ratios from '../components/foodData/Ratios'
import Tags from '../components/foodData/Tags'

import logo1 from '../public/logos/logo1.svg'

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
const Next = styled.button.attrs({})``

const StyledControls = styled.nav.attrs({
  className: '',
})``

const Controls = ({ incrementPage, page }) => {
  return (
    <StyledControls>
      {page === Steps.Tags ? (
        <Next type="submit">Submit</Next>
      ) : (
        <Next onClick={incrementPage}>Next</Next>
      )}
    </StyledControls>
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

  // const decrementPage = () => {
  //   const pageIndex = R.findIndex(R.equals(page))(pages)
  //   setPage(pages[pageIndex - 1])
  // }

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
            <StyledForm>
              <Logo />
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
                    setFieldValue,
                    errors,
                  },
                }}
              />
            </StyledForm>
            <Controls {...{ incrementPage, page }} />
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

const Logo = styled.img.attrs({
  src: logo1,
  className: '',
  alt: 'Snapeat',
})``

const FoodData = () => {
  return (
    <>
      <h1>Test</h1>
      <MultiStep>
        <Types />
        <Ratios />
        <Tags />
      </MultiStep>
    </>
  )
}

export default FoodData
