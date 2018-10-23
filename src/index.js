import App from './App'
import React from 'react'

import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'

const renderApp = (NextApp) => {
    render(
        <AppContainer>
            <NextApp />
        </AppContainer>,
        document.querySelector('[data-js="app"]')
    )
}

renderApp(App)

if(module.hot){
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default

        render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.querySelector('[data-js="app"]')
        )       
    })
}