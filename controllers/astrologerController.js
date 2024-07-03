const Astrologer = require('../models/astrologer');
const User = require('../models/user');

const astrologers = [
  new Astrologer(1, 'Astrologer A'),
  new Astrologer(2, 'Astrologer B', true),
  new Astrologer(3, 'Astrologer C')
];

const users = [new User(1), new User(2), new User(3), new User(4), new User(5)];

function distributeUsers(users, astrologers) {
  // Calculate the total flow of all astrologers
  const totalFlow = astrologers.reduce((acc, astrologer) => acc + astrologer.currentFlow, 0);

  // Sort astrologers based on their current flow in ascending order
  astrologers.sort((a, b) => a.currentFlow - b.currentFlow);

  // Distribute users
  users.forEach(user => {
    // Find the astrologer with the least flow
    const leastFlowAstrologer = astrologers[0];

    // Allocate the user to the astrologer
    leastFlowAstrologer.currentFlow += 1;

    // Resort astrologers
    astrologers.sort((a, b) => a.currentFlow - b.currentFlow);
  });
}

// Adjust flow for top astrologers
function adjustFlowForTopAstrologers(astrologers, adjustmentFactor) {
  astrologers.forEach(astrologer => {
    if (astrologer.isTopAstrologer) {
      astrologer.currentFlow *= adjustmentFactor;
    }
  });
}

const distribute = (req, res) => {
  distributeUsers(users, astrologers);
  res.send(astrologers);
};

const toggleTopAstrologer = (req, res) => {
  const astrologerId = parseInt(req.params.id);
  const astrologer = astrologers.find(a => a.id === astrologerId);
  
  if (!astrologer) {
    return res.status(404).send('Astrologer not found');
  }

  astrologer.isTopAstrologer = !astrologer.isTopAstrologer;
  res.send(astrologer);
};

const adjustTopAstrologers = (req, res) => {
  const adjustmentFactor = parseFloat(req.body.adjustmentFactor);
  
  if (isNaN(adjustmentFactor)) {
    return res.status(400).send('Invalid adjustment factor');
  }

  adjustFlowForTopAstrologers(astrologers, adjustmentFactor);
  res.send(astrologers);
};

module.exports = {
  distribute,
  toggleTopAstrologer,
  adjustTopAstrologers
};
