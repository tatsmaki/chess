import React from 'react'
import { createBrowserHistory } from 'history'
import { Router as AppRouter, Route, Switch } from 'react-router-dom'

import { Scene } from '@/components/pages/Scene'

const history = createBrowserHistory()

const Router = () => {
  return (
    <AppRouter history={history}>
      <Switch>
        <Route strict path="/" component={Scene} />
      </Switch>
    </AppRouter>
  )
}

export { Router }
