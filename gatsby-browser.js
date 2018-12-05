import React from 'react'
import ProjectProvider from './src/contexts/projectContext'
import AuthProvider from './src/contexts/authContext'

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = (
    <AuthProvider>
      <ProjectProvider>{element}</ProjectProvider>
    </AuthProvider>
  )

  return ConnectedRootElement
}
