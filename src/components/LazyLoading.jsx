import React, { Component, Suspense, lazy } from 'react'
const RBootstrap = lazy(() => import('./RBootstrap'));

export default class LazyLoading extends Component {
    render() {
        return (
            <div>
                <Suspense fallback={<h1>Please Wait...</h1>}>
                    <h1>LazyLoading</h1>
                    <RBootstrap />
                </Suspense>
            </div>
        )
    }
}
