import React from 'react';
import styles from './Paragraph.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
  type?: any;
};

const Paragraph: React.FC<Props> = (props) => {
  //   const style = paragraphStyles[props.type] || {};
  return <p className={`${styles.paragraph} ${props.className}`}>{props.children}</p>;
};

export default Paragraph;
