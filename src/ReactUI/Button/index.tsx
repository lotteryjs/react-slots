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

const Button: React.SFC<IButtonProps> = ({ children, buttonClassName, buttonStyle, renderButton }) => {
    const className = ClassNames(Styles.slotsButton, buttonClassName);
    const child = children as React.ReactElement<any>;
    const style = { ...child.props.style, ...buttonStyle };
    if (typeof renderButton === 'function') {
        const RenderElement = renderButton();
        return React.cloneElement(RenderElement, { onClick: start });
    }
    return React.cloneElement(child, { onClick: start, className, style });
};

export default Button;
