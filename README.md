# webpack-barba-gsap-boilerplate
ES6 Webpack template with barba.js, gsap.js plus a few extra goodies!
This boilerplate is using the free public version of GSAP v3.6.0
The ultimate boilerplate for a static HTML/CSS/JS website.

## Install
```
git clone https://github.com/robbiecren07/webpack-barba-gsap-boilerplate.git your-app # change your-app to the name of your project
cd your-app
git remote remove origin
# edit the package.json, then continue on
npm install
npm run dev
```

## Build for prod
```
npm run build
```

## The exra goodies
**Plugins included & configured:** CleanWebpackPlugin, TerserPlugin, MiniCssExtractPlugin,
OptimizeCSSAssetsPlugin, CopyPlugin and ImageminWebpWebpackPlugin.

**Dependencies included:** barba/core, barba/prefetch, gsap, imagemin, imagemin-webp, imagesloaded and reset-css

[Click here](https://greensock.com/docs/v3/Installation) for more information on GSAP Installation.