import { describe, it, expect } from 'vitest';
import { templateComplier } from '../template';

//  Testing Mockup
const dataMockObj = {
  firstname: 'Unnamed',
  lastname: 'Codes',
  country: 'Nigeria',
};

const dataMockBody = `Hello {{firstname}},\nI hope are having a lovely day. :)`;

const dataMockSubject = 'Welcome, {{firstname}}!';

//  Unit Testing
describe('Generating email templates', () => {
  it('should create template array', () => {
    const elTemp = templateComplier(dataMockObj, dataMockBody);
    expect(elTemp).toBeTruthy;
  });

  it('should have template body w/ firstname', () => {
    const elTemp = templateComplier(dataMockObj, dataMockBody);
    expect(elTemp.body).toContain(dataMockObj.firstname);
  });

  it('should show subject if found(no subject)', () => {
    const elTemp = templateComplier(dataMockObj, dataMockBody);
    if (elTemp.subject) expect(elTemp.subject).toBeTruthy();
  });

  it('should show subject if found(w/ subject)', () => {
    const elTemp = templateComplier(dataMockObj, dataMockBody, dataMockSubject);
    expect(elTemp.subject).toBeTruthy();
  });

  it('should generate template in subject', () => {
    const elTemp = templateComplier(dataMockObj, dataMockBody, dataMockSubject);
    expect(elTemp.subject).toContain(dataMockObj.firstname);
  });
});
