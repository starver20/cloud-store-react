import { v4 as uuid } from 'uuid';
import {
  clippersStatement,
  netsStatement,
  celticsCity,
  philadelphiaCity,
  dallasCity,
  milwaukeeCity,
  brooklynCity,
  orleansCity,
  lakersCity,
  clippersCity,
  lakersIcon,
  mavericksIcon,
  clippersIcon,
  netsIcon,
  bucksIcon,
} from '../../assets';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: 'Paul George Clippers Statement Edition 2020',
    image: clippersStatement,
    price: '1000',
    categoryName: 'Statement Edition',
    inStock: false,
    ratings: 1,
  },
  {
    _id: uuid(),
    title: 'Kevin Durant Nets Statement Edition 2020',
    image: netsStatement,
    price: '1500',
    categoryName: 'Statement Edition',
    inStock: true,
    ratings: 2,
  },
  {
    _id: uuid(),
    title: 'Boston Celtics City Edition',
    image: celticsCity,
    price: '3000',
    categoryName: 'City Edition',
    inStock: true,
    ratings: 3,
  },
  {
    _id: uuid(),
    title: 'Philadelphia 76ers City Edition',
    image: philadelphiaCity,
    price: '2000',
    categoryName: 'City Edition',
    inStock: true,
    ratings: 4,
  },
  {
    _id: uuid(),
    title: 'Dallas Mavericks City Edition',
    image: dallasCity,
    price: '2500',
    categoryName: 'City Edition',
    inStock: true,
    ratings: 5,
  },
  {
    _id: uuid(),
    title: 'Milwaukee Bucks City Edition',
    image: milwaukeeCity,
    price: '2800',
    categoryName: 'City Edition',
    inStock: true,
    ratings: 3,
  },
  {
    _id: uuid(),
    title: 'Brooklyn Nets City Edition',
    image: brooklynCity,
    price: '3800',
    categoryName: 'City Edition',
    inStock: true,
    ratings: 2,
  },
  {
    _id: uuid(),
    title: 'New Orleans Pelicans City Edition',
    image: orleansCity,
    price: '4000',
    categoryName: 'City Edition',
    inStock: true,
    ratings: 1,
  },
  {
    _id: uuid(),
    title: 'Los Angeles Lakers City Edition',
    image: lakersCity,
    price: '3200',
    categoryName: 'City Edition',
    inStock: true,
    ratings: 4,
  },
  {
    _id: uuid(),
    title: 'LA Clippers City Edition',
    image: clippersCity,
    price: '2300',
    categoryName: 'City Edition',
    inStock: true,
    ratings: 5,
  },
  {
    _id: uuid(),
    title: 'Anthony Davis Lakers Icon Edition 2020',
    image: lakersIcon,
    price: '2600',
    categoryName: 'Icon Edition',
    inStock: false,
    ratings: 4,
  },
  {
    _id: uuid(),
    title: 'Luka Dončić Mavericks Icon Edition 2020',
    image: mavericksIcon,
    price: '1000',
    categoryName: 'Icon Edition',
    inStock: true,
    ratings: 3,
  },
  {
    _id: uuid(),
    title: 'Kawhi Leonard Clippers Icon Edition 2020',
    image: clippersIcon,
    price: '1900',
    categoryName: 'Icon Edition',
    inStock: false,
    ratings: 4,
  },
  {
    _id: uuid(),
    title: 'Nets Icon Edition 2020',
    image: netsIcon,
    price: '2900',
    categoryName: 'Icon Edition',
    inStock: true,
    ratings: 2,
  },
  {
    _id: uuid(),
    title: 'Giannis Antetokounmpo Bucks Icon Edition 2020',
    image: bucksIcon,
    price: '4500',
    categoryName: 'Icon Edition',
    inStock: false,
    ratings: 4,
  },
];
