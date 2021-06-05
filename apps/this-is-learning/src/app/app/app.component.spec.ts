import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HelloScam } from './../hello/hello.scam';
import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloScam, RouterTestingModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
