/* eslint-disable @typescript-eslint/ban-types */
export class ResponseService {
  message: string
  data: Object | any

  constructor(message: string, data?: Object) {
    this.message = message
    this.data = data
  }
}
