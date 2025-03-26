type UsePaginationProps = {
  currentPage: number
  totalPages: number
  paginationItemsToDisplay: number
}

type UsePaginationReturn = {
  pages: number[]
  showLeftEllipsis: boolean
  showRightEllipsis: boolean
}

export function usePagination({
  currentPage,
  totalPages,
  paginationItemsToDisplay,
}: UsePaginationProps): UsePaginationReturn {
  const showLeftEllipsis = currentPage - 1 > paginationItemsToDisplay / 2
  const showRightEllipsis =
    totalPages - currentPage + 1 > paginationItemsToDisplay / 2

  function calculatePaginationRange(): number[] {
    if (totalPages <= paginationItemsToDisplay) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const halfDisplay = Math.floor(paginationItemsToDisplay / 2)
    const initialRange = {
      start: currentPage - halfDisplay,
      end: currentPage + halfDisplay,
    }

    const adjustedRange = {
      start: Math.max(1, initialRange.start),
      end: Math.min(totalPages, initialRange.end),
    }

    if (adjustedRange.start === 1) {
      adjustedRange.end = paginationItemsToDisplay
    }
    if (adjustedRange.end === totalPages) {
      adjustedRange.start = totalPages - paginationItemsToDisplay + 1
    }

    if (showLeftEllipsis) adjustedRange.start++
    if (showRightEllipsis) adjustedRange.end--

    return Array.from(
      { length: adjustedRange.end - adjustedRange.start + 1 },
      (_, i) => adjustedRange.start + i
    )
  }

  const pages = calculatePaginationRange()

  return {
    pages,
    showLeftEllipsis,
    showRightEllipsis,
  }
}
