describe('uber.monitor', ()=> {

    const Monitor = require('../../monitor.js');

    it('just start', ()=> {
        const monitor = new Monitor();
        monitor.start();
    });

    describe('input', ()=> {

        describe('single data getter', ()=> {

            it('is called when started', () => {

                const monitor = new Monitor();
                const spy = sinon.spy();

                monitor.addInput('test', spy);

                monitor.start();

                assert.calledOnce(spy);
            });

            it('is called, when getData is called', () => {

                const monitor = new Monitor();
                const stub = sinon.stub().returns(1);

                monitor.addInput('test', stub);

                const data = monitor.getData();

                assert.calledOnce(stub);
                assert.equal(data.test, 1);
            });

        });

        describe('two data getter', ()=> {

            it('is called when started', () => {

                const monitor = new Monitor();
                const spy1 = sinon.spy();
                const spy2 = sinon.spy();

                monitor.addInput('test1', spy1);
                monitor.addInput('test2', spy2);

                monitor.start();

                assert.calledOnce(spy1);
                assert.calledOnce(spy2);
            });

            it('is called, when getData is called', () => {

                const monitor = new Monitor();
                const stub1 = sinon.stub().returns(1);
                const stub2 = sinon.stub().returns(2);

                monitor.addInput('test1', stub1);
                monitor.addInput('test2', stub2);

                const data = monitor.getData();

                assert.calledOnce(stub1);
                assert.calledOnce(stub2);
                assert.equal(data.test1, 1);
                assert.equal(data.test2, 2);
            });

        });

    });




});