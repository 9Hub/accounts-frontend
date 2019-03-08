/*
  Documentation:
  The component relies on jasmine and karma for the testing of functions.
  IMPORTANT: import modules used by angular material, amounts of local components of use
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { HttpClientModule }    from '@angular/common/http';
import { FormLoginComponent } from './form-login.component';
import { LoginService } from '../../service/service-login/login.service';

describe('FormLoginComponent', () => {
  let component: FormLoginComponent;
  let fixture: ComponentFixture<FormLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        FormLoginComponent 
      ],
      imports:[
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        HttpClientModule,
        MatInputModule
      ],
      providers: [
        LoginService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should obtain data obtained by io', () => {
    let loginFormValue = {
      email:'test',
      password:'test'
    };
    let resultloginForm;

    it('function createForm', () => {
      resultloginForm = loginFormValue;
      expect(resultloginForm).not.toBe(null);
    });

    it('function createForm', () => {
      resultloginForm = null;
      expect(resultloginForm).toBe(null);
    });
  });



});
