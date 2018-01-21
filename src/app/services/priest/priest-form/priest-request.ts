export class PriestReqest {
    constructor(
      public firstName: string,
      public lastName: string,
      public email: string,
      public phone: number,
      public priestService: string,
      public serviceDate: string
    ) {  }
}