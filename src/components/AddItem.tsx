import React, { useState } from 'react';
import { TextVariant } from 'utils/constants';
import { Button } from './Button';
import { Card } from './Card';
import { Text } from './Text';
import useCategories from 'hooks/useCategories';
import useItemActions from 'hooks/useItemActions';

export type AddItemProps = { className?: string };

export function AddItem({ className = '' }: AddItemProps) {
  const categories = useCategories()
  const { addItem } = useItemActions()

  let [description, setDescription] = useState('')
  let [category, setCategory] = useState('')

  function clear() {
    setDescription('')
    setCategory('')
  }
  console.log(category, description)
  function submit(){
    if(description === ''){
      console.log(`All fields are required`)
    }
    // if()

    addItem({description, category})
    clear()
  }
  
  return (
    <Card
      title="New Item"
      className={` ${className}`}
      actions={[<Button>Clear</Button>, <Button onClick={submit}>Save</Button>]}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <Text variant={TextVariant.body}>Description *</Text>
          <textarea 
            rows={5} 
            className="px-1 rounded-md border-px" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}/>
        </div>

        <div className="grid gap-4 grid-cols-2 grid-rows-1">
          <Text variant={TextVariant.body}>Category</Text>
          <select 
            className="px-1 rounded-md border-px"
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
              <option value='' >Select category</option>
            {
              categories.map((cat) => (
                <option value={cat.key} key={cat.key}>{ cat.title }</option>
              ))
            }
          </select>
        </div>
      </div>
    </Card>
  );
}
