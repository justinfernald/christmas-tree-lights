import { ButtonHTMLAttributes } from 'react';
import { flexCenter } from '../styles';
import { css } from '@emotion/react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { icon, ...rest } = props;

  const buttonStyles = css({
    background: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: 5,
    height: 40,
    width: icon ? 40 : undefined,
    padding: 10,
    border: '1px solid #00000055',
    fontSize: 16,
    transition: '0.3s ease',
    backfaceVisibility: 'hidden',
    willChange: 'transform',
    transform: 'perspective(1px) translateZ(0)',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    ':hover': {
      background: '#036cdd',
    },
    ':active': {
      transform: 'perspective(1px) translateZ(0) scale(0.98)',
    },
    ':disabled': {
      background: '#858585',
      cursor: 'not-allowed',
    },
  });

  return <button {...rest} css={[buttonStyles, flexCenter]} />;
};
