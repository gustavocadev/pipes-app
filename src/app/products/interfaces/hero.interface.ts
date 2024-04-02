export type Color = 'red' | 'blue' | 'green' | 'black' | 'white';

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
