import React from 'react';
import PropTypes from 'prop-types';
import { APIContext } from '../../../../context';
import RainSVG from './rainSVG';
import SnowSVG from './snowSVG';
import ThunderSVG from './thunderSVG';
import ConvertTemp from '../../../ConvertTemp';
import { sun } from '../sunSVG';
import { moon } from '../moonSVG';

const cloudSVG = ({ getRain, getThunder, getTime, getCloud, getSnow }) => {

    const cloud = (
        <svg className={`cloud:SVG cloud:SVG_${getCloud}`} viewBox="0 -87 463.83425 463" xmlns="http://www.w3.org/2000/svg">
            <path d="m375.835938 112.957031c-5.851563 0-11.691407.582031-17.425782 1.742188-4.324218-21.582031-18.304687-39.992188-37.933594-49.957031-19.625-9.964844-42.738281-10.382813-62.714843-1.136719-18.078125-49.796875-73.101563-75.507813-122.898438-57.429688s-75.507812 73.105469-57.429687 122.898438c-43.621094 1.378906-78.078125 37.484375-77.4257815 81.121093.6562495 43.640626 36.1835935 78.691407 79.8281255 78.761719h296c48.597656 0 88-39.398437 88-88 0-48.601562-39.402344-88-88-88zm0 0" />
        </svg>
    )

    const timeOfDay = el => {
        const time = {
            'day': <div className="cloudTime cloudTime:sun">{sun}</div>,
            'night': <div className="cloudTime cloudTime:moon">{moon}</div>
        }

        return time[el];
    }

    return (
        <APIContext.Consumer>
            {({ temp }) => (
                <div className="cloudBlock">
                    <div className="cloud cloud:left">
                        {cloud}
                        {getRain && <RainSVG />}
                        {getSnow && <SnowSVG />}
                    </div>

                    <div className="cloud">
                        {timeOfDay(getTime)}
                        {cloud}
                        {getRain && <RainSVG />}
                        {getThunder && <ThunderSVG />}
                        {getSnow && <SnowSVG />}

                        <ConvertTemp />
                    </div>

                    <div className="cloud cloud:right">
                        {cloud}
                        {getRain && <RainSVG />}
                        {getSnow && <SnowSVG />}
                    </div>
                </div>
            )}
        </APIContext.Consumer>
    )
}

cloudSVG.propTypes = {
    onRain: PropTypes.bool,
    getThunder: PropTypes.bool,
    getTime: PropTypes.string,
    getCloud: PropTypes.number.isRequired
};

cloudSVG.defaultProps = {
    getCloud: 1
};

export default cloudSVG;