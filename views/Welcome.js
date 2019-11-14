import React, { useState } from "react"
import styled from "styled-components"

//import { useRouteDispatch } from "../utils/routeContext"
//import { CHANGE_VIEW } from "../utils/constants"
const Stages = {
  Start: {
    // illustration:
    title: "Hi!",
    copy:
      "Thanks for agreeing to take part in Snapeat. A project to see how children in Lambeth and Southwark eat.",
    buttonText: "Start",
  },
  Next: {
    // illustration:
    title: "How does this work?",
    copy:
      "To take part, use this simple app to share what your child is eating for dinner each night for the next 3 months.",
    buttonText: "Next",
  },
  LetsGo: {
    //  illustration:
    title: "Get everyone involved!",
    copy:
      "Taking part is quick, easy and, hopefully, fun for you and your children too!",
    buttonText: "Let's go!",
  },
}

const Welcome = () => {
  // const routeDispatch = useRouteDispatch()

  const [stage, setStage] = useState(Stages.Start)

  return (
    <div className="pt-10 pb-4d5 px-4 h-screen">
      <Card stage={stage} />
      <div>
        <Dots stage={stage} />
        <Button stage={stage} setStage={setStage} />
      </div>
    </div>
  )
}

const Card = ({ stage }) => (
  <div className="text-navy bg-white rounded-card shadow-card px-6">
    <img src={stage.illustration} />
    <p className="font-extrabold font-xxl lh-xxl mb-1d5">{stage.title}</p>
    <p className="font-xl lh-xl">{stage.copy}</p>
  </div>
)
const Dots = () => <div />
const Button = () => <div />

export default Welcome
