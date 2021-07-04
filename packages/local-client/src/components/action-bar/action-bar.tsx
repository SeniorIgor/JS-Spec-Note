import React from 'react'
import Button from '../button'
import { useActions } from '../../hooks/use-actions'

import './action-bar.css'

interface ActionBarProps {
  id: string
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions()

  return (
    <div className="action-bar">
      <Button handler={() => moveCell(id, 'up')} iconName="fa-arrow-up" />
      <Button handler={() => moveCell(id, 'down')} iconName="fa-arrow-down" />
      <Button handler={() => deleteCell(id)} iconName="fa-times" />
    </div>
  )
}

export default ActionBar
