"use client"

import { FC } from 'react';
import Styles from '../scss/components/mouseScroll.module.scss'

const MouseScroll: FC = () => {
    return (
        <svg className={Styles.svg} width="40px" height="80px" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path className={Styles.wheel}  id="wheel" d="M123.359,79.775l0,72.843" style={{ fill: 'none', stroke: '#fff', strokeWidth: '15px' }} />
            <path className={Styles.mouse}  id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{ fill: 'none', stroke: '#fff', strokeWidth: '20px' }} />
        </svg>
    );
}

export default MouseScroll;