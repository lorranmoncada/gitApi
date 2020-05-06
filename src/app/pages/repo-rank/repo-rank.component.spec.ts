/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RepoRankComponent } from './repo-rank.component';

describe('RepoRankComponent', () => {
  let component: RepoRankComponent;
  let fixture: ComponentFixture<RepoRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
