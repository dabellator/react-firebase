import { Database } from '../Services/Firebase';

export function testDB () {
  Database.create('test/123', {item1: 123, item2: 'hello'}, function() {
    console.log('done: ');
  });
};
