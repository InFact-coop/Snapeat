import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import axios from 'axios'

import * as R from 'ramda'
import R_ from '../utils/R_'

import { useProjectState } from '../context/projectContext'

import * as Steps from '../components/onboarding'
import PostCode from '../components/onboarding/PostCode'
import NumberOfChildren from '../components/onboarding/NumberOfChildren'
import Ages from '../components/onboarding/Ages'
import Projects from '../components/onboarding/Projects'
import Phone from '../components/onboarding/Phone'

import Spinner from '../components/onboarding/Spinner'
import Success from '../components/onboarding/Success'
import Error from '../components/onboarding/Error'

import logo1 from '../public/logos/logo1.svg'
import arrowNext from '../public/icons/arrow_next.svg'
import arrowBack from '../public/icons/back_blue.svg'
import {
  FORM_NOT_SENT,
  FORM_SENDING,
  FORM_ERROR,
  FORM_SUCCESS,
} from '../utils/constants'

const initialValues = {
  ages: ['5-8', '9-12'],
  numberOfChildren: '2',
  phoneNumber: '',
  postCode: 'N4 3HF',
  project: 'healthy-lives',
}

// const initialValues = {
//   postCode: '',
//   numberOfChildren: 0,
//   ages: [],
//   project: '',
//   phoneNumber: '',
// }

const onSubmit = ({ setFormStatus }) => async values => {
  try {
    //eslint-disable-next-line no-console
    console.log('Onboarding form submitted', values)
    setFormStatus(FORM_SENDING)

    const {
      data: { name: email },
    } = await axios.get(`/api/me`)

    const {
      data: { user },
    } = await axios.post(`${process.env.HOST}/api/create-user`, {
      email,
      ...values,
    })

    //eslint-disable-next-line no-console
    console.log('Onboarding successful', user)

    setFormStatus(FORM_SUCCESS)
  } catch (e) {
    //eslint-disable-next-line no-console
    console.error('Error submitting onboarding form', e)
    setFormStatus(FORM_ERROR)
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

const BottomNav = ({
  incrementPage,
  setFormStatus,
  pageIndex,
  amountOfPages,
  isValid,
  values,
  errors,
}) => {
  const lastPage = amountOfPages - 1 === pageIndex

  return (
    <StyledBottomNav>
      <Progress {...{ pageIndex, amountOfPages }} />
      {lastPage ? (
        <Next
          type="submit"
          onClick={() => onSubmit({ setFormStatus })(values)}
        />
      ) : (
        <Next
          onClick={isValid || R.isEmpty(errors) ? incrementPage : () => ({})}
        />
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
  const [page, setPage] = useState(Steps.Phone)
  const [validationSchema, setValidationSchema] = useState(Yup.object())
  const [formStatus, setFormStatus] = useState(FORM_NOT_SENT)
  const { error, project } = useProjectState()

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

  const initValues = () => {
    if (error) return initialValues
    if (project) return { ...initialValues, projects: [project] }
    return initialValues
  }
  const FormStatusPage = () => {
    switch (formStatus) {
      case FORM_SENDING:
        return <Spinner />
      case FORM_SUCCESS:
        return <Success />
      case FORM_ERROR:
        return <Error />
      default:
        return null
    }
  }

  const { validation } = activePage && activePage.type

  useEffect(() => {
    if (validation) {
      setValidationSchema(validation)
    }
  })

  const Container = styled.main``

  return (
    <Formik
      {...{
        initialValues: initValues(),
        validationSchema,
        isInitialValid: false,
        onSubmit: onSubmit({
          incrementPage,
        }),
        enableReinitialize: true,
      }}
    >
      {({
        validateForm,
        values,
        setTouched,
        setFieldValue,
        errors,
        isValid,
      }) => {
        if (formStatus === FORM_NOT_SENT) {
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
                      setValidationSchema,
                    },
                  }}
                />
              </StyledForm>
              <BottomNav
                {...{
                  incrementPage,
                  isValid,
                  page,
                  pageIndex,
                  amountOfPages: pages.length,
                  errors,
                  values,
                  setFormStatus,
                }}
              />
              <FormStatusPage />)
            </Container>
          )
        }

        return <FormStatusPage />
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
      <NumberOfChildren />
      <Ages />
      <Projects />
      <Phone />
    </MultiStep>
  )
}

export default Onboarding
