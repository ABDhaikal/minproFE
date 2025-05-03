export interface PaginationMeta {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
  }
  
  export interface PageableResponse<T> {
    data: T[];
    meta: PaginationMeta;
  }
  
  export interface PaginationQueries {
    take?: number;
    page?: number;
    sortBy?: string;
    sortOrder?: string;
  }

  