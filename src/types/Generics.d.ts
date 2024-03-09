export type CourseType = {
  symbol?: string;
  title: string;
  description: string;
  dateTime: string;
  places: string;
  image: string;
};

export type EventItem = {
  title: string;
  image: string;
  address: string;
  date: string;
};

export type RoadmapType = {
  id?: number;
  title?: string;
  description?: string;
  datetime?: string;
};
