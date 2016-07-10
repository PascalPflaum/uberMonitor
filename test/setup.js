const uO = require('uber.objects')();

//loading test modules
chai = require('chai');
sinon = require('sinon');

//configure chai
chai.config.includeStack = true;
assert = uO.merge(chai.assert, sinon.assert);