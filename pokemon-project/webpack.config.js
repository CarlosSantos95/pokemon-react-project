const path = require('path');
const rulesForJavaScript = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-react', {
                    runtime: 'automatic' //classic
                }
            ]
        ]
    }
}

const rulesForStylesCSS = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
}

const rulesForStylesSASS = {
    test: /\.s[ac]ss$/i,
    use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
    ],
}

const rules = [rulesForJavaScript, rulesForStylesSASS, rulesForStylesCSS]

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules
    }
}