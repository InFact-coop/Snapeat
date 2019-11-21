import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import axios from 'axios'
import * as R from 'ramda'

import { GO_BACK } from '../utils/constants'

import { useRouteDispatch } from '../state/routeContext'
import { useFoodDataState } from '../state/foodDataContext'

import * as Steps from '../components/foodData'
import Categories from '../components/foodData/Categories'
import Proportions from '../components/foodData/Proportions'
import Tags from '../components/foodData/Tags'
import Results from '../components/foodData/Results'

import backIcon from '../public/icons/back_white.svg'
import nextIcon from '../public/icons/btn_round-next.svg'

const initialValues = {
  categories: [],
  proportionFruit: '',
  proportionVeg: '',
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
      {page === Steps.Categories ? (
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
      {page === Steps.Results ? (
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
  const { foodPhoto } = useFoodDataState()

  const [page, setPage] = useState(Steps.Results)

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
              <ImageContainer className="relative">
                <Food src={foodPhoto.fileURL} />
              </ImageContainer>
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
  className: 'bg-lightgray px-4 flex flex-col items-center',
})``

const height = 300

const ImageContainer = styled.div`
  height: ${height}px;
  width: 100vw;
`

const Food = styled.img.attrs(({ src }) => ({
  src,
  className: 'min-w-full absolute',
  alt: 'Photo of users dinner',
}))``

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
      <Categories />
      <Proportions />
      <Tags />
      <Results />
    </MultiStep>
  )
}

export default FoodData
