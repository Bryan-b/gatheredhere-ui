import { TODOListActionsContext } from 'context/TODOList';
import { useContext } from 'react';

function useItemActions() {
  const { addItem, removeItem, moveItem } = useContext(TODOListActionsContext);
  return { addItem, removeItem, moveItem };
}

export default useItemActions;
