import React from 'react';
import { TextVariant } from 'utils/constants';
import { Button } from './Button';
import { Card } from './Card';
import { Text } from './Text';

export type AddItemProps = { className?: string };

export function AddItem({ className = '' }: AddItemProps) {
  return (
    <Card
      title="New Item"
      className={` ${className}`}
      actions={[<Button>Clear</Button>, <Button>Save</Button>]}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <Text variant={TextVariant.body}>Description *</Text>
          <textarea rows={5} className="px-1 rounded-md border-px" />
        </div>

        <div className="grid gap-4 grid-cols-2 grid-rows-1">
          <Text variant={TextVariant.body}>Category</Text>
          <select className="px-1 rounded-md border-px"></select>
        </div>
      </div>
    </Card>
  );
}
