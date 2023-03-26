import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { activites } from 'src/app/mock/activite';
import { Activite } from 'src/app/models/activite';

@Component({
  selector: 'app-page-espace-encadrant-activite',
  templateUrl: './page-espace-encadrant-activite.component.html',
  styleUrls: ['./page-espace-encadrant-activite.component.scss'],
})
export class PageEspaceEncadrantActiviteComponent implements OnInit{

  @Output() 
  newSelectedActivite = new EventEmitter<Activite>();

  activites = activites
  selectActiviteFrom!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.selectActiviteFrom = this.formBuilder.group(
      {
        selectActivite: [null, Validators.required],
      },
      {
        updateOn: 'submit',
      }
    );
  }

  onSubmitForm(): void {
    if (this.selectActiviteFrom.valid) {
      console.log(this.selectActiviteFrom.get('selectActivite')?.value);
      this.newSelectedActivite.emit(this.selectActiviteFrom.get('selectActivite')?.value);
    }
  }
}
