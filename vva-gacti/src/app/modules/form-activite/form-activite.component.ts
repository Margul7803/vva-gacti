import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { codeEtatList } from 'src/app/mock/activite';
import { Activite } from 'src/app/models/activite';
import { Animation } from 'src/app/models/animation';
import { convertDate } from 'src/app/services/global service';
import { selectAnimationList } from 'src/app/state/animation-state';

@Component({
  selector: 'app-form-activite',
  templateUrl: './form-activite.component.html',
  styleUrls: ['./form-activite.component.scss'],
})
export class FormActiviteComponent implements OnInit {
  @Input()
  isNew = false;

  @Output() newActivite = new EventEmitter<Activite>();

  @Output() cancel = new EventEmitter<boolean>();

  @Input()
  model: Activite | null = {
    codeAnimation: '',
    codeEtat: null,
    date: '',
    heureDebut: '',
    dateAnnule: '',
    heureFin: '',
    heureRendezVous: '',
    nomResponsable: '',
    prenomResponsable: '',
    prix: null,
  };

  readonly codeEtats = Object.values(codeEtatList);

  public animationList$: Observable<Animation[]> | null = null;

  activiteForm!: FormGroup;

  private destroyed$ = new Subject<boolean>();

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.animationList$ = this.store
      .select(selectAnimationList)
      .pipe(takeUntil(this.destroyed$));
    this.activiteForm = this.formBuilder.group(
      {
        codeAnimation: [this.model?.codeAnimation, Validators.required],
        codeEtat: [this.model?.codeEtat?.code, Validators.required],
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
        validators: [
          this.timeRangeValidator1,
          this.timeRangeValidator2,
          //this.DateActValidator,
        ],
      }
    );
  }

  DateActValidator(activiteForm: FormGroup) {
    const activiteSelected: Animation =
      activiteForm.get('codeAnimation')?.value;
    const end = activiteForm.get('date')?.value;
    const start = activiteSelected.dateValidite;

    if (start <= end) {
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
      this.activiteForm
        .get('codeEtat')
        ?.setValue(codeEtatList[this.activiteForm.get('codeEtat')?.value - 1]);
      this.newActivite.emit(this.activiteForm.value);
      this.activiteForm.reset();
      Object.keys(this.activiteForm.controls).forEach(key => {
        const control = this.activiteForm.controls[key];
        control.setErrors(null);
      });
    }
  }

  onDestroyForm(): void {
    this.cancel.emit(true);
  }

  FormatDateToShortDate(date: Date | null | undefined): string {
    if (date !== null && date !== undefined) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      if (month < 10) {
        return year + '-' + '0' + month + '-' + day;
      } else {
        return year + '-' + month + '-' + day;
      }
    } else {
      return '';
    }
  }

  FormatDateToTime(date: Date | null | undefined): string {
    if (date !== null && date !== undefined) {
      const hour = date.getHours();
      let hourstr = date.getHours().toString();
      const minute = date.getMinutes();
      let minutestr = date.getMinutes().toString();
      if (hour < 10) {
        hourstr = '0' + hour;
      }
      if (minute < 10) {
        minutestr = '0' + minute;
      }
      return hourstr + ':' + minutestr;
    } else {
      return '';
    }
  }
}
