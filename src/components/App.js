import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import Loadable from 'react-loadable'

import { ScrollToTop, Loading } from 'components'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'
import { globalStyle } from './themes/globalStyle'

// inject global
globalStyle

const HomePage = Loadable({
  loader: () => import('components/pages/HomePage'),
  loading: Loading,
  delay: 300,
})

const DetailPage = Loadable({
  loader: () => import('components/pages/DetailPage'),
  loading: Loading,
  delay: 300,
})

const App = () => {
  return (
    <div>
      <Helmet titleTemplate="HANBIT - %s">
        <title>한빛 안경</title>
        <meta name="description" content="한빛 안경원" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="hanbitglasses.com" />
        <link rel="icon" href="http://hanbitglasses.com/icon.png" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Switch>
          <ScrollToTop path="/" component={HomePage} exact />
          <Route path="/account" render={() => <p>account</p>} exact />
          <Route path="/contact" render={() => <p>contact</p>} exact />
          <ScrollToTop path="/detail/:id" component={DetailPage} />
          <Route render={() => <p>404 NOT FOUND</p>} />
        </Switch>
      </ThemeProvider>
    </div>
  )
}

export default App
