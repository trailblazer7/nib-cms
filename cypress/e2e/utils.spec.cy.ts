import { addInitStyles, classNames } from "@utils"

describe('utils test', () => {
  it('classNames: separated into one string', () => {
    expect(classNames('bg-red', 'font-small', 'hover:bg-blue')).to.equal("bg-red font-small hover:bg-blue")
  })
})