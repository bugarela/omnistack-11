const generateUniqueId = require('../../../src/utils/generateUniqueId');

describe('Unique ID generation', () => {
  it('generates an id of length 8', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});
