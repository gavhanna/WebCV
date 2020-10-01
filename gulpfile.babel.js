import { src, dest, watch, series, parallel } from 'gulp';
import yargs from 'yargs';
// import gulpif from 'gulp-if';
// import sourcemaps from 'gulp-sourcemaps';
import del from 'del';
import webpack from 'webpack-stream';
import browserSync from 'browser-sync';
const PRODUCTION = yargs.argv.prod;

const server = browserSync.create();
export const serve = (done) => {
    server.init({
        server: {
            baseDir: './',
        },
    });
    done();
};
export const reload = (done) => {
    server.reload();
    done();
};

export const scripts = () => {
    return src('src/js/CV.js')
        .pipe(
            webpack({
                module: {
                    rules: [
                        {
                            test: /\.js$/,
                            use: {
                                loader: 'babel-loader',
                                options: {
                                    presets: [],
                                },
                            },
                        },
                    ],
                },
                mode: PRODUCTION ? 'production' : 'development',
                devtool: !PRODUCTION ? 'inline-source-map' : false,
                output: {
                    filename: 'CV.js',
                },
            })
        )
        .pipe(dest('dist/js'));
};

export const copy = () => {
    return src(['src/js/CV.js']).pipe(dest('dist'));
};

export const watchForChanges = () => {
    watch(['src/**/*', '!src/{js}', '!src/{js}/**/*'], series(copy, reload));
    watch('src/js/**/*.js', series(scripts, reload));
    watch('**/*.html', reload);
};

export const clean = () => del(['dist']);

export const dev = series(clean, parallel(scripts), serve, watchForChanges);
export const build = series(clean, scripts);
export default dev;
