import makeModelMessage from '../lib/makeModelMessage'

describe('Make message model', () => {
  it('Must mount a base header with status 500 and title Internal Server Error', () => {
    const model = makeModelMessage({ code: '500' })

    expect(model).toEqual({ status: 500, title: 'Internal Server Error' })
  })

  it('Must mount a custom headline for a 500 error.', () => {
    const model = makeModelMessage({
      code: '500',
      title: 'Server found a problem',
    })

    expect(model).toEqual({ status: 500, title: 'Server found a problem' })
  })
})
