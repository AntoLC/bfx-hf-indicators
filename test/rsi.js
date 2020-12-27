/* eslint-env mocha */
'use strict'

const assert = require('assert')
const { RSI } = require('../dist')

describe('RSI', () => {
  it('Test', () => {
    for (let index = 0; index < 100; index++) {
      const rsi = new RSI([8])
      rsi.add(14000)
      rsi.add(14010)
      rsi.add(14025)
      rsi.add(14035)
      rsi.add(14500)
      rsi.add(14100)
      rsi.add(14125)
      rsi.add(14335)
      rsi.add(14600)
      rsi.add(14710)

      console.debug('RSI', rsi.v())

      if (rsi.v().isUndefined()) {
        assert.fail('RSI problem:' + index)
      }
    }

    assert.isOk('RSI OK')
  })
})
