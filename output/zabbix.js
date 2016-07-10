const ZabbixSender = require('zabbix-sender');

module.exports = (config) => {
    const zabbix = new ZabbixSender(config);
    return (data) => {
        zabbix.send(data, (err, stdout, stderr) => {
            if (err && config && config.onError) {
                config.onError(err, stdout, stderr);
            }
        });
    };
};