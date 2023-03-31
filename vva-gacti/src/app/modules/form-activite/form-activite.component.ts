import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { codeEtatList } from 'src/app/mock/activite';
import { Activite } from 'src/app/models/activite';
import { Animation } from 'src/app/models/animation';
import { convertDate } from 'src/app/services/global service';
import { selectActiviteAction } from 'src/app/state/activite-state';
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
    Etat: null,
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
        Etat: [this.model?.Etat?.code, Validators.required],
        date: [
          this.model?.date
            ? new Date(this.model.date).toISOString().substring(0, 10)
            : '',
          Validators.required,
        ],
        heureRendezVous: [
          this.model?.heureRendezVous
            ? new Date(this.model.heureRendezVous)
                .toISOString()
                .substring(11, 16)
            : '',
          Validators.required,
        ],
        dateAnnule: this.model?.dateAnnule,
        heureDebut: [
          this.model?.heureDebut
            ? new Date(this.model.heureDebut).toISOString().substring(11, 16)
            : '',
          Validators.required,
        ],
        heureFin: [
          this.model?.heureFin
            ? new Date(this.model.heureFin).toISOString().substring(11, 16)
            : '',
          Validators.required,
        ],
        nomResponsable: [this.model?.nomResponsable, Validators.required],
        prenomResponsable: [this.model?.prenomResponsable, Validators.required],
        prix: [this.model?.prix, Validators.required],
      },
      {
        updateOn: 'submit',
        validators: [this.timeRangeValidator1, this.timeRangeValidator2],
      }
    );
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
      this.activiteForm
        .get('date')
        ?.setValue(this.activiteForm.get('date')?.value + 'T00:00:00.000Z');

      this.activiteForm
        .get('heureDebut')
        ?.setValue(
          '1222-12-11T' +
            this.activiteForm.get('heureDebut')?.value +
            ':00.000Z'
        );
      this.activiteForm
        .get('heureFin')
        ?.setValue(
          '1222-12-11T' + this.activiteForm.get('heureFin')?.value + ':00.000Z'
        );
      this.activiteForm
        .get('heureRendezVous')
        ?.setValue(
          '1222-12-11T' +
            this.activiteForm.get('heureRendezVous')?.value +
            ':00.000Z'
        );
      this.newActivite.emit(this.activiteForm.value);
      this.store.dispatch(selectActiviteAction({ activite: null }));
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
