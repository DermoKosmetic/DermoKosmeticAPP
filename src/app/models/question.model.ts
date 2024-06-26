export interface FilterQuestionModel {
  categories: string[]
  orderBy: string
  pageNum: number
  pageSize: number
}

export interface PaginableQuestionModel {
  content: QuestionModel[]
  pageable: PageableModel
  totalPages: number
  totalElements: number
  last: boolean
  size: number
  number: number
  numberOfElements: number
  first: boolean
  empty: boolean
}

export interface QuestionModel {
  id: number
  title: string
  content: string
  publicationDate: string
  type: string
  userId: number
  likes: number
  answers: number
}

export interface PageableModel {
  pageNumber: number
  pageSize: number
  offset: number
  sort: SortModel,
  paged: boolean
  unpaged: boolean
}

export interface SortModel{
  empty: boolean,
  sorted: boolean,
  unsorted: boolean
}
