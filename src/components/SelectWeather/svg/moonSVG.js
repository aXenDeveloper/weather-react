import React from 'react';
import { APIContext } from '../../../context';

export const moon = (
    <svg className="moon" viewBox="-8 0 464 464.177" xmlns="http://www.w3.org/2000/svg">
        <path d="m360.089844 336.164062c-92.785156 0-168-75.214843-168-168 .945312-71.269531 45.359375-134.714843 112-160-23.476563-6.1875-47.738282-8.882812-72-8-128.132813 0-232.0000002 103.871094-232.0000002 232 0 128.128907 103.8671872 232 232.0000002 232 97.191406 1.050782 184.175781-60.15625 216-152-26.28125 16.601563-56.929688 24.960938-88 24zm0 0" />
    </svg>
)

const moonSVG = () => (
    <APIContext.Consumer>
        {({ temp }) => (
            <div className="moonBlock">
                {moon}
                <div className="temp">{temp}&#176;</div>
            </div>
        )}
    </APIContext.Consumer>
)

export default moonSVG;