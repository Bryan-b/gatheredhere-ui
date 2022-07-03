import React from 'react';
import { TextVariant } from 'utils/constants';
import { Button } from './Button';
import { Card } from './Card';
import { Text } from './Text';

export type AddCategoryProps = { className?: string };

export function AddCategory({ className = '' }: AddCategoryProps) {
  return (
    <Card
      title="New Category"
      className={` ${className}`}
      actions={[<Button>Clear</Button>, <Button>Save</Button>]}
    >
      <div className="grid gap-4 grid-cols-2 grid-rows-2">
        <Text variant={TextVariant.body}>Key *</Text>
        <input className="px-1 rounded-md border-px" />

        <Text variant={TextVariant.body}>Name *</Text>
        <input className="px-1 rounded-md border-px" />
      </div>
    </Card>
  );
}
