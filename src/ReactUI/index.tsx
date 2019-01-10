/*
 * Copyright 2018 lotteryjs.com Technologies, Inc. All rights reserved.
 */

import * as React from 'react';
import * as ClassNames from 'classnames';
import '../lib/raf';
import { ISlotsProps } from './PropsType';
import Grid from './Grid';
import { getSpiralMatrixArray } from '../core';
import Button from './Button';
import * as Styles from './index.scss';

/**
 * The react component of Slots.
 * @example ./example.md
 */
export class SlotsComponent extends React.PureComponent<ISlotsProps, {}> {
    private static defaultProps: ISlotsProps = {
        finalIndex: -1,
        rows: 4,
        cols: 4,
        items: [],
        timeout: 10000, // 10s
    };
    constructor(props: ISlotsProps) {
        super(props);
    }
    public render() {
        const { items, style, button, className: customClassName, callback, ...rest } = this.props;
        const spiralMatrixArray = this.getSpiralMatrixArray();
        const className = ClassNames(Styles.slots, customClassName);
        return (
            <div className={className} style={style}>
                <Grid matrix={spiralMatrixArray} items={items} callback={callback} {...rest} />
                <Button {...rest}>{button}</Button>
            </div>
        );
    }
    private getSpiralMatrixArray() {
        const { rows, cols} = this.props;
        return getSpiralMatrixArray(rows, cols);
    }
}

export default SlotsComponent;
