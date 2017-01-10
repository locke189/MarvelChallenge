export class Comic {
  id : string;
  title : string;
  thumbnail: string;
  description: string;
  prices: any[];
  urls: any[];
  price: string;
  purchaseUrl: string;

  constructor(object:any){
    this.id = object.id;
    this.title = object.title;
    this.thumbnail = `${object.thumbnail.path}.${object.thumbnail.extension}`;
    this.description = object.description;
    this.prices=object.prices;
    this.urls=object.urls;
    this.price='not available';
    console.log(this.price);
    this.setComicPrice();
    this.setComicUrl();

    if(!this.description){
      this.description = "Description not available"
    }

  }

  private setComicPrice(){
    this.prices.forEach((listElement) => {
      this.price = "$" + listElement.price;
    });
  }

  private setComicUrl(){
    this.urls.forEach((listElement) => {
      this.purchaseUrl = listElement.url;
      if(listElement.type === "purchase"){
        return;
      }
    });
  }
}
