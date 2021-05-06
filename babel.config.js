/*
 * @Description: 
 * @Author: qxp
 * @Date: 2021-05-06 15:20:56
 * @LastEditors: qxp
 * @LastEditTime: 2021-05-06 15:20:57
 */

module.exports = function(api) {
    api.cache(true);
    
    const presets = [
        ['@babel/preset-env', {
            targets: [
                'last 2 version',
                'ie >= 9'
            ]
        }],
        '@babel/preset-react'
    ];
    
    return {
        presets
    }
}