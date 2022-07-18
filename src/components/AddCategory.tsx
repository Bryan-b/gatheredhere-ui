import React, { useState } from 'react';
import { TextVariant } from 'utils/constants';
import { Button } from './Button';
import { Card } from './Card';
import { Text } from './Text';
import useCategoryActions from 'hooks/useCategoryActions';
import useCategories from 'hooks/useCategories';

export type AddCategoryProps = { className?: string };

export function AddCategory({ className = '' }: AddCategoryProps) {
  let { addCategory } = useCategoryActions()
  let categories = useCategories()

  let [key, setKey] = useState('')
  let [title, setTitle] = useState('')

  function clear() {
    setKey('')
    setTitle('')
  }
 
  function submit(){
    if(key === '' || title === ''){
      console.log(`please all fields are required`)
    }
    // if()

    addCategory({key, title})
    clear()
  }
  return (
    <Card
      title="New Category"
      className={` ${className}`}
      actions={[<Button onClick={clear}>Clear</Button>, <Button onClick={submit}>Save</Button>]}
    >
      <div className="grid gap-4 grid-cols-2 grid-rows-2">
        <Text variant={TextVariant.body}>Key *</Text>
        <input 
          className="px-1 rounded-md border-px"
          value={key}
          onChange={(e) => setKey(e.target.value)}
           />

        <Text variant={TextVariant.body}>Name *</Text>
        <input 
          className="px-1 rounded-md border-px"
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>
    </Card>
  );
}
