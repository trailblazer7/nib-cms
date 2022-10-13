import { addInitStyles, classNames, startWith } from "../../utils"

describe('utils test', () => {
  it('startWith: "catsAndDogs" start with "cats"', () => {
    expect(startWith('catsAndDogs', 'cats')).equal(true)
  })

  it('classNames: separated into one string', () => {
    expect(classNames('bg-red', 'font-small', 'hover:bg-blue')).to.equal("bg-red font-small hover:bg-blue")
  })
})