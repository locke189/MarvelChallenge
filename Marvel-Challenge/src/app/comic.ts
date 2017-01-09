export class Comic {
  id : string;
  title : string;
  thumbnail: string;
  description: string;
  prices: any[];
  urls: any[];
  price: string;

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
  }

  private setComicPrice(){
    this.prices.forEach((listElement) => {
      this.price = "$" + listElement.price;
    });
  }

}
