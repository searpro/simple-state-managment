/**
 * lk-store-service
 * @author lijin.kurian@gmail.com
 * Simple localStorage based reactive state management service for angular. 
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class StoreService {
  private store = {};
  public reactiveStore = {};

  constructor() {
    //load the store from localStorage if any.
    this.store = JSON.parse(localStorage.getItem('store'));
    if (this.store) {
      Object.keys(this.store).forEach((key) => {
        this.reactiveStore[key] = new BehaviorSubject(this.store[key]);
      });
    } else {
      this.store = {};
    }
  }

  private setStore() {
    localStorage.setItem('store', JSON.stringify(this.store));
  }

  private clearStore() {
    this.store = JSON.parse(localStorage.getItem('store'));
    localStorage.clear();
    this.store = {};
    this.setStore();
  }

  /**
   * name: string
   * value: string. Objects needs to be stringified.
   */
  public setItem(name: string, value: any, json?: boolean): void {
    if (json) {
      value = JSON.stringify(value);
    }
    this.makeReactive(name, value);
    this.store[name] = value;
    this.setStore();
  }

  /**
   * name: string. key of item to be retrieved.
   */
  public getItem(name: string, json?): BehaviorSubject<any> {
    if (this.reactiveStore[name]) {
      if (json) {
        return this.reactiveStore[name].pipe(
          map((item: string) => {
            return JSON.parse(item);
          })
        );
      } else {
        return this.reactiveStore[name];
      }
    } else {
      this.setItem(name, null, json);
      return this.reactiveStore[name];
    }
  }

  public makeReactive(key, value) {
    if (this.reactiveStore[key]) {
      this.reactiveStore[key].next(value);
    } else {
      this.reactiveStore[key] = new BehaviorSubject(value);
    }
    return this.reactiveStore[key];
  }

  /**
   * name: string. key of item to be deleted.
   */
  public removeItem(name) {
    delete this.store[name];
    delete this.reactiveStore[name]; 
    this.setStore();
  }

  /**
   * clear store
   */
  public clear() {
    this.clearStore();
  }
}
