import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';
import { codeEtatList } from 'src/app/mock/activite';
import { Animations, codeTypeList } from 'src/app/mock/animations';
import { Activite } from 'src/app/models/activite';
import { Animation } from 'src/app/models/animation';

@Component({
  selector: 'app-form-activite',
  templateUrl: './form-activite.component.html',
  styleUrls: ['./form-activite.component.scss'],
})
export class FormActiviteComponent {
  @Input()
  isNew = false;

  @Output() newActivite = new EventEmitter<Activite>();

  @Output() cancel = new EventEmitter<boolean>();

  @Input()
  model: Activite | null = {
    codeAnimation: null,
    codeEtat: null,
    date: null,
    heureDebut: null,
    dateAnnule: null,
    heureFin: null,
    heureRendezVous: null,
    nomResponsable: '',
    prenomResponsable: '',
    prix: null,
  };

  readonly codeEtats = Object.values(codeEtatList);

  readonly animations = Object.values(Animations);

  mind = '&&';

  activiteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.activiteForm = this.formBuilder.group(
      {
        codeAnimation: [this.model?.codeAnimation, Validators.required],
        codeEtat: [this.model?.codeEtat, Validators.required],
        date: [this.model?.date, Validators.required],
        heureRendezVous: [this.model?.heureRendezVous, Validators.required],
        dateAnnule: [this.model?.dateAnnule],
        heureDebut: [this.model?.heureDebut, Validators.required],
        heureFin: [this.model?.heureFin, Validators.required],
        nomResponsable: [this.model?.nomResponsable, Validators.required],
        prenomResponsable: [this.model?.prenomResponsable, Validators.required],
        prix: [this.model?.prix, Validators.required],
      },
      {
        updateOn: 'submit',
        validators: [this.timeRangeValidator1, this.timeRangeValidator2, this.DateActValidator],
      }
    );
  }

  DateActValidator(activiteForm: FormGroup) {
    const activiteSelected:Animation = activiteForm.get('codeAnimation')?.value
    const end = activiteForm.get('date')?.value;
    const day = activiteSelected?.dateValidite.getDate();
    const month = activiteSelected?.dateValidite.getMonth() + 1;
    const year = activiteSelected?.dateValidite.getFullYear();
    const dateValidite = year?.toString() + '-' + month?.toString() + '-' + day?.toString()

    if (dateValidite <= end) {
      activiteForm.controls['date'].setErrors({ dateValid: true });
      return { dateValid: true };
    }
    return null;
  }

  timeRangeValidator1(activiteForm: FormGroup) {
    const start = activiteForm.get('heureRendezVous')?.value;
    const end = activiteForm.get('heureDebut')?.value;
    if (start && end && start >= end) {
      activiteForm.controls['heureDebut'].setErrors({ timeRange1: true });
      return { timeRange1: true };
    }
    return null;
  }

  timeRangeValidator2(activiteForm: FormGroup) {
    const start = activiteForm.get('heureDebut')?.value;
    const end = activiteForm.get('heureFin')?.value;
    if (start && end && start >= end) {
      activiteForm.controls['heureFin'].setErrors({ timeRange2: true });
      return { timeRange2: true };
    }
    return null;
  }

  onSubmitForm(): void {
    if (this.activiteForm.valid) {
      this.newActivite.emit(this.activiteForm.value);
    }
  }

  onDestroyForm(): void {
    this.cancel.emit(true);
  }
}
