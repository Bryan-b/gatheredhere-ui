import React, { createContext, ReactNode, useCallback, useState } from 'react';
import { getItem, saveItem } from 'utils/storage';

export const TODOCategoriesContext = createContext<TodoCategoryState>({
  categories: [],
});

export const TODOCategoryActionsContext = createContext<TodoCategoryActions>({
  addCategory: (category) => {},
  removeCategory: (key) => {},
});

export type TODOCategoriesProviderProps = { children?: ReactNode };

const DefaulCategories: TodoCategory[] = [
  { key: 'req', title: 'Requirements' },
  { key: 'prog', title: 'In Progress' },
  { key: 'done', title: 'Complete' },
];

export function TODOCategoriesProvider({
  children,
}: TODOCategoriesProviderProps) {
  const [categories, setCategories] = useState<TodoCategory[]>(
    getItem<TodoCategory[]>('categories') || [...DefaulCategories]
  );

  const saveCategories = (cats: TodoCategory[]) => {
    setCategories([...cats]);
    saveItem<TodoCategory[]>('categories', cats);
  };

  const addCategory = useCallback(
    (category: TodoCategory) => {
      // TODO: Add logic
      // After making the required updates,
      // call saveCategories on the mutated reference
      let newCategories = [
        ...categories,
        category
      ]
      setCategories(state => ([...state, category]))
      saveCategories(newCategories);
    },
    [categories]
  );

  const removeCategory = useCallback(
    (key: string) => {
      // TODO: Add logic
      // After making the required updates,
      // call saveCategories on the mutated reference
      // saveCategories(categories);
      let newCategories = categories.filter(cat => cat.key !== key)

      setCategories(newCategories)
      saveCategories(newCategories);
    },
    [categories]
  );

  /**
   * TODO: Handle setting up default categories
   */

  return (
    <TODOCategoryActionsContext.Provider
      value={{ addCategory, removeCategory }}
    >
      <TODOCategoriesContext.Provider value={{ categories }}>
        {children}
      </TODOCategoriesContext.Provider>
    </TODOCategoryActionsContext.Provider>
  );
}
