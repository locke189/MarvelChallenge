export class Storage {

  storageId:string;

  constructor(storageId:string){
    this.storageId = storageId;
  }

  getFromStorage(){
    const data = JSON.parse(localStorage.getItem(this.storageId));
    if(!data) return false;
    return data;
  }


  saveToStorage(data){
    localStorage.setItem(this.storageId, JSON.stringify(data)) ;
  }

}
