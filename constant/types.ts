export interface Diary {
  _id: string;
  question_id: string;
  question_content: string;
  is_child_read: boolean;
  child_answer: string;
  child_answered_at: string;
  is_parent_answered: boolean;
  parent_answer: string;
  parent_answered_at: string;
  from_today: number;
  emotion: string;
  diary_type: "activity" | "answer";
}

export type ActivityTypes =
  | "공원탐방"
  | "교육체험"
  | "전시관람"
  | "문화행사"
  | "농장체험"
  | "키즈카페";

export interface CardType {
  _id: string;
  image: string;
  title: string;
  description: string;
  url: string;
  location: string;
  liked: boolean;
  target: string;
  activityType: ActivityTypes;
  type?: "list" | "wishlist" | "history";
}
