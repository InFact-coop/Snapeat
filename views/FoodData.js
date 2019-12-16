import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import axios from 'axios'
import * as R from 'ramda'

import {
  GO_BACK,
  CHANGE_VIEW,
  HOME,
  FRUIT,
  VEGETABLES,
} from '../utils/constants'

import { useRouteDispatch } from '../context/routeContext'
import { useFoodDataState } from '../context/foodDataContext'
import { useAuth } from '../context/authContext'

import * as Steps from '../components/foodData'
import Categories from '../components/foodData/Categories'
import VegetableProportion from '../components/foodData/VegetableProportion'
import FruitProportion from '../components/foodData/FruitProportion'
import Tags from '../components/foodData/Tags'
import Spinner from '../components/foodData/Spinner'
import Results from '../components/foodData/Results'
import Success from '../components/foodData/Success'
import Error from '../components/foodData/Error'

import backIcon from '../public/icons/back_white.svg'
import nextIcon from '../public/icons/btn_round-next.svg'

const initialValues = {
  categories: [],
  proportionFruit: '',
  proportionVeg: '',
  tags: [],
}

// const initialValues = {
//   categories: ['fruit', 'vegetables', 'pasta', 'oil'],
//   proportionFruit: 'quarter',
//   proportionVeg: 'quarter',
//   tags: ['#readymeal', '#quickandeasy', '#vegetarian'],
// }

const FoodData = () => {
  return (
    <MultiStep>
      <Categories />
      <VegetableProportion />
      <FruitProportion />
      <Tags />
      <Results />
      <Spinner />
      <Success />
      <Error />
    </MultiStep>
  )
}

