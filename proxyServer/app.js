const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
app.use(cors()); 

app.use('/api', createProxyMiddleware({ 
    target: 'https://qa2.sunbasedata.com', 
    changeOrigin: true,
    pathRewrite: {
        [`^/api`]: 'sunbase/portal/api',
    },
    timeout: 5000,
}));
app.listen(3000, () => {
    console.log('Proxy server is running on port 3000');
});