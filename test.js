var should = require('should');
var fs = require('fs');
var fileSave = require('./');

describe('should save the file test', function() {
  it('should save to sample folder', function(cb) {
    fileSave('sample/test', 'hello world', function(result) {
      should.not.exist(result); 
      cb();
    })
  })

  it('should read the data in sample/test', function(cb) {
    fs.readFile(__dirname + '/sample/test', {encoding: 'utf-8'}, function(err, data) {
      if(err)
        throw err; 
      data.should.equal('hello world');
      cb()
    })
  })


})
