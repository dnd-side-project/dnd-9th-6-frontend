export interface Lecture {
  id: number;
  title: string;
  source: string;
  url: string;
  price: string;
  name: string;
  mainCategory: string;
  subCategory: string;
  imageUrl: string;
  reviewCount: number;
  bookmarkCount: number;
}

export interface LecturesParams {
  mainCategoryId?: number | string;
  subCategoryId?: number | string;
  searchKeyword?: string;
  page?: number | string;
  size?: number | string;
  sort?: string;
}

export interface LecturesResponse extends GlobalResponse {
  data: {
    totalPages: number;
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    lectures: Lecture[];
  };
}
