import { connect } from 'react-redux'
import App from './component'

import {
    change_loading
} from './actions'


const mapStateToProps = (state) => ({
    ...state.home,
})

const mapDispatchToProps = {
    // ur actions,
    change_loading
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)