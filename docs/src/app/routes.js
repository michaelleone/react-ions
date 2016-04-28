import React from 'react'
import { Route, Redirect, IndexRoute } from 'react-router'

// Base Layout
import Base from './layout/Base'

// Pages
import HomePage from './pages/Home/Page'
import ColorsPage from './pages/foundations/Colors/Page'
import TypographyPage from './pages/foundations/Typography/Page'
import IconographyPage from './pages/foundations/Iconography/Page'
import LayoutPage from './pages/foundations/Layout/Page'
import ProgressBarPage from './pages/components/ProgressBar/Page'
import IconsPage from './pages/components/Icons/Page'
import ButtonsPage from './pages/components/Buttons/Page'

const Routes = (
  <Route path='/' component={Base}>
    <IndexRoute component={HomePage} />
    <Redirect from='foundations' to='/foundations/colors' />
    <Route path='foundations' title='Foundations'>
      <Route path='colors' title='Colors' component={ColorsPage} />
      <Route path='typography' title='Typography' component={TypographyPage} />
      <Route path='iconography' title='Iconography' component={IconographyPage} />
      <Route path='layout' title='Layout' component={LayoutPage} />
    </Route>
    <Redirect from='components' to='/components/progress-bar' />
    <Route path='components' title='Components'>
      <Route path='progress-bar' title='Progress Bar' component={ProgressBarPage} />
      <Route path='icons' title='Icons' component={IconsPage} />
      <Route path='buttons' title='Buttons' component={ButtonsPage} />
    </Route>
    <Route path='patterns' title='Patterns'>
    </Route>
    <Route path='resources' title='Resources'>
    </Route>
  </Route>
)

export default Routes;
