# Save file

[![Build Status](https://travis-ci.org/chilijung/file-save.png)](https://travis-ci.org/chilijung/file-save)

Just save the file!!!! Auto create folder path and just save the file.

## Install

```
npm install file-save
```

## API

- Arguments
  - file path (can with folder path that is not exist)
  - data (data you want to save)
  - option (optional) see details : http://nodejs.org/api/fs.html#fs_fs_writefile_filename_data_options_callback, the options is the same as fs.writefile `options`
  - callback (you can call a callback function)

```javascript
fileSave(<the file path (and with folder path that is not exist)>, data, option, callback)
```

## Example

```javascript
fileSave('sample/test', 'this is a test', function() {
  console.log('Just create the file please!!!!')
}
```


## License

MIT [@chilijung](http://github.com/chilijung)
