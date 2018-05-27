/*
 * Copyright 2018 lotteryjs.com Technologies, Inc. All rights reserved.
 */

import * as React from 'react';
import Emitter from '../Emitter';
import * as ClassNames from 'classnames';
import { IButtonProps } from '../PropsType';
import * as Styles from './index.scss';

const start = () => {
    Emitter.emit('SLOTS.START');
};

const Button: React.SFC<IButtonProps> = ({ children, buttonClassName, buttonStyle, buttonRender }) => {
    const className = ClassNames(Styles.slotsButton, buttonClassName);
    if (typeof buttonRender === 'function') {
        const RenderElement = buttonRender();
        return React.cloneElement(RenderElement, { onClick: start });
    }
    return <div onClick={start} className={className} style={buttonStyle}>{children}</div>;
};

export default Button;
