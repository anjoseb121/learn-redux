import * as React from 'react';
import { Link } from 'react-router'

export const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Pepestagram</Link>
                </h1>
            </div>
        )
    }
})