describe('zabbix', ()=> {

    const Monitor = require('../../../monitor.js');

    var proxyquire = require('proxyquire').noCallThru();

    it('zabbix', ()=> {

        const sendSpy = sinon.spy();

        var stubs = {
            'zabbix-sender': function() {
                this.send = sendSpy;
            }
        };


        const zabbixOutput = proxyquire('../../../output/zabbix.js', stubs);
        const monitor = new Monitor();
        const stub1 = sinon.stub().returns(1);
        const stub2 = sinon.stub().returns(2);

        monitor.addInput('test1', stub1);
        monitor.addInput('test2', stub2);

        monitor.addOutput('zabbix', zabbixOutput({log: true}));

        monitor.start();


        assert.calledOnce(sendSpy);
        assert.calledOnce(stub1);
        assert.calledOnce(stub2);
    });

});