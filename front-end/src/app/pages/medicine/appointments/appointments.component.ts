import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BasePageComponent} from '../../base-page';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../interfaces/app-state';
import {HttpService} from '../../../services/http/http.service';
import {TCModalService} from '../../../ui/services/modal/modal.service';
import {IUser} from '../../../ui/interfaces/user';

@Component({
    selector: 'page-appointments',
    templateUrl: './appointments.component.html',
    styleUrls: ['./appointments.component.scss']
})
export class PageAppointmentsComponent extends BasePageComponent implements OnInit, OnDestroy {
    @ViewChild('modalBody', {static: true}) modalBody: ElementRef<any>;
    @ViewChild('modalFooter', {static: true}) modalFooter: ElementRef<any>;

    appointments: any[];
    appointmentForm: FormGroup;
    currentAvatar: string | ArrayBuffer;
    defaultAvatar: string;
    patients: IUser[];

    constructor(
        store: Store<IAppState>,
        httpSv: HttpService,
        private modal: TCModalService,
        private formBuilder: FormBuilder
    ) {
        super(store, httpSv);

        this.pageData = {
            title: 'Appointments',
            breadcrumbs: [
                {
                    title: 'Medicine',
                    route: 'default-dashboard'
                },
                {
                    title: 'Appointments'
                }
            ]
        };
        this.appointments = [];
        this.patients = [];
        this.defaultAvatar = 'assets/content/anonymous-400.jpg';
        this.currentAvatar = this.defaultAvatar;
    }

    ngOnInit() {
        super.ngOnInit();

        // this.getData('assets/data/appointments.json', 'appointments', 'setLoaded');
        this.getDataFromRemoteSource('/api/v1/appointments', 'appointments', 'setLoaded');
        // this.getData('assets/data/doctors.json', 'doctors');
        this.getDataFromRemoteSource('/api/v1/patient/list', 'patients');

    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    // open modal window
    openModal(body: any, header: any = null, footer: any = null, data: any = null) {
        this.initForm(data);

        this.modal.open({
            body: body,
            header: header,
            footer: footer,
        });
    }

    // close modal window
    closeModal() {
        this.modal.close();
        this.appointmentForm.reset();
    }

    // init form
    initForm(data: any) {
        debugger;
        this.appointmentForm = this.formBuilder.group({
            // img: [(data ? data.img : this.currentAvatar)],
            id: [(data ? data.id : '')],
            reason: [(data ? data.reason : ''), Validators.required],
            // email: [(data ? data.email : ''), Validators.required],
            appointmentDateTime: [(data ? data.appointmentDate +" "+ data.appointmentTime : ''), Validators.required],
            // beginTime: [(data ? data.fromTo.substring(0, (data.fromTo.indexOf('-') - 1)) : ''), Validators.required],
            // to: [(data ? data.fromTo.substring((data.fromTo.indexOf('-') + 2), data.fromTo.length) : ''), Validators.required],
            // number: [(data ? data.number : ''), Validators.required],
            patient: [(data ? data.name : ''), Validators.required],
            // injury: [(data ? data.injury : ''), Validators.required]
        });
    }

    // upload new file
    onFileChanged(inputValue: any) {
        let file: File = inputValue.target.files[0];
        let reader: FileReader = new FileReader();

        reader.onloadend = () => {
            this.currentAvatar = reader.result;
        };

        reader.readAsDataURL(file);
    }

    // edit appointment
    edit(row: any) {
        debugger;
        this.openModal(this.modalBody, 'Edite appointment', this.modalFooter, row);
    }

    // remove appointment
    remove(tableRow: any) {
        // console.log("tableRow : ",tableRow);
        this.deleteItem('/api/v1/appointments/' + tableRow.id).subscribe(resp => {
                if (resp.status == 200) {
                    this.appointments = this.appointments.filter(row => row !== tableRow)
                }
            }
        );

    }

    // add new appointment
    addAppointment(form: FormGroup) {
        if (form.valid) {
            let newAppointment: any = form.value;
            const selectedPatient = this.patients.find(patient => patient.firstname === newAppointment.patient);

            // newAppointment.fromTo = `${form.value.from} - ${form.value.to}`;
            // newAppointment.img = this.currentAvatar;
            //
            // delete newAppointment.from;
            // delete newAppointment.to;

            // console.log("date : ", date, " time : ", time);
            const formattedTimeString = new Date(newAppointment.appointmentDateTime).toISOString().slice(0, -5);
            // console.log("formattedTimeString : ", formattedTimeString);
            if (selectedPatient) {
                newAppointment.patient = {"id": selectedPatient.id};
                newAppointment.appointmentDateTime = formattedTimeString;
            }
            // console.log("newAppointment   : ", newAppointment);
            this.sendData('/api/v1/appointments', newAppointment);

            this.appointments.unshift(newAppointment);
            let newTableData = JSON.parse(JSON.stringify(this.appointments));

            this.appointments = newTableData;
            this.closeModal();
        }
    }

    updateAppointment(form: FormGroup) {
        if (form.valid) {
            let newAppointment: any = form.value;
            const selectedPatient = this.patients.find(patient => patient.firstname === newAppointment.patient);


            // console.log("date : ", date, " time : ", time);
            const formattedTimeString = new Date(newAppointment.appointmentDateTime).toISOString().slice(0, -5);
            // console.log("formattedTimeString : ", formattedTimeString);
            if (selectedPatient) {
                newAppointment.patient = {"id": selectedPatient.id};
                newAppointment.appointmentDateTime = formattedTimeString;
            }
            // console.log("newAppointment   : ", newAppointment);
            this.updateData('/api/v1/appointments/'+newAppointment.id, newAppointment);


            this.appointments.splice(this.appointments.findIndex(appointment => appointment.id === newAppointment.id), 1);
            console.log("this.appointments : ", this.appointments);

            this.appointments.unshift(newAppointment);
            let newTableData = JSON.parse(JSON.stringify(this.appointments));
            console.log("newTableData : ", newTableData);

            this.appointments = newTableData;
            this.closeModal();
        }

    }
}
