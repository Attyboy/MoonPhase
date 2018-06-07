
const React = require('react');
const T = require('prop-types')



const MoonPhase= ({ moonId, ...props }) => {  // MoonView

//  json.parse(getMoonPhase);


    return      <div {...props}>
        <img src={`http://www.farmsense.net/demos/images/moonphases/${moonId}.png`} />
    </div>;
};

MoonPhase.propTypes = {
  moonId: T.number,
}

module.exports = MoonPhase;
