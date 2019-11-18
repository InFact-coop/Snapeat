import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import axios from 'axios'
import * as R from 'ramda'

import * as Steps from '../components/onboarding'
import PostCode from '../components/onboarding/PostCode'
import Children from '../components/onboarding/Children'
import Ages from '../components/onboarding/Ages'
import Projects from '../components/onboarding/Projects'
import Confirmation from '../components/onboarding/Confirmation'

import logo1 from '../public/logos/logo1.svg'

const initialValues = {
  postCode: '',
  children: [],
  projects: [],
}
const onSubmit = ({ incrementPage }) => async values => {
  try {
    //eslint-disable-next-line no-console
    console.log('Onboarding form submitted', values)

    await axios.get()

    incrementPage()
  } catch (e) {
    // TODO: trigger submit error (maybe with toast error)

    //eslint-disable-next-line no-console
    console.error('Error submitting onboarding form', e)
  }
}
const Next = styled.button.attrs({})``

const StyledControls = styled.nav.attrs({
  className: '',
})``

const Controls = ({ incrementPage, page }) => {
  return (
    <StyledControls>
      {page === Steps.Projects ? (
        <Next type="submit">Submit</Next>
      ) : (
        <Next onClick={incrementPage}>Next</Next>
      )}
    </StyledControls>
  )
}

const MultiStep = ({ children }) => {
  const [page, setPage] = useState(Steps.PostCode)

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

const Onboarding = () => {
  return (
    <MultiStep>
      <PostCode />
      <Children />
      <Ages />
      <Projects />
      <Confirmation />
    </MultiStep>
  )
}

export default Onboarding
