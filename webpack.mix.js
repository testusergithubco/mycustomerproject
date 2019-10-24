const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.js(['resources/js/app.js','resources/js/main3813.js'], 'public/js/app.js')
   .sass('resources/sass/app.scss', 'public/css').styles(['public/css/app.css','resources/css/owl.carousel.css','resources/css/owl.theme.default.min.css','resources/css/style.css','node_modules/font-awesome/css/font-awesome.css'],'public/css/app.css');
