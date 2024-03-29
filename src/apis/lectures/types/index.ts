import { Review } from 'apis/review/types';

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
  averageScore: number;
  tagGroups: {
    name: string;
    tags: {
      name: string;
      count: number;
    }[];
  }[];
  reviews?: Review[];
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

export interface DetailLectureResponse extends GlobalResponse {
  data: {
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
    averageScore: number;
    bookmarkCount: number;
    tagGroups: {
      name: string;
      tags: {
        name: string;
        count: number;
      }[];
    }[];
  };
}
