import React from 'react'
import Routes from './Routes'
import { EmployeeProvider } from '../src/Context/EmployeeContext';

const App = () => {
  return (
    <div>
        <EmployeeProvider>
      <Routes/>
      </EmployeeProvider>

    </div>
  )
}

export default App