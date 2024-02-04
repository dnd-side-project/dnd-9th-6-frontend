export interface Bookmark {
  bookmarkId: number;
  lectureId: number;
  lectureImageUrl: string;
  name: string;
  source: string;
  title: string;
  price: string;
  addedDate: string;
}

export interface BookmarkResponse extends GlobalResponse {
  data: Bookmark[];
}

export interface BookmarkParams {
  lectureId?: number;
}
