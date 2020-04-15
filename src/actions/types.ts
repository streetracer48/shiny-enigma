
export const FETCH_BREEDS_SUCCESS = 'FETCH_BREEDS_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'
export const FETCH_BREEDS_INIT = 'FETCH_BREEDS_INIT'
export const  FETCH_BREED_BY_ID_SUCCESS = 'FETCH_BREED_BY_ID_SUCCESS'
export const SET_ALERT = 'SET_ALERT' 
export const REMOVE_ALERT = 'REMOVE_ALERT'
export const FETCH_BREED = 'FETCH_BREED'

export interface Breed {
    id:number;
    name:string;
    origin:string;
    temperament:string,
    description:string
  }
  

 export interface BreedState {
    breeds: Breed[],
    breed: object,
    loading:boolean
  }
