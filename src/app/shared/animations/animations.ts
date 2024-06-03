import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from "@angular/animations";

export const animateSmoothRight: AnimationTriggerMetadata[] = [
  trigger('animateSmoothRight', [
    transition(':enter', [
      style({ transform: 'scale(0)', opacity: '0', transformOrigin: 'top right'}),
      animate('200ms', style({
        transform: 'scale(1)', opacity: '1', transformOrigin: 'top right'
      }))
    ]),
    transition(':leave', [
      style({ transform: 'scale(1)', opacity: '1', transformOrigin: 'top right'}),
      animate('200ms', style({
        transform: 'scale(0)',
        opacity: '0',
      }))
    ]),
  ])
];

export const animateSmoothLeft: AnimationTriggerMetadata[] = [
  trigger('animateSmoothLeft', [
    transition(':enter', [
      style({ transform: 'scale(0)', opacity: '0', transformOrigin: 'top left'}),
      animate('200ms', style({
        transform: 'scale(1)', opacity: '1', transformOrigin: 'top left'
      }))
    ]),
    transition(':leave', [
      style({ transform: 'scale(1)', opacity: '1', transformOrigin: 'top left'}),
      animate('200ms', style({
        transform: 'scale(0)',
        opacity: '0',
      }))
    ]),
  ])
];

export const animateAccordion: AnimationTriggerMetadata[] = [
  trigger('animateAccordion', [
    state( 'initial', style({
      height: '0',
      overflow: 'hidden',
      visibility: 'hidden',
    })),
    state('final', style({
      visibility: 'visible',
    })),
    transition('initial<=>final', animate('250ms'))
  ])
]
