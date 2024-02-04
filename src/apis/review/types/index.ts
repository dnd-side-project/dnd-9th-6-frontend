export interface Review {
  id: number;
  nickname: string;
  tags: string[];
  content: string;
  createdDate: string;
  score: number;
  likeCount: number;
}

export interface ReviewsResponse extends GlobalResponse {
  data: {
    totalPages: number;
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    reviews: Review[];
  };
}

export interface ReviewRequest {
  lectureId: number;
  score: number;
  tags: string[];
  content: string;
}
