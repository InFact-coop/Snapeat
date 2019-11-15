import React, { useState } from "react"
import * as R from "ramda"

import { useRouteDispatch } from "../utils/routeContext"
import { GO_BACK } from "../utils/constants"

import * as Steps from "../components/onboarding"
import PostCode from "../components/onboarding/PostCode"
import Children from "../components/onboarding/Children"
import Projects from "../components/onboarding/Projects"
import Confirmation from "../components/onboarding/Confirmation"

const initialValues = {
  postCode: "",
  children: [],
  projects: [],
}

const MultiStep = ({ children }) => {
  const [page, setPage] = useState(Steps.Welcome)
  const [formCompleted, setFormCompleted] = useState(false)

  const steps = React.Children.toArray(children)
  const pages = steps.map(step => step.type.componentName)
  const activePage = R.find(R.pathEq(["type", "componentName"], page))(steps)

  const incrementPage = () => {
    const pageIndex = R.findIndex(R.equals(page))(pages)
    setPage(pages[pageIndex + 1])
  }

  const decrementPage = () => {
    const pageIndex = R.findIndex(R.equals(page))(pages)
    setPage(pages[pageIndex - 1])
  }
}

const Onboarding = () => {
  const routeDispatch = useRouteDispatch()
  return (
    <div>
      <h2></h2>
      <img src={illustration} alt="" />
      <button onClick={() => routeDispatch({ type: GO_BACK })}>Go back!</button>
    </div>
  )
}

export default Onboarding
