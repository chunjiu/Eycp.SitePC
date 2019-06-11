const gulp = require('gulp');
var requirejs = require('requirejs');
var css = require('gulp-clean-css');
var clean = require('gulp-clean');
var Path = require('path');
var FS = require('fs');

let exclude = [
    'jquery',
    'underscore',
    'backbone',
    'Util',
    'String',
    'Date',
    'template',
    'WdatePicker',
    'clipboard',
    'request',
    'qrcode'
];

gulp.task('build', ['css'], function(){

    let containerList = [];
    
    const containerPath = Path.join(__dirname, './client/js/core/views/containers');
    FS.readdirSync(containerPath).forEach(dir => {
        if(dir !== 'public') {
            FS.readdirSync(Path.join(__dirname, `./client/js/core/views/containers/${dir}`)).forEach(file => {
                if(file.includes('.js')) {
                    file = file.split('.js')[0];
                    if(!file.includes('dealWithData') && !file.includes('chart.container')){
                        containerList.push({
                            name : `core/views/containers/${dir}/${file}`,
                            exclude: exclude
                        });
                    }
                } else {
                    FS.readdirSync(Path.join(__dirname, `./client/js/core/views/containers/${dir}/${file}`)).forEach(file2 => {
                        file2 = file2.split('.js')[0];
                        if(!file2.includes('dealWithData') && !file2.includes('chart.container')){
                            containerList.push({
                                name : `core/views/containers/${dir}/${file}/${file2}`,
                                exclude: exclude
                            });
                        }
                    });
                }
            })
        }
    });
    
    return requirejs.optimize({
        appDir: './client/js/',
        baseUrl: './',
        dir: './dist/js',
        optimize: 'uglify',
        removeCombined: false,
        mainConfigFile: './client/js/config/config.js',
        modules: containerList
     }, success, error);
});

gulp.task('rjs', function() {

})

gulp.task('css', ['copy'],function(){
    return gulp.src('./client/css/**')
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy', ['clean'], function(){
    gulp.src(['./client/images/**'])
        .pipe(gulp.dest('./dist/images', {}));

    
    gulp.src(['./client/pic/**'])
        .pipe(gulp.dest('./dist/pic', {}));
    
    gulp.src(['./client/*.*'])
        .pipe(gulp.dest('./dist', {}));
});

gulp.task('clean', function(){
    return gulp.src('./dist', {read: false})
    .pipe(clean());
})

var success = function(buildResponse) {
    stream.write(createFile(filename, output, buildResponse, sourceMapOutput));
    stream.resume();
    stream.end();
};
var error = function(error) {
    stream.emit('error', new PluginError(PLUGIN_NAME, error));
};

