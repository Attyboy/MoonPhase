const React = require('react');
const MoonView = require('./components/MoonView');

module.exports = {
    path: '/moonphase',
    component: MoonView,
    exact: true
};
/*


module.exports = {
    path: '/moonphase',
    component: () => (  // MoonView

        <div>
          <h2>{`The moon's phase`}</h2>
          <MoonPhase time={Date.now()}/>
        </div>
    ),
    exact: true
};
*/
