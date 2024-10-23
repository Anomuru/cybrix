import {memo} from 'react';

import "./tableSkeleton.scss";

export const TableSkeleton = memo(() => {
    return (
        <div className="skeleton">
            <div className="skeleton__header"></div>
            <div className="skeleton__hr"></div>
            <div className="skeleton__section skeleton__section--table">
                <div className="skeleton__tr">
                    <div className="skeleton__td"></div>
                    <div className="skeleton__td"></div>
                    <div className="skeleton__td"></div>
                    <div className="skeleton__td"></div>
                    <div className="skeleton__td"></div>
                </div>
                <div className="skeleton__tr">
                    <div className="skeleton__td"></div>
                    <div className="skeleton__td"></div>
                    <div className="skeleton__td"></div>
                    <div className="skeleton__td"></div>
                    <div className="skeleton__td"></div>
                </div>
                <div className="skeleton__tr">
                    <div className="skeleton__td"></div>
                    <div className="skeleton__td"></div>
                    <div className="skeleton__td"></div>
                    <div className="skeleton__td"></div>
                    <div className="skeleton__td"></div>
                </div>
                <div className="skeleton__tr">
                    <div className="skeleton__td"></div>
                    <div className="skeleton__td"></div>
                    <div className="skeleton__td"></div>
                    <div className="skeleton__td"></div>
                    <div className="skeleton__td"></div>
                </div>
            </div>
        </div>
    )
})