({
    appDir: './client/js/',
    baseUrl: './',
    dir: './dist',
    optimize: 'none',
    mainConfigFile: './client/js/config/config.js',
    modules: [{   //这里要写上containers下的多个模块，
        name: 'core/views/containers/home/index',
        exclude: ['jquery']
    }]
})