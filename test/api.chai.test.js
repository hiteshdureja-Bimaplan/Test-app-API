// api.test.js
const api = require('../src/api');
const expect = require('chai').expect;

describe('API Calls', () => {
  it('fetchData returns data from API', async () => {
    const data = await api.fetchData();
    expect(data).to.equal('Data from API');
  });
});
