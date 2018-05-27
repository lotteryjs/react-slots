/*
 * Copyright 2018 lotteryjs.com Technologies, Inc. All rights reserved.
 */
import * as React from 'react';
import { IElementProps } from '../PropsType';

export default class Element extends React.Component<IElementProps, any> {
    private static defaultProps: IElementProps = {
    };
    public render() {
        const { style, className, component } = this.props;
        return (
            <div className={className} style={style} >
                {component}
            </div>
        );
    }
}
