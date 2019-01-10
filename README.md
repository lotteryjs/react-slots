# react-slots
a slots machine game component based on [React.js](https://github.com/facebook/react/)

![slots game](https://raw.githubusercontent.com/lotteryjs/slots/master/screenshots.png)

## Installation

use [npm](https://npmjs.org/) to install:

    $ npm install react-slots

## Examples
```tsx
import * as React from 'react';
import SlotsComponent from 'react-slots-component';

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
        const elementStyle = {
            width: '50px',
            height: '50px',
            margin: '4px',
            border: '2px solid orange',
        };
        const items = [
            <img key='apple' src={Apple} style={elementStyle} alt=''/>,
            <img key='aubergine' src={Aubergine} style={elementStyle} alt=''/>,
            <img key='carrot' src={Carrot} style={elementStyle} alt=''/>,
            <img key='cheese' src={Cheese} style={elementStyle} alt=''/>,
            <img key='fries' src={Fries} style={elementStyle} alt=''/>,
            <img key='grapes' src={Grapes} style={elementStyle} alt=''/>,
            <img key='groceries' src={Groceries} style={elementStyle} alt=''/>,
            <img key='lemon' src={Lemon} style={elementStyle} alt=''/>,
            <img key='orange' src={Orange} style={elementStyle} alt=''/>,
            <img key='pineapple' src={Pineapple} style={elementStyle} alt=''/>,
            <img key='salad' src={Salad} style={elementStyle} alt=''/>,
            <img key='sandwich' src={Sandwich} style={elementStyle} alt=''/>,
        ];
        const buttonStyle: React.CSSProperties  = {
            position: 'absolute',
            top: '68px',
            left: '68px',
            width: '120px',
            height: '120px',
        };
        const button = <img src={Start} style={buttonStyle} alt='' />;
        const activeStyle = {
            background: 'orange',
        };
        const callback = ({ type, finalIndex }: any) => {
            console.log(type, finalIndex);
        };
        const setAsyncFinalIndex = (): number | Promise<number> => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(10);
                }, 2000);
            });
        };
        return (
            <SlotsComponent
              setAsyncFinalIndex={setAsyncFinalIndex}
              items={items}
              elementStyle={elementStyle}
              activeStyle={activeStyle}
              button={button}
              callback={callback}
            />
        );
    }
}

```
# API Documentation
see [https://techjs.cn/docs/react-slots/index.html](https://techjs.cn/docs/react-slots/index.html)
