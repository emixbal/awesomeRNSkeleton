import { connect } from 'react-redux'
import App from './component'

import {
    changeLoading
} from './actions'

import { handleRemoveAccessToken } from "../../Router/actions";


const mapStateToProps = (state) => ({
    ...state.home,
})

const mapDispatchToProps = {
    // ur actions,
    changeLoading,
    handleRemoveAccessToken,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)