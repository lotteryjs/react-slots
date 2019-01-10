/*
 * Copyright 2018 lotteryjs.com Technologies, Inc. All rights reserved.
 */
import * as React from 'react';
import { IElementProps } from '../PropsType';

export const PlaceHolderElement = (props: any) => {
    const { style, className, index } = props;
    return <div style={style} className={className} />;
};

export default (props: IElementProps) => {
    const { style, className, component } = props;
    return React.cloneElement(component, { className, style });
};
