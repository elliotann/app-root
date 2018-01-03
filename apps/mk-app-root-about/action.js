import React from 'react'
import { action as MetaAction, AppLoader } from 'fk-meta-engine'
import config from './config'

class action {
    constructor(option) {
        this.metaAction = option.metaAction
        this.config = config.current
    }

    onInit = ({ component, injections }) => {
        this.component = component
        this.injections = injections
        injections.reduce('init')
    }


    handleAboutClick = () => {
        this.component.props.onRedirect({ appName: 'mk-app-root-about', appParams: {} })
    }

    handleHelloClick = () => {
        this.component.props.onRedirect({ appName: 'mk-app-root-helloWorld', appParams: {} })
    }

}

export default function creator(option) {
    const metaAction = new MetaAction(option),
        o = new action({ ...option, metaAction }),
        ret = { ...metaAction, ...o }

    metaAction.config({ metaHandlers: ret })

    return ret
}