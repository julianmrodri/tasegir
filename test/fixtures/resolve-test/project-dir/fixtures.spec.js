/* eslint-env mocha */
'use strict'

const loadFixture = require('tasegir/fixtures')
const expect = require('chai').expect

describe('fixtures (require.resolve)', () => {
  it('should use require.resolve to load fixtures from parent directories', () => {
    const myFixture = loadFixture('fixture.txt', 'dep-a')
    expect(myFixture.toString('utf8').trim()).to.eql('Hi there')
  })
})
