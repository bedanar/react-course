import React, { useEffect, useRef } from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom'
import {CommentForm} from '../CommentForm'
import CommentFormContainer from '../CommentForm/CommentFormContainer';

interface IPostProps {
  onClose?: () => void
}

export function Post(props: IPostProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof Node && !ref.current?.contains(event.target)){
        props.onClose?.()
      }
      
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const node = document.querySelector('#modal_root')
  if (!node) return null

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <h2>Title</h2>
      <div className={styles.content}>
        <p>sfidhifhsfisd</p>
        <p>sslnfdsvbskbvbs</p>
        <p>sldnsldnvsndn</p>
      </div>
      <CommentFormContainer />
    </div>), node
  );
}
