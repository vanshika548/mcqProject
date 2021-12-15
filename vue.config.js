module.exports = {
    pwa: {
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        swSrc: 'src/service-worker.js',
        importScripts: ['idb.js'],
        // exclude: /\.js$/
      }
    }
  };


 
  
  