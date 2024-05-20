import { Region } from './region.type';
import { Country } from "./country.interface"

export interface CacheStore{
  byCapital: TermCountries,
  byCountries: TermCountries,
  byRegion: RegionCountries
}

export interface TermCountries{
  term: string,
  countries: Country[]
}

export interface RegionCountries{
  region?: Region,
  countries: Country[]
}
