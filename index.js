var fs = require('fs'),
  path = require('path'),
  mkdirp = require('mkdirp');

module.exports = function(file_path, data, options, cb) {

  if(arguments.length < 4) {
		file_path = file_path;
		data = data;
		cb = arguments[2];
		options = null;
  }else if (arguments.length < 3) {
  	throw Error('Arguments should be three or four.')
  } 
  dir_url= path.dirname(file_path)
  // origin file path
  ori_path = path.resolve(file_path);
  // folder path
  dir_path = path.resolve(dir_url);
  _create_fs(dir_path, function() {
  	_file_write(ori_path, data, options, cb)
  })
}

function _create_fs(fp, cb) {
  mkdirp(fp, function (err) {
    if (err) 
      throw Error(err)
    cb();
  })
}

function _file_write(dir, data, opt, cb) {
	fs.writeFile(dir, data, opt, function(err) {
    if(err)
    	throw Error(err)
	  cb(null)
  })
}
