class Test {

  protected age:number
  protected name:string 

  constructor(age:number, name:string) {

    if (!age) throw new Error('Age need to be passed.')

    this.age = age
    this.name = name
  }

  protected setName(name:string):void {
    this.name = name
  }

  private getNameAgeStr():string {
    return this.name + ' ' + this.age
  }

  public setAge(age:number): void {
    this.age = age
  }
}

class Testty extends Test {
  public getName():string {
    return this.name
  }
}

let myTest = new Testty(4, 'Anna')
myTest.setAge(6)