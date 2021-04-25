import {get} from '@loopback/rest';

export class HelloController {
  @get('/hello')
  hello(): string {
    return 'Hello world!';
  }
  // @get('/')
  // testing(): string {
  //   return 'something!';
  // }
}
