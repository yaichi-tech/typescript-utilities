import { progression } from "../general/array";

export const yearSelectOptions = progression(
  new Date().getFullYear() - 1900,
  1900,
  1,
)
  .map((year) => ({
    label: year.toString(),
    value: year.toString(),
  }))
  .reverse();

export const monthSelectOptions = progression(12, 1, 1).map((month) => ({
  label: month.toString(),
  value: month.toString(),
}));

export const daySelectOptions = progression(31, 1, 1).map((day) => ({
  label: day.toString(),
  value: day.toString(),
}));

export const hourSelectOptions = progression(24, 0, 1).map((hour) => ({
  label: hour.toString(),
  value: hour.toString(),
}));

export const minuteSelectOptions = progression(60, 0, 1).map((minute) => ({
  label: minute.toString(),
  value: minute.toString(),
}));
