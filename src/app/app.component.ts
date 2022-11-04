import { Component, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DynamicElements';
  @ViewChildren('input') input: QueryList<HTMLInputElement> = new QueryList();
  @ViewChildren('personelList') personelList: QueryList<any> = new QueryList();

  /**
   *
   */
  constructor() {
  }


  personel: Array<any> = [
    { id: 0, tipId: 1, name: 'ahmet', age: '34' },
    { id: 1, tipId: 2, name: 'mehmet', age: '30' },
    { id: 2, tipId: 0, name: 'ali', age: '28' }];
  tipler: Array<any> = [
    { id: 0, tipAdi: "stajer", description: 'stajerlere özel bir tanım' },
    { id: 1, tipAdi: "yeni başlayan", description: 'yeni başlayan çalışanlara özel bir tanım' },
    { id: 2, tipAdi: "kıdemli", description: 'kıdemli çalışanlara özel bir tanım' }
  ]

  getTip(id: number) {
    return this.tipler.find(t => t.id == id).description;
  }

  handleTypeChange($event: any) {
    var txtBox:any = this.input.get($event.target.id);
    txtBox.nativeElement.value = this.getTip($event.target.options.selectedIndex);
  }

  submit() {
    console.log(this.personelList);
    this.personelList.map(p=> console.log(p.nativeElement.childNodes[3].childNodes[0].value))
  }
}
