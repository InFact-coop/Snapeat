import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import axios from 'axios'

import * as R from 'ramda'
import R_ from '../utils/R_'

import * as Steps from '../components/onboarding'
import PostCode from '../components/onboarding/PostCode'
import Children from '../components/onboarding/Children'
import Ages from '../components/onboarding/Ages'
import Projects from '../components/onboarding/Projects'
import Confirmation from '../components/onboarding/Confirmation'

import logo1 from '../public/logos/logo1.svg'
import arrowNext from '../public/icons/arrow_next.svg'
import arrowBack from '../public/icons/back_blue.svg'

const initialValues = {
  postCode: '',
  numberOfChildren: 0,
  children: [],
  projects: [],
}
const onSubmit = ({ incrementPage, formCompleted }) => async values => {
  try {
    //eslint-disable-next-line no-console
    console.log('Onboarding form submitted', values)

    if (!formCompleted) incrementPage()

    await axios.get()

    incrementPage()
  } catch (e) {
    // TODO: trigger submit error (maybe with toast error)

    //eslint-disable-next-line no-console
    console.error('Error submitting onboarding form', e)
  }
}

const Dot = styled.div.attrs(({ completed }) => ({
  className: `mr-2d5 h-2d5 w-2d5 rounded-full bg-navy ${
    completed ? 'opacity-100' : 'opacity-40'
  }`,
}))`
  &:last-child {
    margin-right: 0;
  }
`

const DotsContainer = styled.div.attrs({
  className: 'flex mb-6',
})``

const Progress = ({ pageIndex, amountOfPages }) => {
  const pageNumber = pageIndex + 1
  const createDot = completed => (_, index) => (
    <Dot
      completed={completed}
      key={`dot-${completed ? 'completed' : 'toComplete'}-${index}`}
    />
  )

  const completed = R_.mapIndexed(createDot(true))([...Array(pageNumber)])
  const toComplete = R_.mapIndexed(createDot())([
    ...Array(amountOfPages - pageNumber),
  ])

  return (
    <DotsContainer>
      <>
        {completed}
        {toComplete}
      </>
    </DotsContainer>
  )
}

const Next = styled.button.attrs({
  className: 'w-16d5 h-16d5 shadow-button bg-navy rounded-full',
})`
  background: center no-repeat url(${arrowNext}) ${cssTheme('colors.navy')};
`

const StyledBack = styled.button.attrs({
  className: 'flex items-center justify-between',
})``

const Back = ({ onClick }) => (
  <StyledBack onClick={onClick}>
    <img src={arrowBack} alt="Back arrow" className="mr-2d5" />
    <span>Back</span>
  </StyledBack>
)

const StyledBottomNav = styled.nav.attrs({
  className:
    'bg-white w-full fixed z-10 bottom-0 rounded-tooltip shadow-tooltip pt-5 pb-6 flex flex-col items-center justify-around',
})``

const BottomNav = ({ incrementPage, pageIndex, amountOfPages }) => {
  const penultimatePage = amountOfPages - 2

  return (
    <StyledBottomNav>
      <Progress {...{ pageIndex, amountOfPages }} />
      {pageIndex === penultimatePage ? (
        <Next type="submit" />
      ) : (
        <Next onClick={incrementPage} />
      )}
    </StyledBottomNav>
  )
}

const StyledTopNav = styled.nav.attrs(({ firstPage }) => ({
  className: `w-full ${firstPage ? 'mb-16' : 'mb-11'}`,
}))``

const TopNav = ({ pageIndex, decrementPage }) => {
  const firstPage = pageIndex === 0
  return (
    <StyledTopNav {...{ firstPage }}>
      {!firstPage && <Back onClick={decrementPage} />}
    </StyledTopNav>
  )
}

const MultiStep = ({ children }) => {
  const [page, setPage] = useState(Steps.PostCode)

  const steps = React.Children.toArray(children)
  const pages = steps.map(step => step.type.componentName)
  const activePage = R.find(R.pathEq(['type', 'componentName'], page))(steps)
  const pageIndex = R.findIndex(R.equals(page))(pages)

  const incrementPage = () => {
    setPage(pages[pageIndex + 1])
  }

  const decrementPage = () => {
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
            <StyledForm>
              <Logo />
              <TopNav {...{ pageIndex, decrementPage }} />
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
            <BottomNav
              {...{
                incrementPage,
                page,
                pageIndex,
                amountOfPages: pages.length,
              }}
            />
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
  className: 'bg-lightgray min-h-screen px-4 py-5d5 flex flex-col items-center',
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
