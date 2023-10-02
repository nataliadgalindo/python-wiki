import React, { useContext, useState } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [path, setPath] = useState(0)

  return (
    <AppContext.Provider value={{ path, setPath }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
