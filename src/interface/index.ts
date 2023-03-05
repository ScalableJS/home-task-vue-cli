export interface IMovie {
  id: number;
  posterPath: string;
  title: string;
  releaseDate: string;
  genres: Array<string>;
}

export const enum SearchBy {
  Title,
  Genre,
}

export const enum SortBy {
  ReleaseDate,
  Rating,
}

export interface ISearchData {
  searchValue: string;
  searchBy: SearchBy;
}
