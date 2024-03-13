import { DateTime } from "luxon";

interface CityTimezone {
  city: string;
  timezone: string;
}

export interface TimezoneWithDateTime extends CityTimezone {
  time: null | DateTime;
}

export interface TimezoneProps {
  setTimezones: React.Dispatch<React.SetStateAction<TimezoneWithDateTime[]>>;
  timezones: TimezoneWithDateTime[];
}
