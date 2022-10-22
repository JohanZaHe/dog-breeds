export interface IBreeds {
  [key: string]: string[];
}

export interface IAllBreeds {
  message: IBreeds;
  status: string;
}

export interface ISearchModel {
  fullName: string;
  breed: string;
  subBreed: string;
}
