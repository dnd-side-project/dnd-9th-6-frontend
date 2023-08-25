export type ScopeParams = {
  scopeKeyword?: {
    keyword?: string;
  };
};

export type ScopeResponse = {
  reviews: {
    id: number;
    lectureTitle: string;
    userName: string;
    createdDate: string;
    score: number;
    content: string;
    tags: string;
    source: string;
  }[];
  lectures: {
    id: number;
    source: string;
    imageUrl: string;
    title: string;
    name: string;
  }[];
  recent: {
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
  keywords: {
    id: number;
    lectureTitle: string;
    userName: string;
    createdDate: string;
    score: number;
    content: string;
    tags: string;
    source: string;
  }[];
};
