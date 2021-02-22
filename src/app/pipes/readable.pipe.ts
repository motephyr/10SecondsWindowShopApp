import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'readable'
})
export class ReadablePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): String {
    var day, format, hour, minute, month, week, year, seconds
    seconds = parseInt(value, 10);
    minute = 60;
    hour = minute * 60;
    day = hour * 24;
    week = day * 7;
    year = day * 365;
    month = year / 12;
    format = function (number, string) {
      string = (number === 0 || number === 1) ? string : string + "s";
      return number + " " + string;
    };
    switch (false) {
      case !(seconds < minute):
        return format(seconds, 'sec');
      case !(seconds < hour):
        return format(Math.floor(seconds / minute), 'minute');
      case !(seconds < day):
        return format(Math.floor(seconds / hour), 'hour');
      case !(seconds < week):
        return format(Math.floor(seconds / day), 'day');
      case !(seconds < month):
        return format(Math.floor(seconds / week), 'week');
      case !(seconds < year):
        return format(Math.floor(seconds / month), 'month');
      default:
        return format(Math.floor(seconds / year), 'year');
    }
  };


}
