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
import VegetableProportion from '../components/foodData/VegetableProportion'
import FruitProportion from '../components/foodData/FruitProportion'
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

const ControlsBack = ({ decrementPage, page, setPage, values }) => {
  const routeDispatch = useRouteDispatch()

  const backOnClick = () => {
    const vegetablesSelected = values.categories.includes('vegetables')

    switch (page) {
      case Steps.Categories:
        return () => routeDispatch({ type: GO_BACK })
      case Steps.FruitProportion:
        return () =>
          vegetablesSelected
            ? setPage(Steps.VegetableProportion)
            : setPage(Steps.Categories)
      default:
        return decrementPage
    }
  }

  return (
    <StyledControlsBack>
      <Back onClick={backOnClick()}>
        <img src={backIcon} alt="Back" />
      </Back>
    </StyledControlsBack>
  )
}

// TODO: make sure back button goes to right place (if fruit and veg have been clicked or not)
// TODO: add validation

const ControlsNext = ({ incrementPage, page, setPage, values }) => {
  const nextOnClick = () => {
    const fruitSelected = values.categories.includes('fruit')
    const vegetablesSelected = values.categories.includes('vegetables')

    switch (page) {
      case Steps.Categories:
        return () => {
          if (vegetablesSelected) {
            return setPage(Steps.VegetableProportion)
          }
          if (fruitSelected) {
            return setPage(Steps.FruitProportion)
          }
          return setPage(Steps.Tags)
        }
      case Steps.VegetableProportion:
        return () =>
          fruitSelected ? setPage(Steps.FruitProportion) : setPage(Steps.Tags)
      default:
        return incrementPage
    }
  }

  return (
    <StyledControlsNext>
      {page === Steps.Results ? (
        <Next type="submit" onClick={nextOnClick()}>
          <img src={nextIcon} alt="Next" />
        </Next>
      ) : (
        <Next onClick={nextOnClick()}>
          <img src={nextIcon} alt="Next" />
        </Next>
      )}
    </StyledControlsNext>
  )
}

const MultiStep = ({ children }) => {
  const { foodPhoto } = useFoodDataState()

  const steps = React.Children.toArray(children)
  const pages = steps.map(step => step.type.componentName)
  const firstPage = R.head(pages)

  const [page, setPage] = useState(firstPage)

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
            <ControlsBack {...{ decrementPage, page, setPage, values }} />
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
            <ControlsNext
              {...{
                incrementPage,
                page,
                values,
                setPage,
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
  className: 'bg-lightgray px-4 flex flex-col items-center',
})``

const ImageContainer = styled.div`
  height: 300px;
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
  className: 'flex justify-center mt-4',
})``

const Next = styled.button.attrs({
  className: '',
})``

const FoodData = () => {
  return (
    <MultiStep>
      <Categories />
      <VegetableProportion />
      <FruitProportion />
      <Tags />
      <Results />
    </MultiStep>
  )
}

export default FoodData
