import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';

type Position = {
  top: string,
  left: string
};

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  position: Position = { top: '0px', left: '0px' }

  constructor() { }

  ngOnInit(): void {

    const card = document.querySelector('#div');
    let mouseDown$ = fromEvent(card, 'mousedown');
    let mouseUp$ = fromEvent(document, 'mouseup');
    let mouseMove$ = fromEvent(document, 'mousemove');

    const dragDrop$ = mouseDown$.pipe(
      map((e) => ({
        x: e['clientX'],
        y: e['clientY'],
        target: {
          x: e.target['offsetLeft'],
          y: e.target['offsetTop']
        }
      })),
      switchMap((start) => mouseMove$.pipe(
        map(e => ({
          x: e['clientX'] - start.x + start.target.x,
          y: e['clientY'] - start.y + start.target.y
        })),
        takeUntil(mouseUp$)
      ))
    );

    dragDrop$.subscribe((val) => {
      this.updateCardPosition(val);
    });
  }

  updateCardPosition({ x, y }): void {
    this.position = {
      left: `${x}px`,
      top: `${y}px`
    };
  }
}
