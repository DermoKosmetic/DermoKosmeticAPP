export interface AnswerRequestDTO {
  content: string;
  parentCommentId: string | null;
  questionId: number;
  userId: number;
}

export interface AnswerResponseDTO {
  id: number;
  content: string;
  publicationDate: string;
  parentAnswerId: number | null;
  questionId: number;
  userId: number;
  likes: number;
  responses: number;
}

export interface Page<T> {
  content: T[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

interface Pageable {
  sort: Sort;
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}
