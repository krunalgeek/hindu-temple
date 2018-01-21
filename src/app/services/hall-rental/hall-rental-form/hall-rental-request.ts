export class HallRentalReqest {
    constructor(
      public firstName: string,
      public lastName: string,
      public email: string,
      public phone: number,
      public serviceDate: string,
      public cardNumber: number,
      public depositAmnt: number,
      public securityCode: number,
      public expireDate: any
    ) {  }
}