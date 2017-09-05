var webpack = require('webpack'); // import

module.exports = {

    // webpack의 핵심적인 기능은 코드를 한 파일로 합침.

    entry: './src/index.js', // 여기를 기점으로 파일을 불러오고 index.js에서 파일을 또 불러옴.

    output: {
        path: __dirname + '/public/', // 저장될 디렉터리 경로
        filename: 'bundle.js' // 합친 파일을 bundle.js로 저장한다.
    },

    devServer: { // 개발 서버 설정
        hot: true, // 수정될때마다 리로딩함.
        inline: true, // hot 리로딩에서 필요한 webpack devSErver를 bundle.js에 넣어줌.
        host: '0.0.0.0', // default value localhost
        port: 4000, // dev-Server port
        contentBase: __dirname + '/public/', // output 파일의 위치
    },

    module: {
        loaders: [ // 일반 자바스크립트 형식으로 변환. ( scss , html 도 변환가능 )
            {
                test: /\.js$/,
                loader: ['react-hot-loader','babel-loader?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [ // 자동으로 리로딩하는 핫 로더의 플러그인을 등록해줌.
        new webpack.HotModuleReplacementPlugin()
    ]
}