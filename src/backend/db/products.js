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
    price: '5000',
    categoryName: 'Statement Edition',
  },
  {
    _id: uuid(),
    title: 'Kevin Durant Nets Statement Edition 2020',
    image: netsStatement,
    price: '3000',
    categoryName: 'Statement Edition',
  },
  {
    _id: uuid(),
    title: 'Boston Celtics City Edition',
    image: celticsCity,
    price: '3000',
    categoryName: 'City Edition',
  },
  {
    _id: uuid(),
    title: 'Philadelphia 76ers City Edition',
    image: philadelphiaCity,
    price: '3000',
    categoryName: 'City Edition',
  },
  {
    _id: uuid(),
    title: 'Dallas Mavericks City Edition',
    image: dallasCity,
    price: '3000',
    categoryName: 'City Edition',
  },
  {
    _id: uuid(),
    title: 'Milwaukee Bucks City Edition',
    image: milwaukeeCity,
    price: '3000',
    categoryName: 'City Edition',
  },
  {
    _id: uuid(),
    title: 'Brooklyn Nets City Edition',
    image: brooklynCity,
    price: '3000',
    categoryName: 'City Edition',
  },
  {
    _id: uuid(),
    title: 'New Orleans Pelicans City Edition',
    image: orleansCity,
    price: '3000',
    categoryName: 'City Edition',
  },
  {
    _id: uuid(),
    title: 'Los Angeles Lakers City Edition',
    image: lakersCity,
    price: '3000',
    categoryName: 'City Edition',
  },
  {
    _id: uuid(),
    title: 'LA Clippers City Edition',
    image: clippersCity,
    price: '3000',
    categoryName: 'City Edition',
  },
  {
    _id: uuid(),
    title: 'Anthony Davis Lakers Icon Edition 2020',
    image: lakersIcon,
    price: '3000',
    categoryName: 'Icon Edition',
  },
  {
    _id: uuid(),
    title: 'Luka Dončić Mavericks Icon Edition 2020',
    image: mavericksIcon,
    price: '3000',
    categoryName: 'Icon Edition',
  },
  {
    _id: uuid(),
    title: 'Kawhi Leonard Clippers Icon Edition 2020',
    image: clippersIcon,
    price: '3000',
    categoryName: 'Icon Edition',
  },
  {
    _id: uuid(),
    title: 'Nets Icon Edition 2020',
    image: netsIcon,
    price: '3000',
    categoryName: 'Icon Edition',
  },
  {
    _id: uuid(),
    title: 'Giannis Antetokounmpo Bucks Icon Edition 2020',
    image: bucksIcon,
    price: '3000',
    categoryName: 'Icon Edition',
  },
];
