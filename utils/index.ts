import { CarProps, FilterProps } from '@/types';

export async function fetchCars(filters: FilterProps) {
  const { manfacturer, year, limit, model, fuel } = filters;
  const headers = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY || '',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manfacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await res.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 4100; // Base rental price per day in dollars
  const mileageFactor = 8.2; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate addtional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL(`https://cdn.imagin.studio/getimage`);

  const { make, year, model } = car;

  url.searchParams.append(
    'customer',
    process.env.NEXT_PUBLIC_IMAGIN_STUDIO_KEY || ''
  );
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);
  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathName;
};
