// This is a custom pipe example
// A pipe is simply you put something in and get something out
// A pipe must return a value,
// Will need to add the pipe to the app.module

import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
 name: 'shorten'
})


export class ShortenPipe implements PipeTransform {
  //Logic for the pipe is within the transform method, value is what is based in
  //accordance with what value the pipe is attached to
  transform(value: any, limit: number){
    if(value.length > limit){
    return value.substr(0, limit) + ' ...';
  } else {
     return value;
    }
  }

}
