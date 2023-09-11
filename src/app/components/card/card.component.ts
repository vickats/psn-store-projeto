import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  gameCover: string = '';
  @Input()
  gameLabel: string = '';
  @Input()
  gameTitle: string = '';
  @Input()
  imgAlt: string = '';
  @Input()
  gameType: string = '';
  @Input()
  gamePrice: string = '';
  constructor() {}

  ngOnInit(): void {}
}
