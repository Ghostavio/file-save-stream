var should = require('should');
var fileSave = require('./');

describe('should save to the file', function() {
  it('should save to sample folder', function() {
    fileSave('sample/test', 'hello world', function(result) {
     should.not.exist(result); 
    })
  })


})
