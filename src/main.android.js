/**
 * React Native Webpack Starter Kit
 * https://github.com/jhabdas/react-native-webpack-starter-kit
 */
import React, { Component, PropTypes } from 'react'
import { AppRegistry } from 'react-native'
import App from './components/App'

class Root extends Component {
  render() {
    return (<App />)
  }
}

Root.propTypes = {
  instructions: PropTypes.string,
}

Root.defaultProps = {
  ...App.defaultProps,
  instructions: 'Shake or press menu button for dev menu',
}

AppRegistry.registerComponent('App', () => Root)
