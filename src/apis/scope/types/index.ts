export interface ScopeReviewsResponse extends GlobalResponse {
  data: {
    id: number;
    lectureTitle: string;
    userName: string;
    createdDate: string;
    score: number;
    content: string;
    tags: string;
    source: string;
  }[];
}

export interface ScopeLecturesResponse extends GlobalResponse {
  data: {
    id: number;
    source: string;
    imageUrl: string;
    title: string;
    name: string;
  }[];
}

export interface ScopeRecentResponse extends GlobalResponse {
  data: {
    isAddLike: boolean;
    review: {
      reviewId: number;
      score: number;
      content: string;
      createdDate: string;
      tags: string;
      likes: number;
    };
    lecture: {
      lectureId: number;
      source: string;
      mainCategory: string;
      title: string;
      imageUrl: string;
      name: string;
    };
    user: {
      userId: number;
      nickName: string;
    };
  }[];
}

// export interface ScopeKeywordsResponse extends GlobalResponse {
//   data: {
//     id: number;
//     lectureTitle: string;
//     userName: string;
//     createdDate: string;
//     score: number;
//     content: string;
//     tags: string;
//     source: string;
//   }[];
// }
