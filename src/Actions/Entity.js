import { database } from '../Services/Firebase';

export function testDB () {
  database.create('test/123', {item1: 123, item2: 'hello'}, function() {
    console.log('done: ');
  });
};
