import { connect } from 'react-redux'
import App from './component'

import {
    changeLoading, changeUsername, changePassword,
    handleSignIn,
} from './actions'


const mapStateToProps = (state) => ({
    ...state.login,
})

const mapDispatchToProps = {
    // ur actions,
    changeLoading, changeUsername, changePassword,
    handleSignIn,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)