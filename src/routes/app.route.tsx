import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Initial from '../pages/initial'

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact component={Initial} />
  </Switch>
)

export default AppRoutes
