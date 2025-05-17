import { ChartData } from '../types/d3';
import { MockData, DateRange } from '../types/mock-data';
import { dataset1 } from './chart-data';

const getDates = (year: number) => ({ start: `${year}-01-01`, end: `${year}-12-31` })
const mapFn = (data: MockData): ChartData => ({ date: new Date(data.date), value: data.value });
const filterBetween = (data: ChartData, dates: DateRange): boolean => data.date >= new Date(dates.start) && data.date <= new Date(dates.end);
const filterTo = (data: ChartData, dates: DateRange): boolean => data.date <= new Date(dates.end);
const filterFrom = (data: ChartData, dates: DateRange): boolean => data.date >= new Date(dates.start);
const filteredDataBetween = (dates: DateRange) => dataset1.map(mapFn).filter((data) => filterBetween(data, dates));
const filteredDataFrom = (dates: DateRange) => dataset1.map(mapFn).filter((data) => filterFrom(data, dates));
const filteredDataTo = (dates: DateRange) => dataset1.map(mapFn).filter((data) => filterTo(data, dates));

export const filter2016 = filteredDataTo(getDates(2016));
export const filter2018 = filteredDataTo(getDates(2018));
export const filter2024 = filteredDataBetween(getDates(2024));
export const filter2023 = filteredDataTo(getDates(2023));
