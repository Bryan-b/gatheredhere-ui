import { TODOListContext } from 'context/TODOList';
import useItems from 'hooks/useItems';
import React, { useContext } from 'react';
import { TextVariant } from 'utils/constants';
import { Button } from './Button';
import { Card } from './Card';
import { Text } from './Text';

export type ItemsProps = {
  category: string;
  className?: string;
};

export function Items({ category, className = '' }: ItemsProps) {
  const items = useItems();
  return (
    <>
      {items
        .filter((it) => it.category === category)
        .map((it, idx) => (
          <Card
            key={`cc-${idx}`}
            className={`${className}`}
            actions={[
              <Button>{'-'}</Button>,
              <Button>{'<'}</Button>,
              <Button>{'>'}</Button>,
            ]}
          >
            {it.description.split('\n').map((l, lIdx) => (
              <Text variant={TextVariant.body} key={`cl-${lIdx}`}>
                {l}
              </Text>
            ))}
          </Card>
        ))}
    </>
  );
}
