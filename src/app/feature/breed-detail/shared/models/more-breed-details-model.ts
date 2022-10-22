export interface IMoreDetails {
  breedName: string;
  image: string;
  description: string;
  dogInfo: IDogInfo;
  id: string;
}

export interface IDogInfo {
  [key: string]: string;
}
