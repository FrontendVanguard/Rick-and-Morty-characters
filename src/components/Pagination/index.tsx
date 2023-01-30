import React from 'react'

import { CustomPaginate } from './styles'

interface PaginationProps {
  onPageChange: (e: { selected: number }) => void
  forcePage: number
  pages: number
}

export const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  forcePage,
  pages,
}) => {
  return pages ? (
    <CustomPaginate
      nextLabel=' > '
      pageRangeDisplayed={3}
      onPageChange={onPageChange}
      previousLabel=' < '
      previousClassName='page previous'
      nextClassName='page next'
      pageCount={pages}
      pageClassName='page'
      activeClassName='page-active'
      breakClassName='page break'
      forcePage={forcePage}
    />
  ) : null
}
