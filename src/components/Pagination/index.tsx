import React from 'react'

import { CustomPaginate } from './styles'

interface PaginationProps {
  onPageChange: (e: { selected: number }) => void
  forcePage: number
}

export const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  forcePage,
}) => {
  return (
    <CustomPaginate
      nextLabel=" > "
      pageRangeDisplayed={3}
      onPageChange={onPageChange}
      previousLabel=" < "
      previousClassName="page previous"
      nextClassName="page next"
      pageCount={42}
      pageClassName="page"
      activeClassName="page-active"
      breakClassName="page break"
      forcePage={forcePage}
    />
  )
}
