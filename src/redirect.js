import { Component, PropTypes } from 'react'

export default class Redirect extends Component {

  static propTypes = {
    redirectPath: PropTypes.string.isRequired,
    redirect: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.redirect(this.props, this.props.redirectPath)
  }

  render() {
    // Redirect should happen before this is rendered
    return null
  }
}