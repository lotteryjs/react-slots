const path = require('path');
const glob = require('glob');

module.exports = {
    title: 'The React Docs of Slots',
    showUsage: true,
    components: function () {
        return glob.sync(path.resolve(__dirname, 'src/ReactUI/index.tsx'));
    },
    resolver: require('react-docgen').resolver.findAllComponentDefinitions,
    propsParser: require('react-docgen-typescript').withDefaultConfig({ propFilter: { skipPropsWithoutDoc: true } }).parse
};
