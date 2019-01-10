/*
 * Copyright 2018 lotteryjs.com Technologies, Inc. All rights reserved.
 */
import * as React from 'react';

/**
 * Button properties.
 */
export interface IButtonProps {
    /** Custom button class */
    buttonClassName?: string;
    /** Button style */
    buttonStyle?: React.CSSProperties;
    /** If provided, a button is rendered for this section.  */
    renderButton?: () => JSX.Element;
}

/**
 * Active properties.
 */
interface IActiveProps {
    /** The class of element when is active */
    activeClassName?: string;
    /** The style of element when is active  */
    activeStyle?: React.CSSProperties;
}

export interface IElementProps {
    className?: string;
    style?: React.CSSProperties;
    component?: JSX.Element;
}

/**
 * Grid properties.
 */
export interface IGridsProps extends IActiveProps, ICallbackProps {
    /** The element of slots. */
    items?: JSX.Element[];
    /** The index of target element. */
    finalIndex?: number;
    /** get index of target element with asynchronous . */
    setAsyncFinalIndex?: () => number | Promise<number>;
    /** Will fire when not found target element. */
    timeout?: number;
    /** Element style  */
    elementStyle?: React.CSSProperties;
}

interface ICallbackProps {
    /**
     * The callback funtion at the end.
     *
     * @param {String} type One of `SUCCESS`, `TIMEOUT`, `ERROR`.
     * @param {number} finalIndex The index of target element.
     */
    callback?: (args: { type: 'SUCCESS' | 'TIMEOUT' | 'ERROR'; finalIndex?: number }) => any;
}

/**
 * Basic properties.
 */
export interface ISlotsProps extends IButtonProps, IActiveProps, IGridsProps, ICallbackProps {
    /** The number of rows  */
    rows?: number;
    /** The number of columns */
    cols?: number;
    /** The start button */
    button?: JSX.Element;
    /** Custom component class */
    className?: string;
    /** Component style */
    style?: React.CSSProperties;
}
