import { Fragment, useEffect } from 'react'
import CellListItem from '../cell-list-item'
import AddCell from '../add-cell'
import { useTypedSelector } from '../../hooks/use-typed-selector'
import { useActions } from '../../hooks/use-actions'

import './cell-list.css'

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  )
  const { fetchCells } = useActions()

  useEffect(() => {
    fetchCells()
  }, [fetchCells])

  const renderCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell prevCellId={cell.id} />
    </Fragment>
  ))

  return (
    <div className="cell-list">
      <AddCell forceVisible={cells.length === 0} prevCellId={null} />
      {renderCells}
    </div>
  )
}

export default CellList
