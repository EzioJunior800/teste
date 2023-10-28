import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPermissionService {

  private dbName: string = 'dataBoxUser';
  private storeName: string = 'loggerUser';
  private db: IDBDatabase;

  constructor() {
    this.initDB();
  }
  private initDB() {
    const request = indexedDB.open(this.dbName, 1);
    request.onerror = (event) => {
      console.error('IndexedDB error:', event);
    };
    request.onupgradeneeded = (event: any) => {
      this.db = event.target.result;
      if (!this.db.objectStoreNames.contains(this.storeName)) {
        this.db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
      }
    };
    request.onsuccess = (event: any) => {
      this.db = event.target.result;
    };
  }

  public openDatabase(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);
      request.onupgradeneeded = (event: any) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
        }
      };
      request.onsuccess = (event: any) => {
        resolve(event.target.result);
      };
      request.onerror = (event: any) => {
        reject(event.target.error);
      };
    });
  }
  public addUser(userId: number, userName: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const objectStore = transaction.objectStore(this.storeName);
      const request = objectStore.add({ userId, userName });
      request.onsuccess = () => {
        resolve();
      };
      request.onerror = (event) => {
        console.error('Error adding person:', event);
        reject();
      };
    });
  }
  public deleteUser(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      if (id) {
        const transaction = this.db.transaction([this.storeName], 'readwrite');
        const objectStore = transaction.objectStore(this.storeName);
        const request = objectStore.delete(id);
        request.onsuccess = () => {
          resolve();
        };
        request.onerror = (event) => {
          console.error('Error deleting person:', event);
          reject();
        };
      }
    });
  }

  public clearTable(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      if (!this.db) {
        try {
          this.db = await this.openDatabase(); // Initialize the database if not already done
        } catch (error) {
          console.error('Error initializing database:', error);
          reject();
          return;
        }
      }
  
      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const objectStore = transaction.objectStore(this.storeName);
      const clearRequest = objectStore.clear();
      clearRequest.onsuccess = () => {
        resolve();
      };
      clearRequest.onerror = (event) => {
        console.error('Error clearing table:', event);
        reject();
      };
    });
  }
  

  public getAllData(): Promise<any[]> {    
    return new Promise((resolve, reject) => {
      if (this.db) {
        const transaction = this.db.transaction([this.storeName], 'readonly');
        const objectStore = transaction.objectStore(this.storeName);
        const request = objectStore.getAll();
        request.onsuccess = (event: any) => {
          resolve(event.target.result);
        };
        request.onerror = (event) => {
          console.error('Error getting people:', event);
          reject();
        };
      }
    });
  }
}
