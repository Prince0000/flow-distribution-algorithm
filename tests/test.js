const { expect } = require('chai');
const Astrologer = require('../models/astrologer');
const User = require('../models/user');
const { distributeUsers, adjustFlowForTopAstrologers } = require('../controllers/astrologerController');

describe('Flow Distribution Algorithm', () => {
  it('should distribute users evenly among astrologers', () => {
    const astrologers = [
      new Astrologer(1, 'Astrologer A'),
      new Astrologer(2, 'Astrologer B'),
      new Astrologer(3, 'Astrologer C')
    ];

    const users = [new User(1), new User(2), new User(3), new User(4), new User(5)];

    distributeUsers(users, astrologers);

    const flows = astrologers.map(a => a.currentFlow);
    expect(flows).to.deep.equal([2, 2, 1]);
  });

  it('should adjust flow for top astrologers', () => {
    const astrologers = [
      new Astrologer(1, 'Astrologer A'),
      new Astrologer(2, 'Astrologer B', true),
      new Astrologer(3, 'Astrologer C')
    ];

    // Simulate some initial flow
    astrologers[0].currentFlow = 3;
    astrologers[1].currentFlow = 2;
    astrologers[2].currentFlow = 1;

    adjustFlowForTopAstrologers(astrologers, 2);
    const flows = astrologers.map(a => a.currentFlow);
    expect(flows).to.deep.equal([3, 4, 1]);
  });
});
