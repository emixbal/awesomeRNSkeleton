import { connect } from 'react-redux'
import App from './component'

import {
    handleCheckAccessToken
} from './actions'


const mapStateToProps = (state) => ({
    ...state.router,
})

const mapDispatchToProps = {
    // ur actions,
    handleCheckAccessToken
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)