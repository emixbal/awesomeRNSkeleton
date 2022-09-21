import axios from 'axios'

function onError(error) {
    if ( !error || !error.response ) { 
        if ( !window.navigator.onLine ) { 
            console.log("onLine", window.navigator.onLine)
            alert("No internet connection")
        }
        return false
    }
 
    if (error.response.status === 401) {
        // signout()
    } else if (error.response.status === 400 ) {
        return error.response.data
    } else if (error.response.status === 404) { 
        return false
    } else { 
        alert("Connection error")
        return false
    }
}

function getInstance() {
    // const token = getToken()
    var headers = {}

    // if( token ) { 
    //     headers = {
    //         Authorization: `Bearer ${token}`,
    //     }
    // }

    return axios.create({
        headers
    });
}


export async function Post(url, params) {
    return getInstance().post(url, params).then((value) => value.data).catch(onError)
}

export async function Patch(url, params) {
    return getInstance().patch(url, params).then((value) => value.data).catch(onError)
}

export async function Put(url, params) {
    return getInstance().put(url, params).then((value) => value.data).catch(onError)
}

export async function Get(url, params) {
    return getInstance().get(url, {params}).then((value) => value.data).catch(onError)
}

export async function Delete(url, params) { 
    return getInstance().delete(url, params).then((value) => value.data).catch(onError)
}
