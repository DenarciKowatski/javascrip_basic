module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                excluede: /node_modules/,
                use:{
                    loader:'babel-loader',
                }
            }
        ],
    },
};