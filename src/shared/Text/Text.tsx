import React from 'react';
import styles from './text.css';
import classNames from 'classnames'


type TSizes = 28 | 20 | 16 | 14 | 12 | 10;
type EColor = {
  black: 'black',
  white: 'white',
  greyC4: 'greyC4'
}

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode,
  size: TSizes,
  mobileSize?: TSizes,
  tabletSize?: TSizes,
  desktopSize?: TSizes,
  color?: EColor,
}

export function Text(props: ITextProps){
  const {As = 'span', children, size, color, mobileSize, desktopSize, tabletSize} = props
  const classes = classNames(
    styles[`s${size}`],
    {[styles[`m${mobileSize}`]] : mobileSize},
    {[styles[`t${tabletSize}`]] : tabletSize},
    {[styles[`d${desktopSize}`]] : desktopSize},
    // styles[color]
  )
  return (
    <As className = {classes}>
      {children}
    </As>
  );
}
