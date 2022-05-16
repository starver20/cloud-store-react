import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'City Edition',
    description:
      'Every NBA franchise has a playlist of its greatest hits—a compilation of iconic moments from the past that tell the team definitive story.',
  },
  {
    _id: uuid(),
    categoryName: 'Icon Edition',
    description:
      'Every team has an iconic identity, the true colours that have resonated with fans for generations.The Milwaukee Bucks Diamond Icon Edition Swingman Jersey commemorates the league milestone 75th anniversary season with faceted diamond-inspired logos and an updated jock tag.',
  },
];
