import { TestBed, async, inject } from '@angular/core/testing';

import { ResolveAddressBookGuard } from './resolve-address-book.guard';

describe('ResolveAddressBookGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveAddressBookGuard]
    });
  });

  it('should ...', inject([ResolveAddressBookGuard], (guard: ResolveAddressBookGuard) => {
    expect(guard).toBeTruthy();
  }));
});
