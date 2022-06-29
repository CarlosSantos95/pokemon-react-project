const HtmlWebpackPlugin = require('html-webpack-plugin');
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

module.exports = (env, argv) => {
    const { mode } = argv;
    const isProduction = mode === 'production';
    return {
        entry: './src/index.js',
        output: {
            filename: isProduction ? '[name].[contenthash].js' : 'main.js',
            path: path.resolve(__dirname, 'build')
        },
        plugins: [
            new HtmlWebpackPlugin({ template: 'src/index.html' })
        ],
        module: { rules },
        devServer: {
            open: true, // open browser
            port: 3000,
            // overlay: true, // shows errors in the browser as a overlay
            compress: true
        }
    }
}