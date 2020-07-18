import { Users } from './usersGithud';


export interface resul {
  total_count:        number;
  incomplete_results: boolean;
  items:              Users[];
}