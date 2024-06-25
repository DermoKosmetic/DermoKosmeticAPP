export interface ArticuloModel{
  id: number;
  title: string;
  description: string;
  type: string;
  mainImg: string;
  publicationDate: string;
  lastUpdateDate: string;
  likes: number;
  comments: number;
  writerIds: number[];
  content: string;
}
