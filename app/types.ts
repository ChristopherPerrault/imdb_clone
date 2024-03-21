export interface Result {
  id: string;
  original_title: string;
  overview: string;
  vote_count: number;
}

// needed since this is shared across movie/id/page.tsx and Results.tsx, and TS was getting confused as interface Result was used twice but shared the same name. Since the props are the same, it's better to just use this types.ts file
