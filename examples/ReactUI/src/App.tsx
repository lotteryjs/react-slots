/*
 * Copyright 2018 lotteryjs.com Technologies, Inc. All rights reserved.
 *
 */

import * as React from 'react';
import Slots from '../../../src/ReactUI';

/**
 * the img of slots
 */
import * as Apple from '../img/apple.png';
import * as Aubergine from '../img/aubergine.png';
import * as Carrot from '../img/carrot.png';
import * as Cheese from '../img/cheese.png';
import * as Fries from '../img/fries.png';
import * as Grapes from '../img/grapes.png';
import * as Groceries from '../img/groceries.png';
import * as Lemon from '../img/lemon.png';
import * as Orange from '../img/orange.png';
import * as Pineapple from '../img/pineapple.png';
import * as Salad from '../img/salad.png';
import * as Sandwich from '../img/sandwich.png';
import * as Start from '../img/start.png';

export class App extends React.PureComponent<any, any> {
    public render() {
        const imgStyle = {
            display: 'block',
            width: '100%',
            height: '100%',
        };
        const items = [
            <img key='apple' src={Apple} style={imgStyle} alt=''/>,
            <img key='aubergine' src={Aubergine} style={imgStyle} alt=''/>,
            <img key='carrot' src={Carrot} style={imgStyle} alt=''/>,
            <img key='cheese' src={Cheese} style={imgStyle} alt=''/>,
            <img key='fries' src={Fries} style={imgStyle} alt=''/>,
            <img key='grapes' src={Grapes} style={imgStyle} alt=''/>,
            <img key='groceries' src={Groceries} style={imgStyle} alt=''/>,
            <img key='lemon' src={Lemon} style={imgStyle} alt=''/>,
            <img key='orange' src={Orange} style={imgStyle} alt=''/>,
            <img key='pineapple' src={Pineapple} style={imgStyle} alt=''/>,
            <img key='salad' src={Salad} style={imgStyle} alt=''/>,
            <img key='sandwich' src={Sandwich} style={imgStyle} alt=''/>,
        ];
        const slotsStyle = {
            width: '256px',
            height: '256px',
        };
        const button = <img src={Start} style={{width: '100%'}} alt='' />;
        const activeStyle = {
            background: 'orange',
        };
        const callback = ({ type, finalIndex }: any) => {
            // callback
        };
        return (
            <Slots finalIndex={5} items={items} style={slotsStyle} activeStyle={activeStyle} button={button} callback={callback}/>
        );
    }
}
