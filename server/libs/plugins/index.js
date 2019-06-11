module.exports = (server) => {
    require('./inert')(server);
    require('./vision')(server);
}