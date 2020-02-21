import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { auth } from 'helpers'

const RouteWithLayout = props => {
  const {
    restricted,
    location,
    layout: Layout,
    component: Component,
    ...otherParams
  } = props

  const authorized = !restricted || (restricted && auth.isAuthenticated())

  return(
    <Route
      {...otherParams}
      render={matchProps => (
        authorized ? (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: {
                from: location
            }}}
          />
        )
      )}
    />
  )
}

RouteWithLayout.propTypes = {
  restricted: PropTypes.bool,
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
}

RouteWithLayout.defaultProps = {
  restricted: true
}

export default RouteWithLayout