const MultiStep = ({ children }) => {
  const { foodPhoto } = useFoodDataState()

  const { snapeatUser } = useAuth()

  const steps = React.Children.toArray(children)
  const pages = steps.map(step => step.type.componentName)
  const firstPage = R.head(pages)

  const [page, setPage] = useState(firstPage)
  const [lastPage, setLastPage] = useState(page)
  const [reachedResults, setReachedResults] = useState(false)

  // tracks last page visited to help navigating between pages from results page
  const updatePage = destination => {
    setLastPage(page)
    setPage(destination)
  }

  useEffect(() => {
    if (page === Steps.Results) {
      setReachedResults(true)
    }
  }, [page])

  const activePage = R.find(R.pathEq(['type', 'componentName'], page))(steps)

  const incrementPage = () => {
    const pageIndex = R.findIndex(R.equals(page))(pages)
    updatePage(pages[pageIndex + 1])
  }

  const decrementPage = () => {
    const pageIndex = R.findIndex(R.equals(page))(pages)
    updatePage(pages[pageIndex - 1])
  }

  const { validation } = activePage && activePage.type

  const formLayout = () => {
    switch (page) {
      case Steps.Success:
        return false
      case Steps.Spinner:
        return false
      case Steps.Error:
        return false
      default:
        return true
    }
  }

  return (
    <Formik
      {...{
        initialValues,
        validation,
        onSubmit: onSubmit({
          incrementPage,
          snapeatUser,
        }),
        enableReinitialize: false,
      }}
    >
      {({ validateForm, values, setTouched, setFieldValue, errors }) => {
        return (
          <Container>
            <ControlsBack
              {...{
                reachedResults,
                decrementPage,
                page,
                lastPage,
                updatePage,
                values,
              }}
            />
            {formLayout() && (
              <ImageContainer className="relative" src={foodPhoto.fileURL} />
            )}
            <FormContainer formLayout={formLayout} page={page}>
              <StyledForm>
                <RenderStep
                  {...{
                    validateForm,
                    page,
                    setTouched,
                    activePage,
                    props: {
                      setPage,
                      updatePage,
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
                  setFieldValue,
                  foodPhoto,
                  snapeatUser,
                  reachedResults,
                }}
              />
            </FormContainer>
          </Container>
        )
      }}
    </Formik>
  )
}

const onSubmit = ({
  setPage,
  snapeatUser: { email },
  foodPhoto,
}) => async values => {
  setPage(Steps.Spinner)

  const data = new FormData()
  data.set('photo', foodPhoto.file, foodPhoto.fileName)

  try {
    //eslint-disable-next-line no-console
    console.log('Food data values', values)

    // upload photo to cloudinary
    const {
      data: { url },
    } = await axios.post(`${process.env.HOST}/api/upload-photo`, data)

    // upload meal to DB
    axios
      .post(`${process.env.HOST}/api/submit-food-data`, {
        imageURL: url,
        user: {
          email,
        },
        ...values,
      })
      .then(() => setPage(Steps.Success))
      .catch(() => setPage(Steps.Error))

    return
  } catch (e) {
    // TODO: trigger submit error (maybe with toast error)
    setPage(Steps.Error)

    //eslint-disable-next-line no-console
    console.error('Error submitting food data form', e)
  }
}

const ControlsBack = ({
  reachedResults,
  decrementPage,
  page,
  updatePage,
  values,
}) => {
  const routeDispatch = useRouteDispatch()

  const backOnClick = () => {
    const vegetablesSelected = values.categories.includes('vegetables')
    const fruitSelected = values.categories.includes('fruit')

    switch (page) {
      case Steps.Categories:
        return () => routeDispatch({ type: GO_BACK })
      case Steps.FruitProportion:
        return () =>
          vegetablesSelected
            ? updatePage(Steps.VegetableProportion)
            : updatePage(Steps.Categories)
      case Steps.Tags:
        return () => {
          if (fruitSelected) {
            return updatePage(Steps.FruitProportion)
          }
          if (vegetablesSelected) {
            return updatePage(Steps.VegetableProportion)
          }
          return updatePage(Steps.Categories)
        }
      default:
        return decrementPage
    }
  }

  return (
    !(page === (Steps.Success || Steps.Spinner || Steps.Error)) &&
    !reachedResults && (
      <StyledControlsBack>
        <Back onClick={backOnClick()}>
          <img src={backIcon} alt="Back" />
        </Back>
      </StyledControlsBack>
    )
  )
}

// TODO: make sure back button goes to right place (if fruit and veg have been clicked or not)
// TODO: add validation

const ControlsNext = ({
  incrementPage,
  page,
  setPage,
  values,
  setFieldValue,
  foodPhoto,
  snapeatUser,
  reachedResults,
}) => {
  const routeDispatch = useRouteDispatch()
  const fruitSelected = values.categories.includes(FRUIT)
  const fruitProportionEmpty = values.proportionFruit === ''
  const vegetablesSelected = values.categories.includes(VEGETABLES)
  const vegetableProportionEmpty = values.proportionVeg === ''

  const getNextFromCategories = () => {
    if (vegetablesSelected && vegetableProportionEmpty) {
      return setPage(Steps.VegetableProportion)
    }
    if (fruitSelected && fruitProportionEmpty) {
      return setPage(Steps.FruitProportion)
    }
    if (reachedResults) {
      return setPage(Steps.Results)
    }
    return setPage(Steps.Tags)
  }

  const getNextPage = () => {
    switch (page) {
      case Steps.Categories:
        return getNextFromCategories()

      case Steps.VegetableProportion:
        if (fruitSelected && fruitProportionEmpty) {
          return setPage(Steps.FruitProportion)
        }
        if (reachedResults) {
          return setPage(Steps.Results)
        }
        return setPage(Steps.Tags)

      case Steps.FruitProportion:
        return reachedResults ? setPage(Steps.Results) : setPage(Steps.Tags)
      case Steps.Results:
        return onSubmit({ setPage, snapeatUser, foodPhoto })(values)
      case Steps.Success:
        return routeDispatch({ type: CHANGE_VIEW, view: HOME })
      case Steps.Error:
        return routeDispatch({ type: CHANGE_VIEW, view: HOME })
      default:
        return incrementPage()
    }
  }

  const nextOnClick = () => {
    // resets proportion values if fruit/veg have been unselected
    if (!fruitSelected && !fruitProportionEmpty) {
      setFieldValue('proportionFruit', '')
    }

    if (!vegetablesSelected && !vegetableProportionEmpty) {
      setFieldValue('proportionVeg', '')
    }

    // regular functions for next button
    return getNextPage(vegetablesSelected, fruitSelected)
  }

  switch (page) {
    case Steps.Success: {
      return (
        <StyledControlsDone>
          <Next onClick={nextOnClick}>Done</Next>
        </StyledControlsDone>
      )
    }
    case Steps.Error: {
      return (
        <StyledControlsDone>
          <Next onClick={nextOnClick}>Try again</Next>
        </StyledControlsDone>
      )
    }
    case Steps.Spinner: {
      return <div />
    }
    default: {
      return (
        <StyledControlsNext>
          {page === Steps.Results ? (
            <Next type="submit" onClick={nextOnClick}>
              <img src={nextIcon} alt="Next" />
            </Next>
          ) : (
            <Next onClick={nextOnClick}>
              <img src={nextIcon} alt="Next" />
            </Next>
          )}
        </StyledControlsNext>
      )
    }
  }
}

const RenderStep = ({ activePage, validateForm, page, setTouched, props }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    setTouched({})
    validateForm()
  }, [page])

  return React.cloneElement(activePage, props)
}

const StyledForm = styled(Form).attrs({
  className: 'bg-lightgray flex flex-col items-center',
})``

const ImageContainer = styled.div.attrs({
  role: 'img',
  'aria-label': "Photo of user's dinner",
})`
  height: 400px;
  width: 100vw;
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: cover;
`

const StyledControlsBack = styled.nav.attrs({
  className: 'absolute top-0 min-w-full z-10',
})``

const Back = styled.button.attrs({
  className: 'm-4',
})``

const StyledControlsNext = styled.nav.attrs({
  className: 'flex justify-center pt-4 w-full bg-white',
})`
  z-index: 30000;
`

const StyledControlsDone = styled.nav.attrs({
  className:
    'text-white text-lg text-center absolute bg-navy mx-4 rounded-button shadow-button',
})`
  bottom: 40px;
  width: calc(100vw - 32px);
  padding: 15px 0px;
`

const Next = styled.button.attrs({
  className: '',
})``

const Container = styled.main`
  background-color: ${cssTheme('colors.white')};
`
const FormContainer = styled.div.attrs({
  className: 'absolute',
})`
  top: ${({ page, formLayout }) => {
    return formLayout(page) ? `300px;` : `0px;`
  }};
  min-height: ${({ page, formLayout }) => {
    return formLayout(page) ? `auto;` : `100%;`
  }};
`

export default FoodData
