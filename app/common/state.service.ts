import {Injectable} from '@angular/core';

@Injectable()
export class StateService {
	private _message = 'Hello Message';
  private _number = 12345

  getMessage(): string {
    return this._message;
  };

  getNumber(): number {
    return this._number;
  }

  setNumber(newNum: number): void {
    this._number = newNum;
  }

  setMessage(newMessage: string): void {
    this._message = newMessage;
  };
}
