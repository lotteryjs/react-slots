/*
 * Copyright 2018 lotteryjs.com Technologies, Inc. All rights reserved.
 */
import * as React from 'react';

/**
 * Button properties.
 */
export interface IButtonProps {
    /** 按钮样式名称 */
    buttonClassName?: string;
    /** 按钮自定义样式 */
    buttonStyle?: React.CSSProperties;
    /** 按钮render回调 */
    buttonRender?: () => JSX.Element;
}

/**
 * Active properties.
 */
interface IActiveProps {
    /** 转盘元素激活时样式名称 */
    activeClassName?: string;
    /** 转盘元素激活时样式 */
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
    /** 转盘元素 */
    items?: JSX.Element[];
    /** 目标索引，从0开始 */
    finalIndex: number;
    /** 超时时间 */
    timeout?: number;
}

interface ICallbackProps {
    /** 结束滚动的回调，回调参数：`SUCCESS`为成功，`TIMEOUT`为超时，`ERROR`为异常 */
    callback?: (args: { type: 'SUCCESS' | 'TIMEOUT' | 'ERROR'; finalIndex?: number }) => any;
}

/**
 * Basic properties.
 */
export interface ISlotsProps extends IButtonProps, IActiveProps, IGridsProps, ICallbackProps {
    /** 转盘行数 */
    rows?: number;
    /** 转盘列数 */
    cols?: number;
    /** 开始按钮 */
    button?: JSX.Element;
    /** 样式名称 */
    className?: string;
    /** 自定义样式 */
    style?: React.CSSProperties;
    // renderItem?: (element: IElementProps, index: number) => React.ReactElement<any>;
}
