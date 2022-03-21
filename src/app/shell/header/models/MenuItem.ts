export class MenuItem {
  public name: string = '';
  public url: string = '';
  public icon: string = '';

  public constructor(name: string, url: string, icon: string) {
    this.name = name;
    this.url = url;
    this.icon = icon;
  }
}
