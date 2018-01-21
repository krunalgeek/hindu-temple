export class ContactUsReqest {
    constructor(
      public firstName: string,
      public lastName: string,
      public email: string,
      public phone: number,
      public comment: string
    ) {  }
}