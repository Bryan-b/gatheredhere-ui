import React, { createContext, ReactNode, useCallback, useState } from 'react';
import { saveItem, getItem } from 'utils/storage';

export const TODOListContext = createContext<TodoListState>({
  items: [],
});

export const TODOListActionsContext = createContext<TodoListActions>({
  addItem: (item) => {},
  removeItem: (key) => {},
  moveItem: (key, category) => {},
});

export type TODOListProviderProps = { children?: ReactNode };
export function TODOListProvider({ children }: TODOListProviderProps) {
  const [items, setItems] = useState<TodoListItem[]>(
    getItem<TodoListItem[]>('items') || []
  );

  /**
   * Saves the mutated array reference as a new reference
   * and also updates to storage
   */
  const saveItems = (items: TodoListItem[]) => {
    setItems(items.map((it, itIdx) => ({ ...it, key: `item-${itIdx}` })));
    saveItem<TodoListItem[]>('items', items);
  };

  const addItem = useCallback(
    (item: Omit<TodoListItem, 'category' | 'key'> & { category?: string }) => {
      // TODO: Add logic
      // After making the required updates,
      // call saveItems on the mutated reference
      // saveItems(items);
      console.log(item)
      if(!item.category || item.category === ''){
        let category = getItem<TodoCategory[]>('categories')
        if(category){
          item.category = `${category[0].key}`
        }
      }

      let newItem = {
        key: `item-${items.length + 2}`,
        category: `${item.category}`,
        description: item.description
      }
      console.log(newItem)
      saveItems([...items, newItem])
    },
    []
  );

  const removeItem = useCallback(
    (key: string) => {
      // TODO: Add logic
      // After making the required updates,
      // call saveItems on the mutated reference
      // saveItems(items);
    },
    [items]
  );

  const moveItem = useCallback(
    (key: string, category: string) => {
      // TODO: Add logic
      // After making the required updates,
      // call saveItems on the mutated reference
      // saveItems(items);
    },
    [items]
  );

  /**
   * TODO: Handle category being deleted
   */

  return (
    <TODOListActionsContext.Provider value={{ addItem, removeItem, moveItem }}>
      <TODOListContext.Provider value={{ items }}>
        {children}
      </TODOListContext.Provider>
    </TODOListActionsContext.Provider>
  );
}
