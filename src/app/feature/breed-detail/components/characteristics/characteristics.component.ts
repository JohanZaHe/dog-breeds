import { Component, OnInit, Input } from '@angular/core';
import { IDogInfo } from '../../shared/models/more-breed-details-model';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss'],
})
export class CharacteristicsComponent implements OnInit {
  @Input() dogInfo: IDogInfo = {};
  constructor() {}

  ngOnInit(): void {}
}
