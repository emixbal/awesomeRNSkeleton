import { connect } from 'react-redux'
import App from './component'

import {
    changeLoading
} from './actions'


const mapStateToProps = (state) => ({
    ...state.home,
})

const mapDispatchToProps = {
    // ur actions,
    changeLoading
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)