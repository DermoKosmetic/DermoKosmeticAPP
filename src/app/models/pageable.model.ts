export interface sortModel{
  empty: boolean,
  sorted: boolean,
  unsorted: boolean
}

export interface PageableModel{
    pageNumber: number,
    pageSize: number,
    sort: sortModel,
    offset: number,
    paged: boolean,
    unpaged: boolean
}

