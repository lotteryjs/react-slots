/*
 * Copyright 2018 lotteryjs.com Technologies, Inc. All rights reserved.
 */

import * as React from 'react';
import * as ClassNames from 'classnames';
import { IGridsProps } from '../PropsType';
import Emitter from '../Emitter';
import Element from '../Element';
import { getElementNumber } from '../../core';
import * as Styles from './index.scss';

interface  ILocalGridProps extends IGridsProps {
    matrix?: number[][];
}

interface IGridState {
    activeIndex: number;
}
export default class Grids extends React.Component<ILocalGridProps, IGridState> {
    private static defaultProps: ILocalGridProps = {
        finalIndex: -1,
    };
    private raf: number;
    constructor(props: ILocalGridProps) {
        super(props);
        this.state = {
            activeIndex: -1,
        };
        this.listenEvent();
    }
    public render() {
        const { matrix, items, activeStyle, activeClassName } = this.props;
        const { activeIndex } = this.state;
        return matrix.map((row, rowIndex) => {
            return (
                <div className={Styles.slotsRow} key={rowIndex}>
                    {
                        row.map((element, index) => {
                            const component = items[element - 1];
                            const isActive = activeIndex + 1 === element  && element > 0;
                            const className = ClassNames(Styles.slotsElement, { active : isActive }, { [`${activeClassName}`] : isActive });
                            return <Element className={className} style={isActive ? activeStyle : {}} component={component} key={index} />;
                        })
                    }
                </div>
            );
        });
    }
    private listenEvent() {
        Emitter.addListener('SLOTS.START', this.roll.bind(this));
    }
    private roll() {
        const { matrix, finalIndex, timeout, callback } = this.props;
        const FPS = 60;
        const accelerated = 0.98;
        const minSpeed = 10;
        const startTime = Date.now();
        let { activeIndex } = this.state;
        let speed = 60;
        let count = FPS;
        let loopCounter = 0;
        let nowTime = Date.now();
        const rollLoop = () => {
            // reset the `activeIndex` when rolled a cirle.
            speed *= loopCounter > 4 ? accelerated : 1;
            speed = speed < minSpeed ? minSpeed : speed;
            count += speed;
            if (activeIndex + 1 > getElementNumber(matrix)) {
                this.setState({
                    activeIndex: activeIndex = 0,
                });
                count = 0;
                loopCounter ++;
                nowTime = Date.now();
            } else if (count - FPS > 0) {
                this.setState({
                    activeIndex: ++activeIndex,
                });
                count = 0;
            }
            // timeout
            if (nowTime - startTime >= timeout) {
                window.cancelAnimationFrame(this.raf);
                this.setState({
                    activeIndex: -1,
                });
                callback({
                    type: 'TIMEOUT',
                });
                return;
            }
            // Found the target Index, and the speed less than minSpeed.
            if (finalIndex === activeIndex && speed <= minSpeed) {
                window.cancelAnimationFrame(this.raf);
                if (typeof callback === 'function') {
                    callback({
                        type: 'SUCCESS',
                        finalIndex,
                    });
                }
                return;
            }
            this.raf = window.requestAnimationFrame(rollLoop);
        };
        this.raf = window.requestAnimationFrame(rollLoop);
    }
}
