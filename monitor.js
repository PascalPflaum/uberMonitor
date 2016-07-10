const uO = require('uber.objects')();

class Monitor {

    constructor() {

        const self = this;
        const dataGetter = {};
        const outputs = {};
        const interval = 60 * 1000;
        var started = false;
        var timeoutKeeper;

        self.addInput = (dataName, dataGetterFunction) => {
            dataGetter[dataName] = dataGetterFunction;
            return self;
        };

        self.addOutput = (outputName, outputFunction) => {
            outputs[outputName] = outputFunction;
            return self;
        };

        self.getData = () => uO.map(dataGetter, (getter)=> getter());

        self.start = () => {

            if (!started) {
                started = true;
                sendData();
            }

            return self;
        };


        const sendData = () => {

            clearTimeout(timeoutKeeper);
            var data = self.getData();
            uO.forEach(outputs, (output)=> output(data));
            timeoutKeeper = setTimeout(sendData, interval);
        };

        return self;

    }
}

module.exports = Monitor;
