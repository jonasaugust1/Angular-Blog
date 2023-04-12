import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input()
  photoCover = '';
  @Input()
  title = '';
  @Input()
  description = '';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(){
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null){
    const result = dataFake.filter(values => values.id === this.id)[0]

    if(result){
      this.title = result.title;
      this.description = result.description;
      this.photoCover = result.photo;
    }
  }
}
