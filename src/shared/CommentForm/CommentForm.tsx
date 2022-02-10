import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { commentContext } from '../Context/commentContext';
import styles from './commentform.css';

export function CommentForm() {
  const {value, onChange} = useContext(commentContext)

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }
  return (
    <form action="" className={styles.form} onSubmit={handleSubmit}>
      <textarea name="" id=""  className={styles.input} value={value} onChange={handleChange} /> 
      <button className={styles.submitBtn} type="submit">Comment</button>
    </form>
  );
}
