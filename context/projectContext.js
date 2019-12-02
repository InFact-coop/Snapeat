import React from 'react'

import { NO_PROJECT, CHANGE_PROJECT } from '../utils/constants'

const initialState = { project: undefined, error: NO_PROJECT }

const ProjectStateContext = React.createContext()
const ProjectDispatchContext = React.createContext()

const projectReducer = (_, { project, type }) => {
  switch (type) {
    case CHANGE_PROJECT:
      return project
    default:
      return { error: NO_PROJECT }
  }
}

const ProjectProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(projectReducer, initialState)
  return (
    <ProjectStateContext.Provider value={state}>
      <ProjectDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectDispatchContext.Provider>
    </ProjectStateContext.Provider>
  )
}

const useProjectState = () => {
  const context = React.useContext(ProjectStateContext)
  if (context === undefined) {
    throw new Error(`useProjectState must be used within a ProjectProvider`)
  }
  return context
}

const useProjectDispatch = () => {
  const context = React.useContext(ProjectDispatchContext)
  if (context === undefined) {
    throw new Error(`useProjectDispatch must be used within a ProjectProvider`)
  }
  return context
}

export { ProjectProvider, useProjectState, useProjectDispatch }
