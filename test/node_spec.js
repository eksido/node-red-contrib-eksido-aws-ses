var should = require('should');
var helper = require('node-red-node-test-helper');
var node = require('../node.js');

helper.init(require.resolve('node-red'));

describe('eksido-aws-ses node', function () {

    before(function (done) {
        helper.startServer(done);
    });

    after(function (done) {
        helper.stopServer(done);
    });

    afterEach(function () {
        helper.unload();
    });

    it('should be loaded', function (done) {
        var flow = [{ id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses' }];
        helper.load(node, flow, function () {
            var n1 = helper.getNode('n1');
            n1.should.have.property('name', 'eksido-aws-ses');
            done();
        });
    });

    it('should handle GET_CloneReceiptRuleSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_CloneReceiptRuleSet',
                GET_CloneReceiptRuleSet_ruleSetName: '<node property>', // (1) define node properties
                GET_CloneReceiptRuleSet_originalRuleSetName: '<node property>', // (1) define node properties
                GET_CloneReceiptRuleSet_action: '<node property>', // (1) define node properties
                GET_CloneReceiptRuleSet_version: '<node property>', // (1) define node properties
                GET_CloneReceiptRuleSet_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_CloneReceiptRuleSet_xAmzDate: '<node property>', // (1) define node properties
                GET_CloneReceiptRuleSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_CloneReceiptRuleSet_xAmzCredential: '<node property>', // (1) define node properties
                GET_CloneReceiptRuleSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_CloneReceiptRuleSet_xAmzSignature: '<node property>', // (1) define node properties
                GET_CloneReceiptRuleSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_CloneReceiptRuleSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_CloneReceiptRuleSet',
                POST_CloneReceiptRuleSet_ruleSetName: '<node property>', // (1) define node properties
                POST_CloneReceiptRuleSet_originalRuleSetName: '<node property>', // (1) define node properties
                POST_CloneReceiptRuleSet_action: '<node property>', // (1) define node properties
                POST_CloneReceiptRuleSet_version: '<node property>', // (1) define node properties
                POST_CloneReceiptRuleSet_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_CloneReceiptRuleSet_xAmzDate: '<node property>', // (1) define node properties
                POST_CloneReceiptRuleSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_CloneReceiptRuleSet_xAmzCredential: '<node property>', // (1) define node properties
                POST_CloneReceiptRuleSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_CloneReceiptRuleSet_xAmzSignature: '<node property>', // (1) define node properties
                POST_CloneReceiptRuleSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_CreateConfigurationSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_CreateConfigurationSet',
                GET_CreateConfigurationSet_configurationSetName: '<node property>', // (1) define node properties
                GET_CreateConfigurationSet_action: '<node property>', // (1) define node properties
                GET_CreateConfigurationSet_version: '<node property>', // (1) define node properties
                GET_CreateConfigurationSet_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_CreateConfigurationSet_xAmzDate: '<node property>', // (1) define node properties
                GET_CreateConfigurationSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_CreateConfigurationSet_xAmzCredential: '<node property>', // (1) define node properties
                GET_CreateConfigurationSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_CreateConfigurationSet_xAmzSignature: '<node property>', // (1) define node properties
                GET_CreateConfigurationSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_CreateConfigurationSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_CreateConfigurationSet',
                POST_CreateConfigurationSet_configurationSetName: '<node property>', // (1) define node properties
                POST_CreateConfigurationSet_action: '<node property>', // (1) define node properties
                POST_CreateConfigurationSet_version: '<node property>', // (1) define node properties
                POST_CreateConfigurationSet_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_CreateConfigurationSet_xAmzDate: '<node property>', // (1) define node properties
                POST_CreateConfigurationSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_CreateConfigurationSet_xAmzCredential: '<node property>', // (1) define node properties
                POST_CreateConfigurationSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_CreateConfigurationSet_xAmzSignature: '<node property>', // (1) define node properties
                POST_CreateConfigurationSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_CreateConfigurationSetEventDestination()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_CreateConfigurationSetEventDestination',
                GET_CreateConfigurationSetEventDestination_configurationSetName: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetEventDestination_eventDestinationName: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetEventDestination_eventDestinationEnabled: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetEventDestination_eventDestinationMatchingEventTypes: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetEventDestination_eventDestinationKinesisFirehoseDestination: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetEventDestination_eventDestinationCloudWatchDestination: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetEventDestination_eventDestinationSnsDestination: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetEventDestination_action: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetEventDestination_version: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetEventDestination_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetEventDestination_xAmzDate: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetEventDestination_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetEventDestination_xAmzCredential: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetEventDestination_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetEventDestination_xAmzSignature: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetEventDestination_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_CreateConfigurationSetEventDestination()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_CreateConfigurationSetEventDestination',
                POST_CreateConfigurationSetEventDestination_configurationSetName: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetEventDestination_eventDestinationName: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetEventDestination_eventDestinationEnabled: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetEventDestination_eventDestinationMatchingEventTypes: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetEventDestination_eventDestinationKinesisFirehoseDestination: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetEventDestination_eventDestinationCloudWatchDestination: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetEventDestination_eventDestinationSnsDestination: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetEventDestination_action: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetEventDestination_version: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetEventDestination_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetEventDestination_xAmzDate: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetEventDestination_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetEventDestination_xAmzCredential: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetEventDestination_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetEventDestination_xAmzSignature: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetEventDestination_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_CreateConfigurationSetTrackingOptions()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_CreateConfigurationSetTrackingOptions',
                GET_CreateConfigurationSetTrackingOptions_configurationSetName: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetTrackingOptions_trackingOptionsCustomRedirectDomain: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetTrackingOptions_action: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetTrackingOptions_version: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetTrackingOptions_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetTrackingOptions_xAmzDate: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetTrackingOptions_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetTrackingOptions_xAmzCredential: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetTrackingOptions_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetTrackingOptions_xAmzSignature: '<node property>', // (1) define node properties
                GET_CreateConfigurationSetTrackingOptions_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_CreateConfigurationSetTrackingOptions()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_CreateConfigurationSetTrackingOptions',
                POST_CreateConfigurationSetTrackingOptions_configurationSetName: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetTrackingOptions_trackingOptionsCustomRedirectDomain: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetTrackingOptions_action: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetTrackingOptions_version: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetTrackingOptions_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetTrackingOptions_xAmzDate: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetTrackingOptions_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetTrackingOptions_xAmzCredential: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetTrackingOptions_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetTrackingOptions_xAmzSignature: '<node property>', // (1) define node properties
                POST_CreateConfigurationSetTrackingOptions_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_CreateCustomVerificationEmailTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_CreateCustomVerificationEmailTemplate',
                GET_CreateCustomVerificationEmailTemplate_templateName: '<node property>', // (1) define node properties
                GET_CreateCustomVerificationEmailTemplate_fromEmailAddress: '<node property>', // (1) define node properties
                GET_CreateCustomVerificationEmailTemplate_templateSubject: '<node property>', // (1) define node properties
                GET_CreateCustomVerificationEmailTemplate_templateContent: '<node property>', // (1) define node properties
                GET_CreateCustomVerificationEmailTemplate_successRedirectionUrl: '<node property>', // (1) define node properties
                GET_CreateCustomVerificationEmailTemplate_failureRedirectionUrl: '<node property>', // (1) define node properties
                GET_CreateCustomVerificationEmailTemplate_action: '<node property>', // (1) define node properties
                GET_CreateCustomVerificationEmailTemplate_version: '<node property>', // (1) define node properties
                GET_CreateCustomVerificationEmailTemplate_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_CreateCustomVerificationEmailTemplate_xAmzDate: '<node property>', // (1) define node properties
                GET_CreateCustomVerificationEmailTemplate_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_CreateCustomVerificationEmailTemplate_xAmzCredential: '<node property>', // (1) define node properties
                GET_CreateCustomVerificationEmailTemplate_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_CreateCustomVerificationEmailTemplate_xAmzSignature: '<node property>', // (1) define node properties
                GET_CreateCustomVerificationEmailTemplate_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_CreateCustomVerificationEmailTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_CreateCustomVerificationEmailTemplate',
                POST_CreateCustomVerificationEmailTemplate_templateName: '<node property>', // (1) define node properties
                POST_CreateCustomVerificationEmailTemplate_fromEmailAddress: '<node property>', // (1) define node properties
                POST_CreateCustomVerificationEmailTemplate_templateSubject: '<node property>', // (1) define node properties
                POST_CreateCustomVerificationEmailTemplate_templateContent: '<node property>', // (1) define node properties
                POST_CreateCustomVerificationEmailTemplate_successRedirectionUrl: '<node property>', // (1) define node properties
                POST_CreateCustomVerificationEmailTemplate_failureRedirectionUrl: '<node property>', // (1) define node properties
                POST_CreateCustomVerificationEmailTemplate_action: '<node property>', // (1) define node properties
                POST_CreateCustomVerificationEmailTemplate_version: '<node property>', // (1) define node properties
                POST_CreateCustomVerificationEmailTemplate_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_CreateCustomVerificationEmailTemplate_xAmzDate: '<node property>', // (1) define node properties
                POST_CreateCustomVerificationEmailTemplate_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_CreateCustomVerificationEmailTemplate_xAmzCredential: '<node property>', // (1) define node properties
                POST_CreateCustomVerificationEmailTemplate_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_CreateCustomVerificationEmailTemplate_xAmzSignature: '<node property>', // (1) define node properties
                POST_CreateCustomVerificationEmailTemplate_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_CreateReceiptFilter()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_CreateReceiptFilter',
                GET_CreateReceiptFilter_filterName: '<node property>', // (1) define node properties
                GET_CreateReceiptFilter_filterIpFilter: '<node property>', // (1) define node properties
                GET_CreateReceiptFilter_action: '<node property>', // (1) define node properties
                GET_CreateReceiptFilter_version: '<node property>', // (1) define node properties
                GET_CreateReceiptFilter_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_CreateReceiptFilter_xAmzDate: '<node property>', // (1) define node properties
                GET_CreateReceiptFilter_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_CreateReceiptFilter_xAmzCredential: '<node property>', // (1) define node properties
                GET_CreateReceiptFilter_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_CreateReceiptFilter_xAmzSignature: '<node property>', // (1) define node properties
                GET_CreateReceiptFilter_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_CreateReceiptFilter()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_CreateReceiptFilter',
                POST_CreateReceiptFilter_filterName: '<node property>', // (1) define node properties
                POST_CreateReceiptFilter_filterIpFilter: '<node property>', // (1) define node properties
                POST_CreateReceiptFilter_action: '<node property>', // (1) define node properties
                POST_CreateReceiptFilter_version: '<node property>', // (1) define node properties
                POST_CreateReceiptFilter_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_CreateReceiptFilter_xAmzDate: '<node property>', // (1) define node properties
                POST_CreateReceiptFilter_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_CreateReceiptFilter_xAmzCredential: '<node property>', // (1) define node properties
                POST_CreateReceiptFilter_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_CreateReceiptFilter_xAmzSignature: '<node property>', // (1) define node properties
                POST_CreateReceiptFilter_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_CreateReceiptRule()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_CreateReceiptRule',
                GET_CreateReceiptRule_ruleSetName: '<node property>', // (1) define node properties
                GET_CreateReceiptRule_after: '<node property>', // (1) define node properties
                GET_CreateReceiptRule_ruleName: '<node property>', // (1) define node properties
                GET_CreateReceiptRule_ruleEnabled: '<node property>', // (1) define node properties
                GET_CreateReceiptRule_ruleTlsPolicy: '<node property>', // (1) define node properties
                GET_CreateReceiptRule_ruleRecipients: '<node property>', // (1) define node properties
                GET_CreateReceiptRule_ruleActions: '<node property>', // (1) define node properties
                GET_CreateReceiptRule_ruleScanEnabled: '<node property>', // (1) define node properties
                GET_CreateReceiptRule_action: '<node property>', // (1) define node properties
                GET_CreateReceiptRule_version: '<node property>', // (1) define node properties
                GET_CreateReceiptRule_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_CreateReceiptRule_xAmzDate: '<node property>', // (1) define node properties
                GET_CreateReceiptRule_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_CreateReceiptRule_xAmzCredential: '<node property>', // (1) define node properties
                GET_CreateReceiptRule_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_CreateReceiptRule_xAmzSignature: '<node property>', // (1) define node properties
                GET_CreateReceiptRule_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_CreateReceiptRule()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_CreateReceiptRule',
                POST_CreateReceiptRule_ruleSetName: '<node property>', // (1) define node properties
                POST_CreateReceiptRule_after: '<node property>', // (1) define node properties
                POST_CreateReceiptRule_ruleName: '<node property>', // (1) define node properties
                POST_CreateReceiptRule_ruleEnabled: '<node property>', // (1) define node properties
                POST_CreateReceiptRule_ruleTlsPolicy: '<node property>', // (1) define node properties
                POST_CreateReceiptRule_ruleRecipients: '<node property>', // (1) define node properties
                POST_CreateReceiptRule_ruleActions: '<node property>', // (1) define node properties
                POST_CreateReceiptRule_ruleScanEnabled: '<node property>', // (1) define node properties
                POST_CreateReceiptRule_action: '<node property>', // (1) define node properties
                POST_CreateReceiptRule_version: '<node property>', // (1) define node properties
                POST_CreateReceiptRule_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_CreateReceiptRule_xAmzDate: '<node property>', // (1) define node properties
                POST_CreateReceiptRule_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_CreateReceiptRule_xAmzCredential: '<node property>', // (1) define node properties
                POST_CreateReceiptRule_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_CreateReceiptRule_xAmzSignature: '<node property>', // (1) define node properties
                POST_CreateReceiptRule_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_CreateReceiptRuleSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_CreateReceiptRuleSet',
                GET_CreateReceiptRuleSet_ruleSetName: '<node property>', // (1) define node properties
                GET_CreateReceiptRuleSet_action: '<node property>', // (1) define node properties
                GET_CreateReceiptRuleSet_version: '<node property>', // (1) define node properties
                GET_CreateReceiptRuleSet_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_CreateReceiptRuleSet_xAmzDate: '<node property>', // (1) define node properties
                GET_CreateReceiptRuleSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_CreateReceiptRuleSet_xAmzCredential: '<node property>', // (1) define node properties
                GET_CreateReceiptRuleSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_CreateReceiptRuleSet_xAmzSignature: '<node property>', // (1) define node properties
                GET_CreateReceiptRuleSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_CreateReceiptRuleSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_CreateReceiptRuleSet',
                POST_CreateReceiptRuleSet_ruleSetName: '<node property>', // (1) define node properties
                POST_CreateReceiptRuleSet_action: '<node property>', // (1) define node properties
                POST_CreateReceiptRuleSet_version: '<node property>', // (1) define node properties
                POST_CreateReceiptRuleSet_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_CreateReceiptRuleSet_xAmzDate: '<node property>', // (1) define node properties
                POST_CreateReceiptRuleSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_CreateReceiptRuleSet_xAmzCredential: '<node property>', // (1) define node properties
                POST_CreateReceiptRuleSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_CreateReceiptRuleSet_xAmzSignature: '<node property>', // (1) define node properties
                POST_CreateReceiptRuleSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_CreateTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_CreateTemplate',
                GET_CreateTemplate_templateTemplateName: '<node property>', // (1) define node properties
                GET_CreateTemplate_templateSubjectPart: '<node property>', // (1) define node properties
                GET_CreateTemplate_templateTextPart: '<node property>', // (1) define node properties
                GET_CreateTemplate_templateHtmlPart: '<node property>', // (1) define node properties
                GET_CreateTemplate_action: '<node property>', // (1) define node properties
                GET_CreateTemplate_version: '<node property>', // (1) define node properties
                GET_CreateTemplate_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_CreateTemplate_xAmzDate: '<node property>', // (1) define node properties
                GET_CreateTemplate_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_CreateTemplate_xAmzCredential: '<node property>', // (1) define node properties
                GET_CreateTemplate_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_CreateTemplate_xAmzSignature: '<node property>', // (1) define node properties
                GET_CreateTemplate_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_CreateTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_CreateTemplate',
                POST_CreateTemplate_templateTemplateName: '<node property>', // (1) define node properties
                POST_CreateTemplate_templateSubjectPart: '<node property>', // (1) define node properties
                POST_CreateTemplate_templateTextPart: '<node property>', // (1) define node properties
                POST_CreateTemplate_templateHtmlPart: '<node property>', // (1) define node properties
                POST_CreateTemplate_action: '<node property>', // (1) define node properties
                POST_CreateTemplate_version: '<node property>', // (1) define node properties
                POST_CreateTemplate_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_CreateTemplate_xAmzDate: '<node property>', // (1) define node properties
                POST_CreateTemplate_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_CreateTemplate_xAmzCredential: '<node property>', // (1) define node properties
                POST_CreateTemplate_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_CreateTemplate_xAmzSignature: '<node property>', // (1) define node properties
                POST_CreateTemplate_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_DeleteConfigurationSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_DeleteConfigurationSet',
                GET_DeleteConfigurationSet_configurationSetName: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSet_action: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSet_version: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSet_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSet_xAmzDate: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSet_xAmzCredential: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSet_xAmzSignature: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_DeleteConfigurationSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_DeleteConfigurationSet',
                POST_DeleteConfigurationSet_configurationSetName: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSet_action: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSet_version: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSet_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSet_xAmzDate: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSet_xAmzCredential: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSet_xAmzSignature: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_DeleteConfigurationSetEventDestination()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_DeleteConfigurationSetEventDestination',
                GET_DeleteConfigurationSetEventDestination_configurationSetName: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSetEventDestination_eventDestinationName: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSetEventDestination_action: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSetEventDestination_version: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSetEventDestination_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSetEventDestination_xAmzDate: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSetEventDestination_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSetEventDestination_xAmzCredential: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSetEventDestination_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSetEventDestination_xAmzSignature: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSetEventDestination_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_DeleteConfigurationSetEventDestination()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_DeleteConfigurationSetEventDestination',
                POST_DeleteConfigurationSetEventDestination_configurationSetName: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSetEventDestination_eventDestinationName: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSetEventDestination_action: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSetEventDestination_version: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSetEventDestination_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSetEventDestination_xAmzDate: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSetEventDestination_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSetEventDestination_xAmzCredential: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSetEventDestination_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSetEventDestination_xAmzSignature: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSetEventDestination_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_DeleteConfigurationSetTrackingOptions()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_DeleteConfigurationSetTrackingOptions',
                GET_DeleteConfigurationSetTrackingOptions_configurationSetName: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSetTrackingOptions_action: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSetTrackingOptions_version: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSetTrackingOptions_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSetTrackingOptions_xAmzDate: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSetTrackingOptions_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSetTrackingOptions_xAmzCredential: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSetTrackingOptions_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSetTrackingOptions_xAmzSignature: '<node property>', // (1) define node properties
                GET_DeleteConfigurationSetTrackingOptions_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_DeleteConfigurationSetTrackingOptions()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_DeleteConfigurationSetTrackingOptions',
                POST_DeleteConfigurationSetTrackingOptions_configurationSetName: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSetTrackingOptions_action: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSetTrackingOptions_version: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSetTrackingOptions_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSetTrackingOptions_xAmzDate: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSetTrackingOptions_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSetTrackingOptions_xAmzCredential: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSetTrackingOptions_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSetTrackingOptions_xAmzSignature: '<node property>', // (1) define node properties
                POST_DeleteConfigurationSetTrackingOptions_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_DeleteCustomVerificationEmailTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_DeleteCustomVerificationEmailTemplate',
                GET_DeleteCustomVerificationEmailTemplate_templateName: '<node property>', // (1) define node properties
                GET_DeleteCustomVerificationEmailTemplate_action: '<node property>', // (1) define node properties
                GET_DeleteCustomVerificationEmailTemplate_version: '<node property>', // (1) define node properties
                GET_DeleteCustomVerificationEmailTemplate_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_DeleteCustomVerificationEmailTemplate_xAmzDate: '<node property>', // (1) define node properties
                GET_DeleteCustomVerificationEmailTemplate_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_DeleteCustomVerificationEmailTemplate_xAmzCredential: '<node property>', // (1) define node properties
                GET_DeleteCustomVerificationEmailTemplate_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_DeleteCustomVerificationEmailTemplate_xAmzSignature: '<node property>', // (1) define node properties
                GET_DeleteCustomVerificationEmailTemplate_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_DeleteCustomVerificationEmailTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_DeleteCustomVerificationEmailTemplate',
                POST_DeleteCustomVerificationEmailTemplate_templateName: '<node property>', // (1) define node properties
                POST_DeleteCustomVerificationEmailTemplate_action: '<node property>', // (1) define node properties
                POST_DeleteCustomVerificationEmailTemplate_version: '<node property>', // (1) define node properties
                POST_DeleteCustomVerificationEmailTemplate_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_DeleteCustomVerificationEmailTemplate_xAmzDate: '<node property>', // (1) define node properties
                POST_DeleteCustomVerificationEmailTemplate_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_DeleteCustomVerificationEmailTemplate_xAmzCredential: '<node property>', // (1) define node properties
                POST_DeleteCustomVerificationEmailTemplate_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_DeleteCustomVerificationEmailTemplate_xAmzSignature: '<node property>', // (1) define node properties
                POST_DeleteCustomVerificationEmailTemplate_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_DeleteIdentity()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_DeleteIdentity',
                GET_DeleteIdentity_identity: '<node property>', // (1) define node properties
                GET_DeleteIdentity_action: '<node property>', // (1) define node properties
                GET_DeleteIdentity_version: '<node property>', // (1) define node properties
                GET_DeleteIdentity_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_DeleteIdentity_xAmzDate: '<node property>', // (1) define node properties
                GET_DeleteIdentity_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_DeleteIdentity_xAmzCredential: '<node property>', // (1) define node properties
                GET_DeleteIdentity_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_DeleteIdentity_xAmzSignature: '<node property>', // (1) define node properties
                GET_DeleteIdentity_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_DeleteIdentity()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_DeleteIdentity',
                POST_DeleteIdentity_identity: '<node property>', // (1) define node properties
                POST_DeleteIdentity_action: '<node property>', // (1) define node properties
                POST_DeleteIdentity_version: '<node property>', // (1) define node properties
                POST_DeleteIdentity_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_DeleteIdentity_xAmzDate: '<node property>', // (1) define node properties
                POST_DeleteIdentity_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_DeleteIdentity_xAmzCredential: '<node property>', // (1) define node properties
                POST_DeleteIdentity_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_DeleteIdentity_xAmzSignature: '<node property>', // (1) define node properties
                POST_DeleteIdentity_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_DeleteIdentityPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_DeleteIdentityPolicy',
                GET_DeleteIdentityPolicy_identity: '<node property>', // (1) define node properties
                GET_DeleteIdentityPolicy_policyName: '<node property>', // (1) define node properties
                GET_DeleteIdentityPolicy_action: '<node property>', // (1) define node properties
                GET_DeleteIdentityPolicy_version: '<node property>', // (1) define node properties
                GET_DeleteIdentityPolicy_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_DeleteIdentityPolicy_xAmzDate: '<node property>', // (1) define node properties
                GET_DeleteIdentityPolicy_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_DeleteIdentityPolicy_xAmzCredential: '<node property>', // (1) define node properties
                GET_DeleteIdentityPolicy_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_DeleteIdentityPolicy_xAmzSignature: '<node property>', // (1) define node properties
                GET_DeleteIdentityPolicy_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_DeleteIdentityPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_DeleteIdentityPolicy',
                POST_DeleteIdentityPolicy_identity: '<node property>', // (1) define node properties
                POST_DeleteIdentityPolicy_policyName: '<node property>', // (1) define node properties
                POST_DeleteIdentityPolicy_action: '<node property>', // (1) define node properties
                POST_DeleteIdentityPolicy_version: '<node property>', // (1) define node properties
                POST_DeleteIdentityPolicy_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_DeleteIdentityPolicy_xAmzDate: '<node property>', // (1) define node properties
                POST_DeleteIdentityPolicy_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_DeleteIdentityPolicy_xAmzCredential: '<node property>', // (1) define node properties
                POST_DeleteIdentityPolicy_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_DeleteIdentityPolicy_xAmzSignature: '<node property>', // (1) define node properties
                POST_DeleteIdentityPolicy_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_DeleteReceiptFilter()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_DeleteReceiptFilter',
                GET_DeleteReceiptFilter_filterName: '<node property>', // (1) define node properties
                GET_DeleteReceiptFilter_action: '<node property>', // (1) define node properties
                GET_DeleteReceiptFilter_version: '<node property>', // (1) define node properties
                GET_DeleteReceiptFilter_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_DeleteReceiptFilter_xAmzDate: '<node property>', // (1) define node properties
                GET_DeleteReceiptFilter_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_DeleteReceiptFilter_xAmzCredential: '<node property>', // (1) define node properties
                GET_DeleteReceiptFilter_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_DeleteReceiptFilter_xAmzSignature: '<node property>', // (1) define node properties
                GET_DeleteReceiptFilter_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_DeleteReceiptFilter()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_DeleteReceiptFilter',
                POST_DeleteReceiptFilter_filterName: '<node property>', // (1) define node properties
                POST_DeleteReceiptFilter_action: '<node property>', // (1) define node properties
                POST_DeleteReceiptFilter_version: '<node property>', // (1) define node properties
                POST_DeleteReceiptFilter_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_DeleteReceiptFilter_xAmzDate: '<node property>', // (1) define node properties
                POST_DeleteReceiptFilter_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_DeleteReceiptFilter_xAmzCredential: '<node property>', // (1) define node properties
                POST_DeleteReceiptFilter_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_DeleteReceiptFilter_xAmzSignature: '<node property>', // (1) define node properties
                POST_DeleteReceiptFilter_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_DeleteReceiptRule()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_DeleteReceiptRule',
                GET_DeleteReceiptRule_ruleSetName: '<node property>', // (1) define node properties
                GET_DeleteReceiptRule_ruleName: '<node property>', // (1) define node properties
                GET_DeleteReceiptRule_action: '<node property>', // (1) define node properties
                GET_DeleteReceiptRule_version: '<node property>', // (1) define node properties
                GET_DeleteReceiptRule_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_DeleteReceiptRule_xAmzDate: '<node property>', // (1) define node properties
                GET_DeleteReceiptRule_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_DeleteReceiptRule_xAmzCredential: '<node property>', // (1) define node properties
                GET_DeleteReceiptRule_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_DeleteReceiptRule_xAmzSignature: '<node property>', // (1) define node properties
                GET_DeleteReceiptRule_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_DeleteReceiptRule()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_DeleteReceiptRule',
                POST_DeleteReceiptRule_ruleSetName: '<node property>', // (1) define node properties
                POST_DeleteReceiptRule_ruleName: '<node property>', // (1) define node properties
                POST_DeleteReceiptRule_action: '<node property>', // (1) define node properties
                POST_DeleteReceiptRule_version: '<node property>', // (1) define node properties
                POST_DeleteReceiptRule_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_DeleteReceiptRule_xAmzDate: '<node property>', // (1) define node properties
                POST_DeleteReceiptRule_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_DeleteReceiptRule_xAmzCredential: '<node property>', // (1) define node properties
                POST_DeleteReceiptRule_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_DeleteReceiptRule_xAmzSignature: '<node property>', // (1) define node properties
                POST_DeleteReceiptRule_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_DeleteReceiptRuleSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_DeleteReceiptRuleSet',
                GET_DeleteReceiptRuleSet_ruleSetName: '<node property>', // (1) define node properties
                GET_DeleteReceiptRuleSet_action: '<node property>', // (1) define node properties
                GET_DeleteReceiptRuleSet_version: '<node property>', // (1) define node properties
                GET_DeleteReceiptRuleSet_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_DeleteReceiptRuleSet_xAmzDate: '<node property>', // (1) define node properties
                GET_DeleteReceiptRuleSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_DeleteReceiptRuleSet_xAmzCredential: '<node property>', // (1) define node properties
                GET_DeleteReceiptRuleSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_DeleteReceiptRuleSet_xAmzSignature: '<node property>', // (1) define node properties
                GET_DeleteReceiptRuleSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_DeleteReceiptRuleSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_DeleteReceiptRuleSet',
                POST_DeleteReceiptRuleSet_ruleSetName: '<node property>', // (1) define node properties
                POST_DeleteReceiptRuleSet_action: '<node property>', // (1) define node properties
                POST_DeleteReceiptRuleSet_version: '<node property>', // (1) define node properties
                POST_DeleteReceiptRuleSet_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_DeleteReceiptRuleSet_xAmzDate: '<node property>', // (1) define node properties
                POST_DeleteReceiptRuleSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_DeleteReceiptRuleSet_xAmzCredential: '<node property>', // (1) define node properties
                POST_DeleteReceiptRuleSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_DeleteReceiptRuleSet_xAmzSignature: '<node property>', // (1) define node properties
                POST_DeleteReceiptRuleSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_DeleteTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_DeleteTemplate',
                GET_DeleteTemplate_templateName: '<node property>', // (1) define node properties
                GET_DeleteTemplate_action: '<node property>', // (1) define node properties
                GET_DeleteTemplate_version: '<node property>', // (1) define node properties
                GET_DeleteTemplate_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_DeleteTemplate_xAmzDate: '<node property>', // (1) define node properties
                GET_DeleteTemplate_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_DeleteTemplate_xAmzCredential: '<node property>', // (1) define node properties
                GET_DeleteTemplate_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_DeleteTemplate_xAmzSignature: '<node property>', // (1) define node properties
                GET_DeleteTemplate_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_DeleteTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_DeleteTemplate',
                POST_DeleteTemplate_templateName: '<node property>', // (1) define node properties
                POST_DeleteTemplate_action: '<node property>', // (1) define node properties
                POST_DeleteTemplate_version: '<node property>', // (1) define node properties
                POST_DeleteTemplate_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_DeleteTemplate_xAmzDate: '<node property>', // (1) define node properties
                POST_DeleteTemplate_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_DeleteTemplate_xAmzCredential: '<node property>', // (1) define node properties
                POST_DeleteTemplate_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_DeleteTemplate_xAmzSignature: '<node property>', // (1) define node properties
                POST_DeleteTemplate_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_DeleteVerifiedEmailAddress()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_DeleteVerifiedEmailAddress',
                GET_DeleteVerifiedEmailAddress_emailAddress: '<node property>', // (1) define node properties
                GET_DeleteVerifiedEmailAddress_action: '<node property>', // (1) define node properties
                GET_DeleteVerifiedEmailAddress_version: '<node property>', // (1) define node properties
                GET_DeleteVerifiedEmailAddress_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_DeleteVerifiedEmailAddress_xAmzDate: '<node property>', // (1) define node properties
                GET_DeleteVerifiedEmailAddress_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_DeleteVerifiedEmailAddress_xAmzCredential: '<node property>', // (1) define node properties
                GET_DeleteVerifiedEmailAddress_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_DeleteVerifiedEmailAddress_xAmzSignature: '<node property>', // (1) define node properties
                GET_DeleteVerifiedEmailAddress_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_DeleteVerifiedEmailAddress()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_DeleteVerifiedEmailAddress',
                POST_DeleteVerifiedEmailAddress_emailAddress: '<node property>', // (1) define node properties
                POST_DeleteVerifiedEmailAddress_action: '<node property>', // (1) define node properties
                POST_DeleteVerifiedEmailAddress_version: '<node property>', // (1) define node properties
                POST_DeleteVerifiedEmailAddress_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_DeleteVerifiedEmailAddress_xAmzDate: '<node property>', // (1) define node properties
                POST_DeleteVerifiedEmailAddress_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_DeleteVerifiedEmailAddress_xAmzCredential: '<node property>', // (1) define node properties
                POST_DeleteVerifiedEmailAddress_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_DeleteVerifiedEmailAddress_xAmzSignature: '<node property>', // (1) define node properties
                POST_DeleteVerifiedEmailAddress_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_DescribeActiveReceiptRuleSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_DescribeActiveReceiptRuleSet',
                GET_DescribeActiveReceiptRuleSet_action: '<node property>', // (1) define node properties
                GET_DescribeActiveReceiptRuleSet_version: '<node property>', // (1) define node properties
                GET_DescribeActiveReceiptRuleSet_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_DescribeActiveReceiptRuleSet_xAmzDate: '<node property>', // (1) define node properties
                GET_DescribeActiveReceiptRuleSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_DescribeActiveReceiptRuleSet_xAmzCredential: '<node property>', // (1) define node properties
                GET_DescribeActiveReceiptRuleSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_DescribeActiveReceiptRuleSet_xAmzSignature: '<node property>', // (1) define node properties
                GET_DescribeActiveReceiptRuleSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_DescribeActiveReceiptRuleSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_DescribeActiveReceiptRuleSet',
                POST_DescribeActiveReceiptRuleSet_action: '<node property>', // (1) define node properties
                POST_DescribeActiveReceiptRuleSet_version: '<node property>', // (1) define node properties
                POST_DescribeActiveReceiptRuleSet_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_DescribeActiveReceiptRuleSet_xAmzDate: '<node property>', // (1) define node properties
                POST_DescribeActiveReceiptRuleSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_DescribeActiveReceiptRuleSet_xAmzCredential: '<node property>', // (1) define node properties
                POST_DescribeActiveReceiptRuleSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_DescribeActiveReceiptRuleSet_xAmzSignature: '<node property>', // (1) define node properties
                POST_DescribeActiveReceiptRuleSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_DescribeConfigurationSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_DescribeConfigurationSet',
                GET_DescribeConfigurationSet_configurationSetName: '<node property>', // (1) define node properties
                GET_DescribeConfigurationSet_configurationSetAttributeNames: '<node property>', // (1) define node properties
                GET_DescribeConfigurationSet_action: '<node property>', // (1) define node properties
                GET_DescribeConfigurationSet_version: '<node property>', // (1) define node properties
                GET_DescribeConfigurationSet_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_DescribeConfigurationSet_xAmzDate: '<node property>', // (1) define node properties
                GET_DescribeConfigurationSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_DescribeConfigurationSet_xAmzCredential: '<node property>', // (1) define node properties
                GET_DescribeConfigurationSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_DescribeConfigurationSet_xAmzSignature: '<node property>', // (1) define node properties
                GET_DescribeConfigurationSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_DescribeConfigurationSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_DescribeConfigurationSet',
                POST_DescribeConfigurationSet_configurationSetName: '<node property>', // (1) define node properties
                POST_DescribeConfigurationSet_configurationSetAttributeNames: '<node property>', // (1) define node properties
                POST_DescribeConfigurationSet_action: '<node property>', // (1) define node properties
                POST_DescribeConfigurationSet_version: '<node property>', // (1) define node properties
                POST_DescribeConfigurationSet_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_DescribeConfigurationSet_xAmzDate: '<node property>', // (1) define node properties
                POST_DescribeConfigurationSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_DescribeConfigurationSet_xAmzCredential: '<node property>', // (1) define node properties
                POST_DescribeConfigurationSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_DescribeConfigurationSet_xAmzSignature: '<node property>', // (1) define node properties
                POST_DescribeConfigurationSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_DescribeReceiptRule()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_DescribeReceiptRule',
                GET_DescribeReceiptRule_ruleSetName: '<node property>', // (1) define node properties
                GET_DescribeReceiptRule_ruleName: '<node property>', // (1) define node properties
                GET_DescribeReceiptRule_action: '<node property>', // (1) define node properties
                GET_DescribeReceiptRule_version: '<node property>', // (1) define node properties
                GET_DescribeReceiptRule_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_DescribeReceiptRule_xAmzDate: '<node property>', // (1) define node properties
                GET_DescribeReceiptRule_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_DescribeReceiptRule_xAmzCredential: '<node property>', // (1) define node properties
                GET_DescribeReceiptRule_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_DescribeReceiptRule_xAmzSignature: '<node property>', // (1) define node properties
                GET_DescribeReceiptRule_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_DescribeReceiptRule()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_DescribeReceiptRule',
                POST_DescribeReceiptRule_ruleSetName: '<node property>', // (1) define node properties
                POST_DescribeReceiptRule_ruleName: '<node property>', // (1) define node properties
                POST_DescribeReceiptRule_action: '<node property>', // (1) define node properties
                POST_DescribeReceiptRule_version: '<node property>', // (1) define node properties
                POST_DescribeReceiptRule_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_DescribeReceiptRule_xAmzDate: '<node property>', // (1) define node properties
                POST_DescribeReceiptRule_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_DescribeReceiptRule_xAmzCredential: '<node property>', // (1) define node properties
                POST_DescribeReceiptRule_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_DescribeReceiptRule_xAmzSignature: '<node property>', // (1) define node properties
                POST_DescribeReceiptRule_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_DescribeReceiptRuleSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_DescribeReceiptRuleSet',
                GET_DescribeReceiptRuleSet_ruleSetName: '<node property>', // (1) define node properties
                GET_DescribeReceiptRuleSet_action: '<node property>', // (1) define node properties
                GET_DescribeReceiptRuleSet_version: '<node property>', // (1) define node properties
                GET_DescribeReceiptRuleSet_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_DescribeReceiptRuleSet_xAmzDate: '<node property>', // (1) define node properties
                GET_DescribeReceiptRuleSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_DescribeReceiptRuleSet_xAmzCredential: '<node property>', // (1) define node properties
                GET_DescribeReceiptRuleSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_DescribeReceiptRuleSet_xAmzSignature: '<node property>', // (1) define node properties
                GET_DescribeReceiptRuleSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_DescribeReceiptRuleSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_DescribeReceiptRuleSet',
                POST_DescribeReceiptRuleSet_ruleSetName: '<node property>', // (1) define node properties
                POST_DescribeReceiptRuleSet_action: '<node property>', // (1) define node properties
                POST_DescribeReceiptRuleSet_version: '<node property>', // (1) define node properties
                POST_DescribeReceiptRuleSet_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_DescribeReceiptRuleSet_xAmzDate: '<node property>', // (1) define node properties
                POST_DescribeReceiptRuleSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_DescribeReceiptRuleSet_xAmzCredential: '<node property>', // (1) define node properties
                POST_DescribeReceiptRuleSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_DescribeReceiptRuleSet_xAmzSignature: '<node property>', // (1) define node properties
                POST_DescribeReceiptRuleSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_GetAccountSendingEnabled()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_GetAccountSendingEnabled',
                GET_GetAccountSendingEnabled_action: '<node property>', // (1) define node properties
                GET_GetAccountSendingEnabled_version: '<node property>', // (1) define node properties
                GET_GetAccountSendingEnabled_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_GetAccountSendingEnabled_xAmzDate: '<node property>', // (1) define node properties
                GET_GetAccountSendingEnabled_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_GetAccountSendingEnabled_xAmzCredential: '<node property>', // (1) define node properties
                GET_GetAccountSendingEnabled_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_GetAccountSendingEnabled_xAmzSignature: '<node property>', // (1) define node properties
                GET_GetAccountSendingEnabled_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_GetAccountSendingEnabled()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_GetAccountSendingEnabled',
                POST_GetAccountSendingEnabled_action: '<node property>', // (1) define node properties
                POST_GetAccountSendingEnabled_version: '<node property>', // (1) define node properties
                POST_GetAccountSendingEnabled_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_GetAccountSendingEnabled_xAmzDate: '<node property>', // (1) define node properties
                POST_GetAccountSendingEnabled_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_GetAccountSendingEnabled_xAmzCredential: '<node property>', // (1) define node properties
                POST_GetAccountSendingEnabled_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_GetAccountSendingEnabled_xAmzSignature: '<node property>', // (1) define node properties
                POST_GetAccountSendingEnabled_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_GetCustomVerificationEmailTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_GetCustomVerificationEmailTemplate',
                GET_GetCustomVerificationEmailTemplate_templateName: '<node property>', // (1) define node properties
                GET_GetCustomVerificationEmailTemplate_action: '<node property>', // (1) define node properties
                GET_GetCustomVerificationEmailTemplate_version: '<node property>', // (1) define node properties
                GET_GetCustomVerificationEmailTemplate_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_GetCustomVerificationEmailTemplate_xAmzDate: '<node property>', // (1) define node properties
                GET_GetCustomVerificationEmailTemplate_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_GetCustomVerificationEmailTemplate_xAmzCredential: '<node property>', // (1) define node properties
                GET_GetCustomVerificationEmailTemplate_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_GetCustomVerificationEmailTemplate_xAmzSignature: '<node property>', // (1) define node properties
                GET_GetCustomVerificationEmailTemplate_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_GetCustomVerificationEmailTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_GetCustomVerificationEmailTemplate',
                POST_GetCustomVerificationEmailTemplate_templateName: '<node property>', // (1) define node properties
                POST_GetCustomVerificationEmailTemplate_action: '<node property>', // (1) define node properties
                POST_GetCustomVerificationEmailTemplate_version: '<node property>', // (1) define node properties
                POST_GetCustomVerificationEmailTemplate_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_GetCustomVerificationEmailTemplate_xAmzDate: '<node property>', // (1) define node properties
                POST_GetCustomVerificationEmailTemplate_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_GetCustomVerificationEmailTemplate_xAmzCredential: '<node property>', // (1) define node properties
                POST_GetCustomVerificationEmailTemplate_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_GetCustomVerificationEmailTemplate_xAmzSignature: '<node property>', // (1) define node properties
                POST_GetCustomVerificationEmailTemplate_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_GetIdentityDkimAttributes()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_GetIdentityDkimAttributes',
                GET_GetIdentityDkimAttributes_identities: '<node property>', // (1) define node properties
                GET_GetIdentityDkimAttributes_action: '<node property>', // (1) define node properties
                GET_GetIdentityDkimAttributes_version: '<node property>', // (1) define node properties
                GET_GetIdentityDkimAttributes_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_GetIdentityDkimAttributes_xAmzDate: '<node property>', // (1) define node properties
                GET_GetIdentityDkimAttributes_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_GetIdentityDkimAttributes_xAmzCredential: '<node property>', // (1) define node properties
                GET_GetIdentityDkimAttributes_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_GetIdentityDkimAttributes_xAmzSignature: '<node property>', // (1) define node properties
                GET_GetIdentityDkimAttributes_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_GetIdentityDkimAttributes()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_GetIdentityDkimAttributes',
                POST_GetIdentityDkimAttributes_identities: '<node property>', // (1) define node properties
                POST_GetIdentityDkimAttributes_action: '<node property>', // (1) define node properties
                POST_GetIdentityDkimAttributes_version: '<node property>', // (1) define node properties
                POST_GetIdentityDkimAttributes_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_GetIdentityDkimAttributes_xAmzDate: '<node property>', // (1) define node properties
                POST_GetIdentityDkimAttributes_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_GetIdentityDkimAttributes_xAmzCredential: '<node property>', // (1) define node properties
                POST_GetIdentityDkimAttributes_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_GetIdentityDkimAttributes_xAmzSignature: '<node property>', // (1) define node properties
                POST_GetIdentityDkimAttributes_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_GetIdentityMailFromDomainAttributes()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_GetIdentityMailFromDomainAttributes',
                GET_GetIdentityMailFromDomainAttributes_identities: '<node property>', // (1) define node properties
                GET_GetIdentityMailFromDomainAttributes_action: '<node property>', // (1) define node properties
                GET_GetIdentityMailFromDomainAttributes_version: '<node property>', // (1) define node properties
                GET_GetIdentityMailFromDomainAttributes_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_GetIdentityMailFromDomainAttributes_xAmzDate: '<node property>', // (1) define node properties
                GET_GetIdentityMailFromDomainAttributes_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_GetIdentityMailFromDomainAttributes_xAmzCredential: '<node property>', // (1) define node properties
                GET_GetIdentityMailFromDomainAttributes_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_GetIdentityMailFromDomainAttributes_xAmzSignature: '<node property>', // (1) define node properties
                GET_GetIdentityMailFromDomainAttributes_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_GetIdentityMailFromDomainAttributes()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_GetIdentityMailFromDomainAttributes',
                POST_GetIdentityMailFromDomainAttributes_identities: '<node property>', // (1) define node properties
                POST_GetIdentityMailFromDomainAttributes_action: '<node property>', // (1) define node properties
                POST_GetIdentityMailFromDomainAttributes_version: '<node property>', // (1) define node properties
                POST_GetIdentityMailFromDomainAttributes_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_GetIdentityMailFromDomainAttributes_xAmzDate: '<node property>', // (1) define node properties
                POST_GetIdentityMailFromDomainAttributes_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_GetIdentityMailFromDomainAttributes_xAmzCredential: '<node property>', // (1) define node properties
                POST_GetIdentityMailFromDomainAttributes_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_GetIdentityMailFromDomainAttributes_xAmzSignature: '<node property>', // (1) define node properties
                POST_GetIdentityMailFromDomainAttributes_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_GetIdentityNotificationAttributes()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_GetIdentityNotificationAttributes',
                GET_GetIdentityNotificationAttributes_identities: '<node property>', // (1) define node properties
                GET_GetIdentityNotificationAttributes_action: '<node property>', // (1) define node properties
                GET_GetIdentityNotificationAttributes_version: '<node property>', // (1) define node properties
                GET_GetIdentityNotificationAttributes_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_GetIdentityNotificationAttributes_xAmzDate: '<node property>', // (1) define node properties
                GET_GetIdentityNotificationAttributes_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_GetIdentityNotificationAttributes_xAmzCredential: '<node property>', // (1) define node properties
                GET_GetIdentityNotificationAttributes_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_GetIdentityNotificationAttributes_xAmzSignature: '<node property>', // (1) define node properties
                GET_GetIdentityNotificationAttributes_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_GetIdentityNotificationAttributes()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_GetIdentityNotificationAttributes',
                POST_GetIdentityNotificationAttributes_identities: '<node property>', // (1) define node properties
                POST_GetIdentityNotificationAttributes_action: '<node property>', // (1) define node properties
                POST_GetIdentityNotificationAttributes_version: '<node property>', // (1) define node properties
                POST_GetIdentityNotificationAttributes_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_GetIdentityNotificationAttributes_xAmzDate: '<node property>', // (1) define node properties
                POST_GetIdentityNotificationAttributes_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_GetIdentityNotificationAttributes_xAmzCredential: '<node property>', // (1) define node properties
                POST_GetIdentityNotificationAttributes_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_GetIdentityNotificationAttributes_xAmzSignature: '<node property>', // (1) define node properties
                POST_GetIdentityNotificationAttributes_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_GetIdentityPolicies()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_GetIdentityPolicies',
                GET_GetIdentityPolicies_identity: '<node property>', // (1) define node properties
                GET_GetIdentityPolicies_policyNames: '<node property>', // (1) define node properties
                GET_GetIdentityPolicies_action: '<node property>', // (1) define node properties
                GET_GetIdentityPolicies_version: '<node property>', // (1) define node properties
                GET_GetIdentityPolicies_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_GetIdentityPolicies_xAmzDate: '<node property>', // (1) define node properties
                GET_GetIdentityPolicies_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_GetIdentityPolicies_xAmzCredential: '<node property>', // (1) define node properties
                GET_GetIdentityPolicies_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_GetIdentityPolicies_xAmzSignature: '<node property>', // (1) define node properties
                GET_GetIdentityPolicies_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_GetIdentityPolicies()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_GetIdentityPolicies',
                POST_GetIdentityPolicies_identity: '<node property>', // (1) define node properties
                POST_GetIdentityPolicies_policyNames: '<node property>', // (1) define node properties
                POST_GetIdentityPolicies_action: '<node property>', // (1) define node properties
                POST_GetIdentityPolicies_version: '<node property>', // (1) define node properties
                POST_GetIdentityPolicies_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_GetIdentityPolicies_xAmzDate: '<node property>', // (1) define node properties
                POST_GetIdentityPolicies_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_GetIdentityPolicies_xAmzCredential: '<node property>', // (1) define node properties
                POST_GetIdentityPolicies_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_GetIdentityPolicies_xAmzSignature: '<node property>', // (1) define node properties
                POST_GetIdentityPolicies_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_GetIdentityVerificationAttributes()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_GetIdentityVerificationAttributes',
                GET_GetIdentityVerificationAttributes_identities: '<node property>', // (1) define node properties
                GET_GetIdentityVerificationAttributes_action: '<node property>', // (1) define node properties
                GET_GetIdentityVerificationAttributes_version: '<node property>', // (1) define node properties
                GET_GetIdentityVerificationAttributes_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_GetIdentityVerificationAttributes_xAmzDate: '<node property>', // (1) define node properties
                GET_GetIdentityVerificationAttributes_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_GetIdentityVerificationAttributes_xAmzCredential: '<node property>', // (1) define node properties
                GET_GetIdentityVerificationAttributes_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_GetIdentityVerificationAttributes_xAmzSignature: '<node property>', // (1) define node properties
                GET_GetIdentityVerificationAttributes_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_GetIdentityVerificationAttributes()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_GetIdentityVerificationAttributes',
                POST_GetIdentityVerificationAttributes_identities: '<node property>', // (1) define node properties
                POST_GetIdentityVerificationAttributes_action: '<node property>', // (1) define node properties
                POST_GetIdentityVerificationAttributes_version: '<node property>', // (1) define node properties
                POST_GetIdentityVerificationAttributes_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_GetIdentityVerificationAttributes_xAmzDate: '<node property>', // (1) define node properties
                POST_GetIdentityVerificationAttributes_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_GetIdentityVerificationAttributes_xAmzCredential: '<node property>', // (1) define node properties
                POST_GetIdentityVerificationAttributes_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_GetIdentityVerificationAttributes_xAmzSignature: '<node property>', // (1) define node properties
                POST_GetIdentityVerificationAttributes_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_GetSendQuota()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_GetSendQuota',
                GET_GetSendQuota_action: '<node property>', // (1) define node properties
                GET_GetSendQuota_version: '<node property>', // (1) define node properties
                GET_GetSendQuota_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_GetSendQuota_xAmzDate: '<node property>', // (1) define node properties
                GET_GetSendQuota_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_GetSendQuota_xAmzCredential: '<node property>', // (1) define node properties
                GET_GetSendQuota_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_GetSendQuota_xAmzSignature: '<node property>', // (1) define node properties
                GET_GetSendQuota_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_GetSendQuota()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_GetSendQuota',
                POST_GetSendQuota_action: '<node property>', // (1) define node properties
                POST_GetSendQuota_version: '<node property>', // (1) define node properties
                POST_GetSendQuota_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_GetSendQuota_xAmzDate: '<node property>', // (1) define node properties
                POST_GetSendQuota_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_GetSendQuota_xAmzCredential: '<node property>', // (1) define node properties
                POST_GetSendQuota_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_GetSendQuota_xAmzSignature: '<node property>', // (1) define node properties
                POST_GetSendQuota_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_GetSendStatistics()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_GetSendStatistics',
                GET_GetSendStatistics_action: '<node property>', // (1) define node properties
                GET_GetSendStatistics_version: '<node property>', // (1) define node properties
                GET_GetSendStatistics_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_GetSendStatistics_xAmzDate: '<node property>', // (1) define node properties
                GET_GetSendStatistics_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_GetSendStatistics_xAmzCredential: '<node property>', // (1) define node properties
                GET_GetSendStatistics_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_GetSendStatistics_xAmzSignature: '<node property>', // (1) define node properties
                GET_GetSendStatistics_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_GetSendStatistics()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_GetSendStatistics',
                POST_GetSendStatistics_action: '<node property>', // (1) define node properties
                POST_GetSendStatistics_version: '<node property>', // (1) define node properties
                POST_GetSendStatistics_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_GetSendStatistics_xAmzDate: '<node property>', // (1) define node properties
                POST_GetSendStatistics_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_GetSendStatistics_xAmzCredential: '<node property>', // (1) define node properties
                POST_GetSendStatistics_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_GetSendStatistics_xAmzSignature: '<node property>', // (1) define node properties
                POST_GetSendStatistics_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_GetTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_GetTemplate',
                GET_GetTemplate_templateName: '<node property>', // (1) define node properties
                GET_GetTemplate_action: '<node property>', // (1) define node properties
                GET_GetTemplate_version: '<node property>', // (1) define node properties
                GET_GetTemplate_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_GetTemplate_xAmzDate: '<node property>', // (1) define node properties
                GET_GetTemplate_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_GetTemplate_xAmzCredential: '<node property>', // (1) define node properties
                GET_GetTemplate_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_GetTemplate_xAmzSignature: '<node property>', // (1) define node properties
                GET_GetTemplate_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_GetTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_GetTemplate',
                POST_GetTemplate_templateName: '<node property>', // (1) define node properties
                POST_GetTemplate_action: '<node property>', // (1) define node properties
                POST_GetTemplate_version: '<node property>', // (1) define node properties
                POST_GetTemplate_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_GetTemplate_xAmzDate: '<node property>', // (1) define node properties
                POST_GetTemplate_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_GetTemplate_xAmzCredential: '<node property>', // (1) define node properties
                POST_GetTemplate_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_GetTemplate_xAmzSignature: '<node property>', // (1) define node properties
                POST_GetTemplate_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_ListConfigurationSets()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_ListConfigurationSets',
                GET_ListConfigurationSets_nextToken: '<node property>', // (1) define node properties
                GET_ListConfigurationSets_maxItems: '<node property>', // (1) define node properties
                GET_ListConfigurationSets_action: '<node property>', // (1) define node properties
                GET_ListConfigurationSets_version: '<node property>', // (1) define node properties
                GET_ListConfigurationSets_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_ListConfigurationSets_xAmzDate: '<node property>', // (1) define node properties
                GET_ListConfigurationSets_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_ListConfigurationSets_xAmzCredential: '<node property>', // (1) define node properties
                GET_ListConfigurationSets_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_ListConfigurationSets_xAmzSignature: '<node property>', // (1) define node properties
                GET_ListConfigurationSets_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_ListConfigurationSets()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_ListConfigurationSets',
                POST_ListConfigurationSets_nextToken: '<node property>', // (1) define node properties
                POST_ListConfigurationSets_maxItems: '<node property>', // (1) define node properties
                POST_ListConfigurationSets_action: '<node property>', // (1) define node properties
                POST_ListConfigurationSets_version: '<node property>', // (1) define node properties
                POST_ListConfigurationSets_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_ListConfigurationSets_xAmzDate: '<node property>', // (1) define node properties
                POST_ListConfigurationSets_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_ListConfigurationSets_xAmzCredential: '<node property>', // (1) define node properties
                POST_ListConfigurationSets_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_ListConfigurationSets_xAmzSignature: '<node property>', // (1) define node properties
                POST_ListConfigurationSets_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_ListCustomVerificationEmailTemplates()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_ListCustomVerificationEmailTemplates',
                GET_ListCustomVerificationEmailTemplates_nextToken: '<node property>', // (1) define node properties
                GET_ListCustomVerificationEmailTemplates_maxResults: '<node property>', // (1) define node properties
                GET_ListCustomVerificationEmailTemplates_action: '<node property>', // (1) define node properties
                GET_ListCustomVerificationEmailTemplates_version: '<node property>', // (1) define node properties
                GET_ListCustomVerificationEmailTemplates_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_ListCustomVerificationEmailTemplates_xAmzDate: '<node property>', // (1) define node properties
                GET_ListCustomVerificationEmailTemplates_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_ListCustomVerificationEmailTemplates_xAmzCredential: '<node property>', // (1) define node properties
                GET_ListCustomVerificationEmailTemplates_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_ListCustomVerificationEmailTemplates_xAmzSignature: '<node property>', // (1) define node properties
                GET_ListCustomVerificationEmailTemplates_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_ListCustomVerificationEmailTemplates()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_ListCustomVerificationEmailTemplates',
                POST_ListCustomVerificationEmailTemplates_nextToken: '<node property>', // (1) define node properties
                POST_ListCustomVerificationEmailTemplates_maxResults: '<node property>', // (1) define node properties
                POST_ListCustomVerificationEmailTemplates_action: '<node property>', // (1) define node properties
                POST_ListCustomVerificationEmailTemplates_version: '<node property>', // (1) define node properties
                POST_ListCustomVerificationEmailTemplates_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_ListCustomVerificationEmailTemplates_xAmzDate: '<node property>', // (1) define node properties
                POST_ListCustomVerificationEmailTemplates_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_ListCustomVerificationEmailTemplates_xAmzCredential: '<node property>', // (1) define node properties
                POST_ListCustomVerificationEmailTemplates_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_ListCustomVerificationEmailTemplates_xAmzSignature: '<node property>', // (1) define node properties
                POST_ListCustomVerificationEmailTemplates_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_ListIdentities()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_ListIdentities',
                GET_ListIdentities_identityType: '<node property>', // (1) define node properties
                GET_ListIdentities_nextToken: '<node property>', // (1) define node properties
                GET_ListIdentities_maxItems: '<node property>', // (1) define node properties
                GET_ListIdentities_action: '<node property>', // (1) define node properties
                GET_ListIdentities_version: '<node property>', // (1) define node properties
                GET_ListIdentities_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_ListIdentities_xAmzDate: '<node property>', // (1) define node properties
                GET_ListIdentities_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_ListIdentities_xAmzCredential: '<node property>', // (1) define node properties
                GET_ListIdentities_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_ListIdentities_xAmzSignature: '<node property>', // (1) define node properties
                GET_ListIdentities_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_ListIdentities()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_ListIdentities',
                POST_ListIdentities_identityType: '<node property>', // (1) define node properties
                POST_ListIdentities_nextToken: '<node property>', // (1) define node properties
                POST_ListIdentities_maxItems: '<node property>', // (1) define node properties
                POST_ListIdentities_action: '<node property>', // (1) define node properties
                POST_ListIdentities_version: '<node property>', // (1) define node properties
                POST_ListIdentities_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_ListIdentities_xAmzDate: '<node property>', // (1) define node properties
                POST_ListIdentities_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_ListIdentities_xAmzCredential: '<node property>', // (1) define node properties
                POST_ListIdentities_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_ListIdentities_xAmzSignature: '<node property>', // (1) define node properties
                POST_ListIdentities_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_ListIdentityPolicies()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_ListIdentityPolicies',
                GET_ListIdentityPolicies_identity: '<node property>', // (1) define node properties
                GET_ListIdentityPolicies_action: '<node property>', // (1) define node properties
                GET_ListIdentityPolicies_version: '<node property>', // (1) define node properties
                GET_ListIdentityPolicies_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_ListIdentityPolicies_xAmzDate: '<node property>', // (1) define node properties
                GET_ListIdentityPolicies_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_ListIdentityPolicies_xAmzCredential: '<node property>', // (1) define node properties
                GET_ListIdentityPolicies_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_ListIdentityPolicies_xAmzSignature: '<node property>', // (1) define node properties
                GET_ListIdentityPolicies_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_ListIdentityPolicies()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_ListIdentityPolicies',
                POST_ListIdentityPolicies_identity: '<node property>', // (1) define node properties
                POST_ListIdentityPolicies_action: '<node property>', // (1) define node properties
                POST_ListIdentityPolicies_version: '<node property>', // (1) define node properties
                POST_ListIdentityPolicies_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_ListIdentityPolicies_xAmzDate: '<node property>', // (1) define node properties
                POST_ListIdentityPolicies_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_ListIdentityPolicies_xAmzCredential: '<node property>', // (1) define node properties
                POST_ListIdentityPolicies_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_ListIdentityPolicies_xAmzSignature: '<node property>', // (1) define node properties
                POST_ListIdentityPolicies_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_ListReceiptFilters()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_ListReceiptFilters',
                GET_ListReceiptFilters_action: '<node property>', // (1) define node properties
                GET_ListReceiptFilters_version: '<node property>', // (1) define node properties
                GET_ListReceiptFilters_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_ListReceiptFilters_xAmzDate: '<node property>', // (1) define node properties
                GET_ListReceiptFilters_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_ListReceiptFilters_xAmzCredential: '<node property>', // (1) define node properties
                GET_ListReceiptFilters_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_ListReceiptFilters_xAmzSignature: '<node property>', // (1) define node properties
                GET_ListReceiptFilters_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_ListReceiptFilters()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_ListReceiptFilters',
                POST_ListReceiptFilters_action: '<node property>', // (1) define node properties
                POST_ListReceiptFilters_version: '<node property>', // (1) define node properties
                POST_ListReceiptFilters_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_ListReceiptFilters_xAmzDate: '<node property>', // (1) define node properties
                POST_ListReceiptFilters_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_ListReceiptFilters_xAmzCredential: '<node property>', // (1) define node properties
                POST_ListReceiptFilters_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_ListReceiptFilters_xAmzSignature: '<node property>', // (1) define node properties
                POST_ListReceiptFilters_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_ListReceiptRuleSets()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_ListReceiptRuleSets',
                GET_ListReceiptRuleSets_nextToken: '<node property>', // (1) define node properties
                GET_ListReceiptRuleSets_action: '<node property>', // (1) define node properties
                GET_ListReceiptRuleSets_version: '<node property>', // (1) define node properties
                GET_ListReceiptRuleSets_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_ListReceiptRuleSets_xAmzDate: '<node property>', // (1) define node properties
                GET_ListReceiptRuleSets_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_ListReceiptRuleSets_xAmzCredential: '<node property>', // (1) define node properties
                GET_ListReceiptRuleSets_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_ListReceiptRuleSets_xAmzSignature: '<node property>', // (1) define node properties
                GET_ListReceiptRuleSets_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_ListReceiptRuleSets()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_ListReceiptRuleSets',
                POST_ListReceiptRuleSets_nextToken: '<node property>', // (1) define node properties
                POST_ListReceiptRuleSets_action: '<node property>', // (1) define node properties
                POST_ListReceiptRuleSets_version: '<node property>', // (1) define node properties
                POST_ListReceiptRuleSets_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_ListReceiptRuleSets_xAmzDate: '<node property>', // (1) define node properties
                POST_ListReceiptRuleSets_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_ListReceiptRuleSets_xAmzCredential: '<node property>', // (1) define node properties
                POST_ListReceiptRuleSets_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_ListReceiptRuleSets_xAmzSignature: '<node property>', // (1) define node properties
                POST_ListReceiptRuleSets_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_ListTemplates()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_ListTemplates',
                GET_ListTemplates_nextToken: '<node property>', // (1) define node properties
                GET_ListTemplates_maxItems: '<node property>', // (1) define node properties
                GET_ListTemplates_action: '<node property>', // (1) define node properties
                GET_ListTemplates_version: '<node property>', // (1) define node properties
                GET_ListTemplates_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_ListTemplates_xAmzDate: '<node property>', // (1) define node properties
                GET_ListTemplates_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_ListTemplates_xAmzCredential: '<node property>', // (1) define node properties
                GET_ListTemplates_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_ListTemplates_xAmzSignature: '<node property>', // (1) define node properties
                GET_ListTemplates_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_ListTemplates()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_ListTemplates',
                POST_ListTemplates_nextToken: '<node property>', // (1) define node properties
                POST_ListTemplates_maxItems: '<node property>', // (1) define node properties
                POST_ListTemplates_action: '<node property>', // (1) define node properties
                POST_ListTemplates_version: '<node property>', // (1) define node properties
                POST_ListTemplates_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_ListTemplates_xAmzDate: '<node property>', // (1) define node properties
                POST_ListTemplates_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_ListTemplates_xAmzCredential: '<node property>', // (1) define node properties
                POST_ListTemplates_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_ListTemplates_xAmzSignature: '<node property>', // (1) define node properties
                POST_ListTemplates_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_ListVerifiedEmailAddresses()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_ListVerifiedEmailAddresses',
                GET_ListVerifiedEmailAddresses_action: '<node property>', // (1) define node properties
                GET_ListVerifiedEmailAddresses_version: '<node property>', // (1) define node properties
                GET_ListVerifiedEmailAddresses_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_ListVerifiedEmailAddresses_xAmzDate: '<node property>', // (1) define node properties
                GET_ListVerifiedEmailAddresses_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_ListVerifiedEmailAddresses_xAmzCredential: '<node property>', // (1) define node properties
                GET_ListVerifiedEmailAddresses_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_ListVerifiedEmailAddresses_xAmzSignature: '<node property>', // (1) define node properties
                GET_ListVerifiedEmailAddresses_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_ListVerifiedEmailAddresses()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_ListVerifiedEmailAddresses',
                POST_ListVerifiedEmailAddresses_action: '<node property>', // (1) define node properties
                POST_ListVerifiedEmailAddresses_version: '<node property>', // (1) define node properties
                POST_ListVerifiedEmailAddresses_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_ListVerifiedEmailAddresses_xAmzDate: '<node property>', // (1) define node properties
                POST_ListVerifiedEmailAddresses_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_ListVerifiedEmailAddresses_xAmzCredential: '<node property>', // (1) define node properties
                POST_ListVerifiedEmailAddresses_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_ListVerifiedEmailAddresses_xAmzSignature: '<node property>', // (1) define node properties
                POST_ListVerifiedEmailAddresses_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_PutConfigurationSetDeliveryOptions()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_PutConfigurationSetDeliveryOptions',
                GET_PutConfigurationSetDeliveryOptions_configurationSetName: '<node property>', // (1) define node properties
                GET_PutConfigurationSetDeliveryOptions_deliveryOptionsTlsPolicy: '<node property>', // (1) define node properties
                GET_PutConfigurationSetDeliveryOptions_action: '<node property>', // (1) define node properties
                GET_PutConfigurationSetDeliveryOptions_version: '<node property>', // (1) define node properties
                GET_PutConfigurationSetDeliveryOptions_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_PutConfigurationSetDeliveryOptions_xAmzDate: '<node property>', // (1) define node properties
                GET_PutConfigurationSetDeliveryOptions_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_PutConfigurationSetDeliveryOptions_xAmzCredential: '<node property>', // (1) define node properties
                GET_PutConfigurationSetDeliveryOptions_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_PutConfigurationSetDeliveryOptions_xAmzSignature: '<node property>', // (1) define node properties
                GET_PutConfigurationSetDeliveryOptions_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_PutConfigurationSetDeliveryOptions()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_PutConfigurationSetDeliveryOptions',
                POST_PutConfigurationSetDeliveryOptions_configurationSetName: '<node property>', // (1) define node properties
                POST_PutConfigurationSetDeliveryOptions_deliveryOptionsTlsPolicy: '<node property>', // (1) define node properties
                POST_PutConfigurationSetDeliveryOptions_action: '<node property>', // (1) define node properties
                POST_PutConfigurationSetDeliveryOptions_version: '<node property>', // (1) define node properties
                POST_PutConfigurationSetDeliveryOptions_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_PutConfigurationSetDeliveryOptions_xAmzDate: '<node property>', // (1) define node properties
                POST_PutConfigurationSetDeliveryOptions_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_PutConfigurationSetDeliveryOptions_xAmzCredential: '<node property>', // (1) define node properties
                POST_PutConfigurationSetDeliveryOptions_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_PutConfigurationSetDeliveryOptions_xAmzSignature: '<node property>', // (1) define node properties
                POST_PutConfigurationSetDeliveryOptions_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_PutIdentityPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_PutIdentityPolicy',
                GET_PutIdentityPolicy_identity: '<node property>', // (1) define node properties
                GET_PutIdentityPolicy_policyName: '<node property>', // (1) define node properties
                GET_PutIdentityPolicy_policy: '<node property>', // (1) define node properties
                GET_PutIdentityPolicy_action: '<node property>', // (1) define node properties
                GET_PutIdentityPolicy_version: '<node property>', // (1) define node properties
                GET_PutIdentityPolicy_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_PutIdentityPolicy_xAmzDate: '<node property>', // (1) define node properties
                GET_PutIdentityPolicy_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_PutIdentityPolicy_xAmzCredential: '<node property>', // (1) define node properties
                GET_PutIdentityPolicy_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_PutIdentityPolicy_xAmzSignature: '<node property>', // (1) define node properties
                GET_PutIdentityPolicy_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_PutIdentityPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_PutIdentityPolicy',
                POST_PutIdentityPolicy_identity: '<node property>', // (1) define node properties
                POST_PutIdentityPolicy_policyName: '<node property>', // (1) define node properties
                POST_PutIdentityPolicy_policy: '<node property>', // (1) define node properties
                POST_PutIdentityPolicy_action: '<node property>', // (1) define node properties
                POST_PutIdentityPolicy_version: '<node property>', // (1) define node properties
                POST_PutIdentityPolicy_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_PutIdentityPolicy_xAmzDate: '<node property>', // (1) define node properties
                POST_PutIdentityPolicy_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_PutIdentityPolicy_xAmzCredential: '<node property>', // (1) define node properties
                POST_PutIdentityPolicy_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_PutIdentityPolicy_xAmzSignature: '<node property>', // (1) define node properties
                POST_PutIdentityPolicy_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_ReorderReceiptRuleSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_ReorderReceiptRuleSet',
                GET_ReorderReceiptRuleSet_ruleSetName: '<node property>', // (1) define node properties
                GET_ReorderReceiptRuleSet_ruleNames: '<node property>', // (1) define node properties
                GET_ReorderReceiptRuleSet_action: '<node property>', // (1) define node properties
                GET_ReorderReceiptRuleSet_version: '<node property>', // (1) define node properties
                GET_ReorderReceiptRuleSet_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_ReorderReceiptRuleSet_xAmzDate: '<node property>', // (1) define node properties
                GET_ReorderReceiptRuleSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_ReorderReceiptRuleSet_xAmzCredential: '<node property>', // (1) define node properties
                GET_ReorderReceiptRuleSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_ReorderReceiptRuleSet_xAmzSignature: '<node property>', // (1) define node properties
                GET_ReorderReceiptRuleSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_ReorderReceiptRuleSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_ReorderReceiptRuleSet',
                POST_ReorderReceiptRuleSet_ruleSetName: '<node property>', // (1) define node properties
                POST_ReorderReceiptRuleSet_ruleNames: '<node property>', // (1) define node properties
                POST_ReorderReceiptRuleSet_action: '<node property>', // (1) define node properties
                POST_ReorderReceiptRuleSet_version: '<node property>', // (1) define node properties
                POST_ReorderReceiptRuleSet_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_ReorderReceiptRuleSet_xAmzDate: '<node property>', // (1) define node properties
                POST_ReorderReceiptRuleSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_ReorderReceiptRuleSet_xAmzCredential: '<node property>', // (1) define node properties
                POST_ReorderReceiptRuleSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_ReorderReceiptRuleSet_xAmzSignature: '<node property>', // (1) define node properties
                POST_ReorderReceiptRuleSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_SendBounce()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_SendBounce',
                GET_SendBounce_originalMessageId: '<node property>', // (1) define node properties
                GET_SendBounce_bounceSender: '<node property>', // (1) define node properties
                GET_SendBounce_explanation: '<node property>', // (1) define node properties
                GET_SendBounce_messageDsnReportingMta: '<node property>', // (1) define node properties
                GET_SendBounce_messageDsnArrivalDate: '<node property>', // (1) define node properties
                GET_SendBounce_messageDsnExtensionFields: '<node property>', // (1) define node properties
                GET_SendBounce_bouncedRecipientInfoList: '<node property>', // (1) define node properties
                GET_SendBounce_bounceSenderArn: '<node property>', // (1) define node properties
                GET_SendBounce_action: '<node property>', // (1) define node properties
                GET_SendBounce_version: '<node property>', // (1) define node properties
                GET_SendBounce_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_SendBounce_xAmzDate: '<node property>', // (1) define node properties
                GET_SendBounce_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_SendBounce_xAmzCredential: '<node property>', // (1) define node properties
                GET_SendBounce_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_SendBounce_xAmzSignature: '<node property>', // (1) define node properties
                GET_SendBounce_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_SendBounce()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_SendBounce',
                POST_SendBounce_originalMessageId: '<node property>', // (1) define node properties
                POST_SendBounce_bounceSender: '<node property>', // (1) define node properties
                POST_SendBounce_explanation: '<node property>', // (1) define node properties
                POST_SendBounce_messageDsnReportingMta: '<node property>', // (1) define node properties
                POST_SendBounce_messageDsnArrivalDate: '<node property>', // (1) define node properties
                POST_SendBounce_messageDsnExtensionFields: '<node property>', // (1) define node properties
                POST_SendBounce_bouncedRecipientInfoList: '<node property>', // (1) define node properties
                POST_SendBounce_bounceSenderArn: '<node property>', // (1) define node properties
                POST_SendBounce_action: '<node property>', // (1) define node properties
                POST_SendBounce_version: '<node property>', // (1) define node properties
                POST_SendBounce_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_SendBounce_xAmzDate: '<node property>', // (1) define node properties
                POST_SendBounce_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_SendBounce_xAmzCredential: '<node property>', // (1) define node properties
                POST_SendBounce_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_SendBounce_xAmzSignature: '<node property>', // (1) define node properties
                POST_SendBounce_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_SendBulkTemplatedEmail()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_SendBulkTemplatedEmail',
                GET_SendBulkTemplatedEmail_source: '<node property>', // (1) define node properties
                GET_SendBulkTemplatedEmail_sourceArn: '<node property>', // (1) define node properties
                GET_SendBulkTemplatedEmail_replyToAddresses: '<node property>', // (1) define node properties
                GET_SendBulkTemplatedEmail_returnPath: '<node property>', // (1) define node properties
                GET_SendBulkTemplatedEmail_returnPathArn: '<node property>', // (1) define node properties
                GET_SendBulkTemplatedEmail_configurationSetName: '<node property>', // (1) define node properties
                GET_SendBulkTemplatedEmail_defaultTags: '<node property>', // (1) define node properties
                GET_SendBulkTemplatedEmail_template: '<node property>', // (1) define node properties
                GET_SendBulkTemplatedEmail_templateArn: '<node property>', // (1) define node properties
                GET_SendBulkTemplatedEmail_defaultTemplateData: '<node property>', // (1) define node properties
                GET_SendBulkTemplatedEmail_destinations: '<node property>', // (1) define node properties
                GET_SendBulkTemplatedEmail_action: '<node property>', // (1) define node properties
                GET_SendBulkTemplatedEmail_version: '<node property>', // (1) define node properties
                GET_SendBulkTemplatedEmail_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_SendBulkTemplatedEmail_xAmzDate: '<node property>', // (1) define node properties
                GET_SendBulkTemplatedEmail_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_SendBulkTemplatedEmail_xAmzCredential: '<node property>', // (1) define node properties
                GET_SendBulkTemplatedEmail_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_SendBulkTemplatedEmail_xAmzSignature: '<node property>', // (1) define node properties
                GET_SendBulkTemplatedEmail_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_SendBulkTemplatedEmail()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_SendBulkTemplatedEmail',
                POST_SendBulkTemplatedEmail_source: '<node property>', // (1) define node properties
                POST_SendBulkTemplatedEmail_sourceArn: '<node property>', // (1) define node properties
                POST_SendBulkTemplatedEmail_replyToAddresses: '<node property>', // (1) define node properties
                POST_SendBulkTemplatedEmail_returnPath: '<node property>', // (1) define node properties
                POST_SendBulkTemplatedEmail_returnPathArn: '<node property>', // (1) define node properties
                POST_SendBulkTemplatedEmail_configurationSetName: '<node property>', // (1) define node properties
                POST_SendBulkTemplatedEmail_defaultTags: '<node property>', // (1) define node properties
                POST_SendBulkTemplatedEmail_template: '<node property>', // (1) define node properties
                POST_SendBulkTemplatedEmail_templateArn: '<node property>', // (1) define node properties
                POST_SendBulkTemplatedEmail_defaultTemplateData: '<node property>', // (1) define node properties
                POST_SendBulkTemplatedEmail_destinations: '<node property>', // (1) define node properties
                POST_SendBulkTemplatedEmail_action: '<node property>', // (1) define node properties
                POST_SendBulkTemplatedEmail_version: '<node property>', // (1) define node properties
                POST_SendBulkTemplatedEmail_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_SendBulkTemplatedEmail_xAmzDate: '<node property>', // (1) define node properties
                POST_SendBulkTemplatedEmail_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_SendBulkTemplatedEmail_xAmzCredential: '<node property>', // (1) define node properties
                POST_SendBulkTemplatedEmail_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_SendBulkTemplatedEmail_xAmzSignature: '<node property>', // (1) define node properties
                POST_SendBulkTemplatedEmail_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_SendCustomVerificationEmail()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_SendCustomVerificationEmail',
                GET_SendCustomVerificationEmail_emailAddress: '<node property>', // (1) define node properties
                GET_SendCustomVerificationEmail_templateName: '<node property>', // (1) define node properties
                GET_SendCustomVerificationEmail_configurationSetName: '<node property>', // (1) define node properties
                GET_SendCustomVerificationEmail_action: '<node property>', // (1) define node properties
                GET_SendCustomVerificationEmail_version: '<node property>', // (1) define node properties
                GET_SendCustomVerificationEmail_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_SendCustomVerificationEmail_xAmzDate: '<node property>', // (1) define node properties
                GET_SendCustomVerificationEmail_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_SendCustomVerificationEmail_xAmzCredential: '<node property>', // (1) define node properties
                GET_SendCustomVerificationEmail_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_SendCustomVerificationEmail_xAmzSignature: '<node property>', // (1) define node properties
                GET_SendCustomVerificationEmail_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_SendCustomVerificationEmail()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_SendCustomVerificationEmail',
                POST_SendCustomVerificationEmail_emailAddress: '<node property>', // (1) define node properties
                POST_SendCustomVerificationEmail_templateName: '<node property>', // (1) define node properties
                POST_SendCustomVerificationEmail_configurationSetName: '<node property>', // (1) define node properties
                POST_SendCustomVerificationEmail_action: '<node property>', // (1) define node properties
                POST_SendCustomVerificationEmail_version: '<node property>', // (1) define node properties
                POST_SendCustomVerificationEmail_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_SendCustomVerificationEmail_xAmzDate: '<node property>', // (1) define node properties
                POST_SendCustomVerificationEmail_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_SendCustomVerificationEmail_xAmzCredential: '<node property>', // (1) define node properties
                POST_SendCustomVerificationEmail_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_SendCustomVerificationEmail_xAmzSignature: '<node property>', // (1) define node properties
                POST_SendCustomVerificationEmail_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_SendEmail()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_SendEmail',
                GET_SendEmail_source: '<node property>', // (1) define node properties
                GET_SendEmail_destinationToAddresses: '<node property>', // (1) define node properties
                GET_SendEmail_destinationCcAddresses: '<node property>', // (1) define node properties
                GET_SendEmail_destinationBccAddresses: '<node property>', // (1) define node properties
                GET_SendEmail_messageSubject: '<node property>', // (1) define node properties
                GET_SendEmail_messageBody: '<node property>', // (1) define node properties
                GET_SendEmail_replyToAddresses: '<node property>', // (1) define node properties
                GET_SendEmail_returnPath: '<node property>', // (1) define node properties
                GET_SendEmail_sourceArn: '<node property>', // (1) define node properties
                GET_SendEmail_returnPathArn: '<node property>', // (1) define node properties
                GET_SendEmail_tags: '<node property>', // (1) define node properties
                GET_SendEmail_configurationSetName: '<node property>', // (1) define node properties
                GET_SendEmail_action: '<node property>', // (1) define node properties
                GET_SendEmail_version: '<node property>', // (1) define node properties
                GET_SendEmail_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_SendEmail_xAmzDate: '<node property>', // (1) define node properties
                GET_SendEmail_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_SendEmail_xAmzCredential: '<node property>', // (1) define node properties
                GET_SendEmail_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_SendEmail_xAmzSignature: '<node property>', // (1) define node properties
                GET_SendEmail_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_SendEmail()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_SendEmail',
                POST_SendEmail_source: '<node property>', // (1) define node properties
                POST_SendEmail_destinationToAddresses: '<node property>', // (1) define node properties
                POST_SendEmail_destinationCcAddresses: '<node property>', // (1) define node properties
                POST_SendEmail_destinationBccAddresses: '<node property>', // (1) define node properties
                POST_SendEmail_messageSubject: '<node property>', // (1) define node properties
                POST_SendEmail_messageBody: '<node property>', // (1) define node properties
                POST_SendEmail_replyToAddresses: '<node property>', // (1) define node properties
                POST_SendEmail_returnPath: '<node property>', // (1) define node properties
                POST_SendEmail_sourceArn: '<node property>', // (1) define node properties
                POST_SendEmail_returnPathArn: '<node property>', // (1) define node properties
                POST_SendEmail_tags: '<node property>', // (1) define node properties
                POST_SendEmail_configurationSetName: '<node property>', // (1) define node properties
                POST_SendEmail_action: '<node property>', // (1) define node properties
                POST_SendEmail_version: '<node property>', // (1) define node properties
                POST_SendEmail_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_SendEmail_xAmzDate: '<node property>', // (1) define node properties
                POST_SendEmail_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_SendEmail_xAmzCredential: '<node property>', // (1) define node properties
                POST_SendEmail_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_SendEmail_xAmzSignature: '<node property>', // (1) define node properties
                POST_SendEmail_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_SendRawEmail()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_SendRawEmail',
                GET_SendRawEmail_source: '<node property>', // (1) define node properties
                GET_SendRawEmail_destinations: '<node property>', // (1) define node properties
                GET_SendRawEmail_rawMessageData: '<node property>', // (1) define node properties
                GET_SendRawEmail_fromArn: '<node property>', // (1) define node properties
                GET_SendRawEmail_sourceArn: '<node property>', // (1) define node properties
                GET_SendRawEmail_returnPathArn: '<node property>', // (1) define node properties
                GET_SendRawEmail_tags: '<node property>', // (1) define node properties
                GET_SendRawEmail_configurationSetName: '<node property>', // (1) define node properties
                GET_SendRawEmail_action: '<node property>', // (1) define node properties
                GET_SendRawEmail_version: '<node property>', // (1) define node properties
                GET_SendRawEmail_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_SendRawEmail_xAmzDate: '<node property>', // (1) define node properties
                GET_SendRawEmail_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_SendRawEmail_xAmzCredential: '<node property>', // (1) define node properties
                GET_SendRawEmail_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_SendRawEmail_xAmzSignature: '<node property>', // (1) define node properties
                GET_SendRawEmail_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_SendRawEmail()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_SendRawEmail',
                POST_SendRawEmail_source: '<node property>', // (1) define node properties
                POST_SendRawEmail_destinations: '<node property>', // (1) define node properties
                POST_SendRawEmail_rawMessageData: '<node property>', // (1) define node properties
                POST_SendRawEmail_fromArn: '<node property>', // (1) define node properties
                POST_SendRawEmail_sourceArn: '<node property>', // (1) define node properties
                POST_SendRawEmail_returnPathArn: '<node property>', // (1) define node properties
                POST_SendRawEmail_tags: '<node property>', // (1) define node properties
                POST_SendRawEmail_configurationSetName: '<node property>', // (1) define node properties
                POST_SendRawEmail_action: '<node property>', // (1) define node properties
                POST_SendRawEmail_version: '<node property>', // (1) define node properties
                POST_SendRawEmail_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_SendRawEmail_xAmzDate: '<node property>', // (1) define node properties
                POST_SendRawEmail_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_SendRawEmail_xAmzCredential: '<node property>', // (1) define node properties
                POST_SendRawEmail_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_SendRawEmail_xAmzSignature: '<node property>', // (1) define node properties
                POST_SendRawEmail_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_SendTemplatedEmail()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_SendTemplatedEmail',
                GET_SendTemplatedEmail_source: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_destinationToAddresses: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_destinationCcAddresses: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_destinationBccAddresses: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_replyToAddresses: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_returnPath: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_sourceArn: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_returnPathArn: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_tags: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_configurationSetName: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_template: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_templateArn: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_templateData: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_action: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_version: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_xAmzDate: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_xAmzCredential: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_xAmzSignature: '<node property>', // (1) define node properties
                GET_SendTemplatedEmail_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_SendTemplatedEmail()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_SendTemplatedEmail',
                POST_SendTemplatedEmail_source: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_destinationToAddresses: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_destinationCcAddresses: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_destinationBccAddresses: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_replyToAddresses: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_returnPath: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_sourceArn: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_returnPathArn: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_tags: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_configurationSetName: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_template: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_templateArn: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_templateData: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_action: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_version: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_xAmzDate: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_xAmzCredential: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_xAmzSignature: '<node property>', // (1) define node properties
                POST_SendTemplatedEmail_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_SetActiveReceiptRuleSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_SetActiveReceiptRuleSet',
                GET_SetActiveReceiptRuleSet_ruleSetName: '<node property>', // (1) define node properties
                GET_SetActiveReceiptRuleSet_action: '<node property>', // (1) define node properties
                GET_SetActiveReceiptRuleSet_version: '<node property>', // (1) define node properties
                GET_SetActiveReceiptRuleSet_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_SetActiveReceiptRuleSet_xAmzDate: '<node property>', // (1) define node properties
                GET_SetActiveReceiptRuleSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_SetActiveReceiptRuleSet_xAmzCredential: '<node property>', // (1) define node properties
                GET_SetActiveReceiptRuleSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_SetActiveReceiptRuleSet_xAmzSignature: '<node property>', // (1) define node properties
                GET_SetActiveReceiptRuleSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_SetActiveReceiptRuleSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_SetActiveReceiptRuleSet',
                POST_SetActiveReceiptRuleSet_ruleSetName: '<node property>', // (1) define node properties
                POST_SetActiveReceiptRuleSet_action: '<node property>', // (1) define node properties
                POST_SetActiveReceiptRuleSet_version: '<node property>', // (1) define node properties
                POST_SetActiveReceiptRuleSet_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_SetActiveReceiptRuleSet_xAmzDate: '<node property>', // (1) define node properties
                POST_SetActiveReceiptRuleSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_SetActiveReceiptRuleSet_xAmzCredential: '<node property>', // (1) define node properties
                POST_SetActiveReceiptRuleSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_SetActiveReceiptRuleSet_xAmzSignature: '<node property>', // (1) define node properties
                POST_SetActiveReceiptRuleSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_SetIdentityDkimEnabled()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_SetIdentityDkimEnabled',
                GET_SetIdentityDkimEnabled_identity: '<node property>', // (1) define node properties
                GET_SetIdentityDkimEnabled_dkimEnabled: '<node property>', // (1) define node properties
                GET_SetIdentityDkimEnabled_action: '<node property>', // (1) define node properties
                GET_SetIdentityDkimEnabled_version: '<node property>', // (1) define node properties
                GET_SetIdentityDkimEnabled_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_SetIdentityDkimEnabled_xAmzDate: '<node property>', // (1) define node properties
                GET_SetIdentityDkimEnabled_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_SetIdentityDkimEnabled_xAmzCredential: '<node property>', // (1) define node properties
                GET_SetIdentityDkimEnabled_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_SetIdentityDkimEnabled_xAmzSignature: '<node property>', // (1) define node properties
                GET_SetIdentityDkimEnabled_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_SetIdentityDkimEnabled()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_SetIdentityDkimEnabled',
                POST_SetIdentityDkimEnabled_identity: '<node property>', // (1) define node properties
                POST_SetIdentityDkimEnabled_dkimEnabled: '<node property>', // (1) define node properties
                POST_SetIdentityDkimEnabled_action: '<node property>', // (1) define node properties
                POST_SetIdentityDkimEnabled_version: '<node property>', // (1) define node properties
                POST_SetIdentityDkimEnabled_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_SetIdentityDkimEnabled_xAmzDate: '<node property>', // (1) define node properties
                POST_SetIdentityDkimEnabled_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_SetIdentityDkimEnabled_xAmzCredential: '<node property>', // (1) define node properties
                POST_SetIdentityDkimEnabled_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_SetIdentityDkimEnabled_xAmzSignature: '<node property>', // (1) define node properties
                POST_SetIdentityDkimEnabled_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_SetIdentityFeedbackForwardingEnabled()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_SetIdentityFeedbackForwardingEnabled',
                GET_SetIdentityFeedbackForwardingEnabled_identity: '<node property>', // (1) define node properties
                GET_SetIdentityFeedbackForwardingEnabled_forwardingEnabled: '<node property>', // (1) define node properties
                GET_SetIdentityFeedbackForwardingEnabled_action: '<node property>', // (1) define node properties
                GET_SetIdentityFeedbackForwardingEnabled_version: '<node property>', // (1) define node properties
                GET_SetIdentityFeedbackForwardingEnabled_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_SetIdentityFeedbackForwardingEnabled_xAmzDate: '<node property>', // (1) define node properties
                GET_SetIdentityFeedbackForwardingEnabled_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_SetIdentityFeedbackForwardingEnabled_xAmzCredential: '<node property>', // (1) define node properties
                GET_SetIdentityFeedbackForwardingEnabled_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_SetIdentityFeedbackForwardingEnabled_xAmzSignature: '<node property>', // (1) define node properties
                GET_SetIdentityFeedbackForwardingEnabled_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_SetIdentityFeedbackForwardingEnabled()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_SetIdentityFeedbackForwardingEnabled',
                POST_SetIdentityFeedbackForwardingEnabled_identity: '<node property>', // (1) define node properties
                POST_SetIdentityFeedbackForwardingEnabled_forwardingEnabled: '<node property>', // (1) define node properties
                POST_SetIdentityFeedbackForwardingEnabled_action: '<node property>', // (1) define node properties
                POST_SetIdentityFeedbackForwardingEnabled_version: '<node property>', // (1) define node properties
                POST_SetIdentityFeedbackForwardingEnabled_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_SetIdentityFeedbackForwardingEnabled_xAmzDate: '<node property>', // (1) define node properties
                POST_SetIdentityFeedbackForwardingEnabled_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_SetIdentityFeedbackForwardingEnabled_xAmzCredential: '<node property>', // (1) define node properties
                POST_SetIdentityFeedbackForwardingEnabled_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_SetIdentityFeedbackForwardingEnabled_xAmzSignature: '<node property>', // (1) define node properties
                POST_SetIdentityFeedbackForwardingEnabled_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_SetIdentityHeadersInNotificationsEnabled()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_SetIdentityHeadersInNotificationsEnabled',
                GET_SetIdentityHeadersInNotificationsEnabled_identity: '<node property>', // (1) define node properties
                GET_SetIdentityHeadersInNotificationsEnabled_notificationType: '<node property>', // (1) define node properties
                GET_SetIdentityHeadersInNotificationsEnabled_enabled: '<node property>', // (1) define node properties
                GET_SetIdentityHeadersInNotificationsEnabled_action: '<node property>', // (1) define node properties
                GET_SetIdentityHeadersInNotificationsEnabled_version: '<node property>', // (1) define node properties
                GET_SetIdentityHeadersInNotificationsEnabled_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_SetIdentityHeadersInNotificationsEnabled_xAmzDate: '<node property>', // (1) define node properties
                GET_SetIdentityHeadersInNotificationsEnabled_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_SetIdentityHeadersInNotificationsEnabled_xAmzCredential: '<node property>', // (1) define node properties
                GET_SetIdentityHeadersInNotificationsEnabled_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_SetIdentityHeadersInNotificationsEnabled_xAmzSignature: '<node property>', // (1) define node properties
                GET_SetIdentityHeadersInNotificationsEnabled_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_SetIdentityHeadersInNotificationsEnabled()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_SetIdentityHeadersInNotificationsEnabled',
                POST_SetIdentityHeadersInNotificationsEnabled_identity: '<node property>', // (1) define node properties
                POST_SetIdentityHeadersInNotificationsEnabled_notificationType: '<node property>', // (1) define node properties
                POST_SetIdentityHeadersInNotificationsEnabled_enabled: '<node property>', // (1) define node properties
                POST_SetIdentityHeadersInNotificationsEnabled_action: '<node property>', // (1) define node properties
                POST_SetIdentityHeadersInNotificationsEnabled_version: '<node property>', // (1) define node properties
                POST_SetIdentityHeadersInNotificationsEnabled_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_SetIdentityHeadersInNotificationsEnabled_xAmzDate: '<node property>', // (1) define node properties
                POST_SetIdentityHeadersInNotificationsEnabled_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_SetIdentityHeadersInNotificationsEnabled_xAmzCredential: '<node property>', // (1) define node properties
                POST_SetIdentityHeadersInNotificationsEnabled_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_SetIdentityHeadersInNotificationsEnabled_xAmzSignature: '<node property>', // (1) define node properties
                POST_SetIdentityHeadersInNotificationsEnabled_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_SetIdentityMailFromDomain()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_SetIdentityMailFromDomain',
                GET_SetIdentityMailFromDomain_identity: '<node property>', // (1) define node properties
                GET_SetIdentityMailFromDomain_mailFromDomain: '<node property>', // (1) define node properties
                GET_SetIdentityMailFromDomain_behaviorOnMxFailure: '<node property>', // (1) define node properties
                GET_SetIdentityMailFromDomain_action: '<node property>', // (1) define node properties
                GET_SetIdentityMailFromDomain_version: '<node property>', // (1) define node properties
                GET_SetIdentityMailFromDomain_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_SetIdentityMailFromDomain_xAmzDate: '<node property>', // (1) define node properties
                GET_SetIdentityMailFromDomain_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_SetIdentityMailFromDomain_xAmzCredential: '<node property>', // (1) define node properties
                GET_SetIdentityMailFromDomain_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_SetIdentityMailFromDomain_xAmzSignature: '<node property>', // (1) define node properties
                GET_SetIdentityMailFromDomain_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_SetIdentityMailFromDomain()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_SetIdentityMailFromDomain',
                POST_SetIdentityMailFromDomain_identity: '<node property>', // (1) define node properties
                POST_SetIdentityMailFromDomain_mailFromDomain: '<node property>', // (1) define node properties
                POST_SetIdentityMailFromDomain_behaviorOnMxFailure: '<node property>', // (1) define node properties
                POST_SetIdentityMailFromDomain_action: '<node property>', // (1) define node properties
                POST_SetIdentityMailFromDomain_version: '<node property>', // (1) define node properties
                POST_SetIdentityMailFromDomain_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_SetIdentityMailFromDomain_xAmzDate: '<node property>', // (1) define node properties
                POST_SetIdentityMailFromDomain_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_SetIdentityMailFromDomain_xAmzCredential: '<node property>', // (1) define node properties
                POST_SetIdentityMailFromDomain_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_SetIdentityMailFromDomain_xAmzSignature: '<node property>', // (1) define node properties
                POST_SetIdentityMailFromDomain_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_SetIdentityNotificationTopic()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_SetIdentityNotificationTopic',
                GET_SetIdentityNotificationTopic_identity: '<node property>', // (1) define node properties
                GET_SetIdentityNotificationTopic_notificationType: '<node property>', // (1) define node properties
                GET_SetIdentityNotificationTopic_snsTopic: '<node property>', // (1) define node properties
                GET_SetIdentityNotificationTopic_action: '<node property>', // (1) define node properties
                GET_SetIdentityNotificationTopic_version: '<node property>', // (1) define node properties
                GET_SetIdentityNotificationTopic_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_SetIdentityNotificationTopic_xAmzDate: '<node property>', // (1) define node properties
                GET_SetIdentityNotificationTopic_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_SetIdentityNotificationTopic_xAmzCredential: '<node property>', // (1) define node properties
                GET_SetIdentityNotificationTopic_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_SetIdentityNotificationTopic_xAmzSignature: '<node property>', // (1) define node properties
                GET_SetIdentityNotificationTopic_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_SetIdentityNotificationTopic()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_SetIdentityNotificationTopic',
                POST_SetIdentityNotificationTopic_identity: '<node property>', // (1) define node properties
                POST_SetIdentityNotificationTopic_notificationType: '<node property>', // (1) define node properties
                POST_SetIdentityNotificationTopic_snsTopic: '<node property>', // (1) define node properties
                POST_SetIdentityNotificationTopic_action: '<node property>', // (1) define node properties
                POST_SetIdentityNotificationTopic_version: '<node property>', // (1) define node properties
                POST_SetIdentityNotificationTopic_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_SetIdentityNotificationTopic_xAmzDate: '<node property>', // (1) define node properties
                POST_SetIdentityNotificationTopic_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_SetIdentityNotificationTopic_xAmzCredential: '<node property>', // (1) define node properties
                POST_SetIdentityNotificationTopic_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_SetIdentityNotificationTopic_xAmzSignature: '<node property>', // (1) define node properties
                POST_SetIdentityNotificationTopic_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_SetReceiptRulePosition()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_SetReceiptRulePosition',
                GET_SetReceiptRulePosition_ruleSetName: '<node property>', // (1) define node properties
                GET_SetReceiptRulePosition_ruleName: '<node property>', // (1) define node properties
                GET_SetReceiptRulePosition_after: '<node property>', // (1) define node properties
                GET_SetReceiptRulePosition_action: '<node property>', // (1) define node properties
                GET_SetReceiptRulePosition_version: '<node property>', // (1) define node properties
                GET_SetReceiptRulePosition_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_SetReceiptRulePosition_xAmzDate: '<node property>', // (1) define node properties
                GET_SetReceiptRulePosition_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_SetReceiptRulePosition_xAmzCredential: '<node property>', // (1) define node properties
                GET_SetReceiptRulePosition_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_SetReceiptRulePosition_xAmzSignature: '<node property>', // (1) define node properties
                GET_SetReceiptRulePosition_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_SetReceiptRulePosition()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_SetReceiptRulePosition',
                POST_SetReceiptRulePosition_ruleSetName: '<node property>', // (1) define node properties
                POST_SetReceiptRulePosition_ruleName: '<node property>', // (1) define node properties
                POST_SetReceiptRulePosition_after: '<node property>', // (1) define node properties
                POST_SetReceiptRulePosition_action: '<node property>', // (1) define node properties
                POST_SetReceiptRulePosition_version: '<node property>', // (1) define node properties
                POST_SetReceiptRulePosition_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_SetReceiptRulePosition_xAmzDate: '<node property>', // (1) define node properties
                POST_SetReceiptRulePosition_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_SetReceiptRulePosition_xAmzCredential: '<node property>', // (1) define node properties
                POST_SetReceiptRulePosition_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_SetReceiptRulePosition_xAmzSignature: '<node property>', // (1) define node properties
                POST_SetReceiptRulePosition_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_TestRenderTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_TestRenderTemplate',
                GET_TestRenderTemplate_templateName: '<node property>', // (1) define node properties
                GET_TestRenderTemplate_templateData: '<node property>', // (1) define node properties
                GET_TestRenderTemplate_action: '<node property>', // (1) define node properties
                GET_TestRenderTemplate_version: '<node property>', // (1) define node properties
                GET_TestRenderTemplate_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_TestRenderTemplate_xAmzDate: '<node property>', // (1) define node properties
                GET_TestRenderTemplate_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_TestRenderTemplate_xAmzCredential: '<node property>', // (1) define node properties
                GET_TestRenderTemplate_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_TestRenderTemplate_xAmzSignature: '<node property>', // (1) define node properties
                GET_TestRenderTemplate_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_TestRenderTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_TestRenderTemplate',
                POST_TestRenderTemplate_templateName: '<node property>', // (1) define node properties
                POST_TestRenderTemplate_templateData: '<node property>', // (1) define node properties
                POST_TestRenderTemplate_action: '<node property>', // (1) define node properties
                POST_TestRenderTemplate_version: '<node property>', // (1) define node properties
                POST_TestRenderTemplate_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_TestRenderTemplate_xAmzDate: '<node property>', // (1) define node properties
                POST_TestRenderTemplate_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_TestRenderTemplate_xAmzCredential: '<node property>', // (1) define node properties
                POST_TestRenderTemplate_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_TestRenderTemplate_xAmzSignature: '<node property>', // (1) define node properties
                POST_TestRenderTemplate_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_UpdateAccountSendingEnabled()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_UpdateAccountSendingEnabled',
                GET_UpdateAccountSendingEnabled_enabled: '<node property>', // (1) define node properties
                GET_UpdateAccountSendingEnabled_action: '<node property>', // (1) define node properties
                GET_UpdateAccountSendingEnabled_version: '<node property>', // (1) define node properties
                GET_UpdateAccountSendingEnabled_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_UpdateAccountSendingEnabled_xAmzDate: '<node property>', // (1) define node properties
                GET_UpdateAccountSendingEnabled_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_UpdateAccountSendingEnabled_xAmzCredential: '<node property>', // (1) define node properties
                GET_UpdateAccountSendingEnabled_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_UpdateAccountSendingEnabled_xAmzSignature: '<node property>', // (1) define node properties
                GET_UpdateAccountSendingEnabled_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_UpdateAccountSendingEnabled()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_UpdateAccountSendingEnabled',
                POST_UpdateAccountSendingEnabled_enabled: '<node property>', // (1) define node properties
                POST_UpdateAccountSendingEnabled_action: '<node property>', // (1) define node properties
                POST_UpdateAccountSendingEnabled_version: '<node property>', // (1) define node properties
                POST_UpdateAccountSendingEnabled_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_UpdateAccountSendingEnabled_xAmzDate: '<node property>', // (1) define node properties
                POST_UpdateAccountSendingEnabled_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_UpdateAccountSendingEnabled_xAmzCredential: '<node property>', // (1) define node properties
                POST_UpdateAccountSendingEnabled_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_UpdateAccountSendingEnabled_xAmzSignature: '<node property>', // (1) define node properties
                POST_UpdateAccountSendingEnabled_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_UpdateConfigurationSetEventDestination()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_UpdateConfigurationSetEventDestination',
                GET_UpdateConfigurationSetEventDestination_configurationSetName: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetEventDestination_eventDestinationName: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetEventDestination_eventDestinationEnabled: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetEventDestination_eventDestinationMatchingEventTypes: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetEventDestination_eventDestinationKinesisFirehoseDestination: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetEventDestination_eventDestinationCloudWatchDestination: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetEventDestination_eventDestinationSnsDestination: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetEventDestination_action: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetEventDestination_version: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetEventDestination_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetEventDestination_xAmzDate: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetEventDestination_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetEventDestination_xAmzCredential: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetEventDestination_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetEventDestination_xAmzSignature: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetEventDestination_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_UpdateConfigurationSetEventDestination()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_UpdateConfigurationSetEventDestination',
                POST_UpdateConfigurationSetEventDestination_configurationSetName: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetEventDestination_eventDestinationName: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetEventDestination_eventDestinationEnabled: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetEventDestination_eventDestinationMatchingEventTypes: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetEventDestination_eventDestinationKinesisFirehoseDestination: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetEventDestination_eventDestinationCloudWatchDestination: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetEventDestination_eventDestinationSnsDestination: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetEventDestination_action: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetEventDestination_version: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetEventDestination_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetEventDestination_xAmzDate: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetEventDestination_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetEventDestination_xAmzCredential: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetEventDestination_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetEventDestination_xAmzSignature: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetEventDestination_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_UpdateConfigurationSetReputationMetricsEnabled()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_UpdateConfigurationSetReputationMetricsEnabled',
                GET_UpdateConfigurationSetReputationMetricsEnabled_configurationSetName: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetReputationMetricsEnabled_enabled: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetReputationMetricsEnabled_action: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetReputationMetricsEnabled_version: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetReputationMetricsEnabled_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetReputationMetricsEnabled_xAmzDate: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetReputationMetricsEnabled_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetReputationMetricsEnabled_xAmzCredential: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetReputationMetricsEnabled_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetReputationMetricsEnabled_xAmzSignature: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetReputationMetricsEnabled_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_UpdateConfigurationSetReputationMetricsEnabled()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_UpdateConfigurationSetReputationMetricsEnabled',
                POST_UpdateConfigurationSetReputationMetricsEnabled_configurationSetName: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetReputationMetricsEnabled_enabled: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetReputationMetricsEnabled_action: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetReputationMetricsEnabled_version: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetReputationMetricsEnabled_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetReputationMetricsEnabled_xAmzDate: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetReputationMetricsEnabled_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetReputationMetricsEnabled_xAmzCredential: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetReputationMetricsEnabled_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetReputationMetricsEnabled_xAmzSignature: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetReputationMetricsEnabled_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_UpdateConfigurationSetSendingEnabled()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_UpdateConfigurationSetSendingEnabled',
                GET_UpdateConfigurationSetSendingEnabled_configurationSetName: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetSendingEnabled_enabled: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetSendingEnabled_action: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetSendingEnabled_version: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetSendingEnabled_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetSendingEnabled_xAmzDate: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetSendingEnabled_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetSendingEnabled_xAmzCredential: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetSendingEnabled_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetSendingEnabled_xAmzSignature: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetSendingEnabled_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_UpdateConfigurationSetSendingEnabled()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_UpdateConfigurationSetSendingEnabled',
                POST_UpdateConfigurationSetSendingEnabled_configurationSetName: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetSendingEnabled_enabled: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetSendingEnabled_action: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetSendingEnabled_version: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetSendingEnabled_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetSendingEnabled_xAmzDate: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetSendingEnabled_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetSendingEnabled_xAmzCredential: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetSendingEnabled_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetSendingEnabled_xAmzSignature: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetSendingEnabled_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_UpdateConfigurationSetTrackingOptions()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_UpdateConfigurationSetTrackingOptions',
                GET_UpdateConfigurationSetTrackingOptions_configurationSetName: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetTrackingOptions_trackingOptionsCustomRedirectDomain: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetTrackingOptions_action: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetTrackingOptions_version: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetTrackingOptions_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetTrackingOptions_xAmzDate: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetTrackingOptions_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetTrackingOptions_xAmzCredential: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetTrackingOptions_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetTrackingOptions_xAmzSignature: '<node property>', // (1) define node properties
                GET_UpdateConfigurationSetTrackingOptions_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_UpdateConfigurationSetTrackingOptions()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_UpdateConfigurationSetTrackingOptions',
                POST_UpdateConfigurationSetTrackingOptions_configurationSetName: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetTrackingOptions_trackingOptionsCustomRedirectDomain: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetTrackingOptions_action: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetTrackingOptions_version: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetTrackingOptions_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetTrackingOptions_xAmzDate: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetTrackingOptions_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetTrackingOptions_xAmzCredential: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetTrackingOptions_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetTrackingOptions_xAmzSignature: '<node property>', // (1) define node properties
                POST_UpdateConfigurationSetTrackingOptions_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_UpdateCustomVerificationEmailTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_UpdateCustomVerificationEmailTemplate',
                GET_UpdateCustomVerificationEmailTemplate_templateName: '<node property>', // (1) define node properties
                GET_UpdateCustomVerificationEmailTemplate_fromEmailAddress: '<node property>', // (1) define node properties
                GET_UpdateCustomVerificationEmailTemplate_templateSubject: '<node property>', // (1) define node properties
                GET_UpdateCustomVerificationEmailTemplate_templateContent: '<node property>', // (1) define node properties
                GET_UpdateCustomVerificationEmailTemplate_successRedirectionUrl: '<node property>', // (1) define node properties
                GET_UpdateCustomVerificationEmailTemplate_failureRedirectionUrl: '<node property>', // (1) define node properties
                GET_UpdateCustomVerificationEmailTemplate_action: '<node property>', // (1) define node properties
                GET_UpdateCustomVerificationEmailTemplate_version: '<node property>', // (1) define node properties
                GET_UpdateCustomVerificationEmailTemplate_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_UpdateCustomVerificationEmailTemplate_xAmzDate: '<node property>', // (1) define node properties
                GET_UpdateCustomVerificationEmailTemplate_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_UpdateCustomVerificationEmailTemplate_xAmzCredential: '<node property>', // (1) define node properties
                GET_UpdateCustomVerificationEmailTemplate_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_UpdateCustomVerificationEmailTemplate_xAmzSignature: '<node property>', // (1) define node properties
                GET_UpdateCustomVerificationEmailTemplate_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_UpdateCustomVerificationEmailTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_UpdateCustomVerificationEmailTemplate',
                POST_UpdateCustomVerificationEmailTemplate_templateName: '<node property>', // (1) define node properties
                POST_UpdateCustomVerificationEmailTemplate_fromEmailAddress: '<node property>', // (1) define node properties
                POST_UpdateCustomVerificationEmailTemplate_templateSubject: '<node property>', // (1) define node properties
                POST_UpdateCustomVerificationEmailTemplate_templateContent: '<node property>', // (1) define node properties
                POST_UpdateCustomVerificationEmailTemplate_successRedirectionUrl: '<node property>', // (1) define node properties
                POST_UpdateCustomVerificationEmailTemplate_failureRedirectionUrl: '<node property>', // (1) define node properties
                POST_UpdateCustomVerificationEmailTemplate_action: '<node property>', // (1) define node properties
                POST_UpdateCustomVerificationEmailTemplate_version: '<node property>', // (1) define node properties
                POST_UpdateCustomVerificationEmailTemplate_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_UpdateCustomVerificationEmailTemplate_xAmzDate: '<node property>', // (1) define node properties
                POST_UpdateCustomVerificationEmailTemplate_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_UpdateCustomVerificationEmailTemplate_xAmzCredential: '<node property>', // (1) define node properties
                POST_UpdateCustomVerificationEmailTemplate_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_UpdateCustomVerificationEmailTemplate_xAmzSignature: '<node property>', // (1) define node properties
                POST_UpdateCustomVerificationEmailTemplate_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_UpdateReceiptRule()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_UpdateReceiptRule',
                GET_UpdateReceiptRule_ruleSetName: '<node property>', // (1) define node properties
                GET_UpdateReceiptRule_ruleName: '<node property>', // (1) define node properties
                GET_UpdateReceiptRule_ruleEnabled: '<node property>', // (1) define node properties
                GET_UpdateReceiptRule_ruleTlsPolicy: '<node property>', // (1) define node properties
                GET_UpdateReceiptRule_ruleRecipients: '<node property>', // (1) define node properties
                GET_UpdateReceiptRule_ruleActions: '<node property>', // (1) define node properties
                GET_UpdateReceiptRule_ruleScanEnabled: '<node property>', // (1) define node properties
                GET_UpdateReceiptRule_action: '<node property>', // (1) define node properties
                GET_UpdateReceiptRule_version: '<node property>', // (1) define node properties
                GET_UpdateReceiptRule_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_UpdateReceiptRule_xAmzDate: '<node property>', // (1) define node properties
                GET_UpdateReceiptRule_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_UpdateReceiptRule_xAmzCredential: '<node property>', // (1) define node properties
                GET_UpdateReceiptRule_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_UpdateReceiptRule_xAmzSignature: '<node property>', // (1) define node properties
                GET_UpdateReceiptRule_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_UpdateReceiptRule()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_UpdateReceiptRule',
                POST_UpdateReceiptRule_ruleSetName: '<node property>', // (1) define node properties
                POST_UpdateReceiptRule_ruleName: '<node property>', // (1) define node properties
                POST_UpdateReceiptRule_ruleEnabled: '<node property>', // (1) define node properties
                POST_UpdateReceiptRule_ruleTlsPolicy: '<node property>', // (1) define node properties
                POST_UpdateReceiptRule_ruleRecipients: '<node property>', // (1) define node properties
                POST_UpdateReceiptRule_ruleActions: '<node property>', // (1) define node properties
                POST_UpdateReceiptRule_ruleScanEnabled: '<node property>', // (1) define node properties
                POST_UpdateReceiptRule_action: '<node property>', // (1) define node properties
                POST_UpdateReceiptRule_version: '<node property>', // (1) define node properties
                POST_UpdateReceiptRule_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_UpdateReceiptRule_xAmzDate: '<node property>', // (1) define node properties
                POST_UpdateReceiptRule_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_UpdateReceiptRule_xAmzCredential: '<node property>', // (1) define node properties
                POST_UpdateReceiptRule_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_UpdateReceiptRule_xAmzSignature: '<node property>', // (1) define node properties
                POST_UpdateReceiptRule_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_UpdateTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_UpdateTemplate',
                GET_UpdateTemplate_templateTemplateName: '<node property>', // (1) define node properties
                GET_UpdateTemplate_templateSubjectPart: '<node property>', // (1) define node properties
                GET_UpdateTemplate_templateTextPart: '<node property>', // (1) define node properties
                GET_UpdateTemplate_templateHtmlPart: '<node property>', // (1) define node properties
                GET_UpdateTemplate_action: '<node property>', // (1) define node properties
                GET_UpdateTemplate_version: '<node property>', // (1) define node properties
                GET_UpdateTemplate_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_UpdateTemplate_xAmzDate: '<node property>', // (1) define node properties
                GET_UpdateTemplate_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_UpdateTemplate_xAmzCredential: '<node property>', // (1) define node properties
                GET_UpdateTemplate_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_UpdateTemplate_xAmzSignature: '<node property>', // (1) define node properties
                GET_UpdateTemplate_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_UpdateTemplate()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_UpdateTemplate',
                POST_UpdateTemplate_templateTemplateName: '<node property>', // (1) define node properties
                POST_UpdateTemplate_templateSubjectPart: '<node property>', // (1) define node properties
                POST_UpdateTemplate_templateTextPart: '<node property>', // (1) define node properties
                POST_UpdateTemplate_templateHtmlPart: '<node property>', // (1) define node properties
                POST_UpdateTemplate_action: '<node property>', // (1) define node properties
                POST_UpdateTemplate_version: '<node property>', // (1) define node properties
                POST_UpdateTemplate_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_UpdateTemplate_xAmzDate: '<node property>', // (1) define node properties
                POST_UpdateTemplate_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_UpdateTemplate_xAmzCredential: '<node property>', // (1) define node properties
                POST_UpdateTemplate_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_UpdateTemplate_xAmzSignature: '<node property>', // (1) define node properties
                POST_UpdateTemplate_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_VerifyDomainDkim()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_VerifyDomainDkim',
                GET_VerifyDomainDkim_domain: '<node property>', // (1) define node properties
                GET_VerifyDomainDkim_action: '<node property>', // (1) define node properties
                GET_VerifyDomainDkim_version: '<node property>', // (1) define node properties
                GET_VerifyDomainDkim_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_VerifyDomainDkim_xAmzDate: '<node property>', // (1) define node properties
                GET_VerifyDomainDkim_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_VerifyDomainDkim_xAmzCredential: '<node property>', // (1) define node properties
                GET_VerifyDomainDkim_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_VerifyDomainDkim_xAmzSignature: '<node property>', // (1) define node properties
                GET_VerifyDomainDkim_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_VerifyDomainDkim()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_VerifyDomainDkim',
                POST_VerifyDomainDkim_domain: '<node property>', // (1) define node properties
                POST_VerifyDomainDkim_action: '<node property>', // (1) define node properties
                POST_VerifyDomainDkim_version: '<node property>', // (1) define node properties
                POST_VerifyDomainDkim_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_VerifyDomainDkim_xAmzDate: '<node property>', // (1) define node properties
                POST_VerifyDomainDkim_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_VerifyDomainDkim_xAmzCredential: '<node property>', // (1) define node properties
                POST_VerifyDomainDkim_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_VerifyDomainDkim_xAmzSignature: '<node property>', // (1) define node properties
                POST_VerifyDomainDkim_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_VerifyDomainIdentity()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_VerifyDomainIdentity',
                GET_VerifyDomainIdentity_domain: '<node property>', // (1) define node properties
                GET_VerifyDomainIdentity_action: '<node property>', // (1) define node properties
                GET_VerifyDomainIdentity_version: '<node property>', // (1) define node properties
                GET_VerifyDomainIdentity_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_VerifyDomainIdentity_xAmzDate: '<node property>', // (1) define node properties
                GET_VerifyDomainIdentity_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_VerifyDomainIdentity_xAmzCredential: '<node property>', // (1) define node properties
                GET_VerifyDomainIdentity_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_VerifyDomainIdentity_xAmzSignature: '<node property>', // (1) define node properties
                GET_VerifyDomainIdentity_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_VerifyDomainIdentity()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_VerifyDomainIdentity',
                POST_VerifyDomainIdentity_domain: '<node property>', // (1) define node properties
                POST_VerifyDomainIdentity_action: '<node property>', // (1) define node properties
                POST_VerifyDomainIdentity_version: '<node property>', // (1) define node properties
                POST_VerifyDomainIdentity_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_VerifyDomainIdentity_xAmzDate: '<node property>', // (1) define node properties
                POST_VerifyDomainIdentity_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_VerifyDomainIdentity_xAmzCredential: '<node property>', // (1) define node properties
                POST_VerifyDomainIdentity_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_VerifyDomainIdentity_xAmzSignature: '<node property>', // (1) define node properties
                POST_VerifyDomainIdentity_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_VerifyEmailAddress()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_VerifyEmailAddress',
                GET_VerifyEmailAddress_emailAddress: '<node property>', // (1) define node properties
                GET_VerifyEmailAddress_action: '<node property>', // (1) define node properties
                GET_VerifyEmailAddress_version: '<node property>', // (1) define node properties
                GET_VerifyEmailAddress_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_VerifyEmailAddress_xAmzDate: '<node property>', // (1) define node properties
                GET_VerifyEmailAddress_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_VerifyEmailAddress_xAmzCredential: '<node property>', // (1) define node properties
                GET_VerifyEmailAddress_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_VerifyEmailAddress_xAmzSignature: '<node property>', // (1) define node properties
                GET_VerifyEmailAddress_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_VerifyEmailAddress()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_VerifyEmailAddress',
                POST_VerifyEmailAddress_emailAddress: '<node property>', // (1) define node properties
                POST_VerifyEmailAddress_action: '<node property>', // (1) define node properties
                POST_VerifyEmailAddress_version: '<node property>', // (1) define node properties
                POST_VerifyEmailAddress_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_VerifyEmailAddress_xAmzDate: '<node property>', // (1) define node properties
                POST_VerifyEmailAddress_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_VerifyEmailAddress_xAmzCredential: '<node property>', // (1) define node properties
                POST_VerifyEmailAddress_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_VerifyEmailAddress_xAmzSignature: '<node property>', // (1) define node properties
                POST_VerifyEmailAddress_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GET_VerifyEmailIdentity()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'GET_VerifyEmailIdentity',
                GET_VerifyEmailIdentity_emailAddress: '<node property>', // (1) define node properties
                GET_VerifyEmailIdentity_action: '<node property>', // (1) define node properties
                GET_VerifyEmailIdentity_version: '<node property>', // (1) define node properties
                GET_VerifyEmailIdentity_xAmzContentSha256: '<node property>', // (1) define node properties
                GET_VerifyEmailIdentity_xAmzDate: '<node property>', // (1) define node properties
                GET_VerifyEmailIdentity_xAmzAlgorithm: '<node property>', // (1) define node properties
                GET_VerifyEmailIdentity_xAmzCredential: '<node property>', // (1) define node properties
                GET_VerifyEmailIdentity_xAmzSecurityToken: '<node property>', // (1) define node properties
                GET_VerifyEmailIdentity_xAmzSignature: '<node property>', // (1) define node properties
                GET_VerifyEmailIdentity_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle POST_VerifyEmailIdentity()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ses', name: 'eksido-aws-ses',
                method: 'POST_VerifyEmailIdentity',
                POST_VerifyEmailIdentity_emailAddress: '<node property>', // (1) define node properties
                POST_VerifyEmailIdentity_action: '<node property>', // (1) define node properties
                POST_VerifyEmailIdentity_version: '<node property>', // (1) define node properties
                POST_VerifyEmailIdentity_xAmzContentSha256: '<node property>', // (1) define node properties
                POST_VerifyEmailIdentity_xAmzDate: '<node property>', // (1) define node properties
                POST_VerifyEmailIdentity_xAmzAlgorithm: '<node property>', // (1) define node properties
                POST_VerifyEmailIdentity_xAmzCredential: '<node property>', // (1) define node properties
                POST_VerifyEmailIdentity_xAmzSecurityToken: '<node property>', // (1) define node properties
                POST_VerifyEmailIdentity_xAmzSignature: '<node property>', // (1) define node properties
                POST_VerifyEmailIdentity_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ses-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
});
