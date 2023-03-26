import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Animations } from 'src/app/mock/animations';
import { Activite } from 'src/app/models/activite';

@Component({
  selector: 'app-page-espace-encadrant-animation',
  templateUrl: './page-espace-encadrant-animation.component.html',
  styleUrls: ['./page-espace-encadrant-animation.component.scss'],
})
export class PageEspaceEncadrantAnimationComponent {
  @Output() 
  newSelectedActivite = new EventEmitter<Activite>();

  animations = Animations
  selectAnimationFrom!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.selectAnimationFrom = this.formBuilder.group(
      {
        selectAnimation: [null, Validators.required],
      },
      {
        updateOn: 'submit',
      }
    );
  }

  onSubmitForm(): void {
    if (this.selectAnimationFrom.valid) {
      console.log(this.selectAnimationFrom.get('selectAnimation')?.value);
      this.newSelectedActivite.emit(this.selectAnimationFrom.get('selectAnimation')?.value);
    }
  }
}
