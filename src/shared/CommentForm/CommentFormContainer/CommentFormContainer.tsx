import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import {RootState, updateComment} from '../../../store/store'
import { CommentForm } from '../CommentForm';

export function CommentFormContainer() {
  const value = useSelector<RootState, string>(state => state.commentState)
  const dispatch = useDispatch()

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateComment(event.target.value))
  }
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }
  return (
    <CommentForm value={value} 
    onChange={handleChange} 
    onSubmit={handleSubmit} />
  );
}
