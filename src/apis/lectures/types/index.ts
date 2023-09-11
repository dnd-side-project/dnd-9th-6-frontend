export type LecturesParams = {
  lecturesParameter?: {
    mainCategoryId?: number | string;
    subCategoryId?: number | string;
    searchKeyword?: string;
    page?: number | string;
    size?: number | string;
    sort?: string;
  };
};

export type LecturesResponse = {
  search: {
    totalPages: number;
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    lectures: {
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
    }[];
  };
};
