describe('console', ()=> {

    const Monitor = require('../../../monitor.js');
    const consoleOutput = require('../../../output/console.js');

    it('console', ()=> {
        const monitor = new Monitor();
        const stub1 = sinon.stub().returns(1);
        const stub2 = sinon.stub().returns(2);

        monitor.addInput('test1', stub1);
        monitor.addInput('test2', stub2);

        const consoleStub = sinon.stub(console, 'dir');
        monitor.addOutput('console', consoleOutput());

        monitor.start();

        console.dir.restore();

        assert.calledOnce(consoleStub);
        assert.deepEqual(consoleStub.args[0], [{test1:1,test2:2}]);
        assert.calledOnce(stub1);
        assert.calledOnce(stub2);
    });

});