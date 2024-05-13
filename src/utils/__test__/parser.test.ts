import { describe, expect, it } from 'vitest';
import { parseCSVText, renderCSVToObj } from '../parser';
import { resolve } from 'path';

const stringText = `First Name,Last Name,Company Name,Person Summary,Title,Work Phone,Mobile Phone,Work Email,Other Email,Website,Fax,Tag,Type (contact or lead),Activity,Work Address 1,Work Address 2,Work City,Work State,Work Postal Code,Work Country,Home Address 1,Home Address 2,Home City,Home State,Home Postal Code,Home Country,Home Email,Home Phone,Lead Source,People Status,Owner,Created At,IM,Twitter ID,Twitter URL,LinkedIn ID,LinkedIn URL,Facebook ID,Facebook URL
John,Smith,Pipeline,Manages a team of 15 people who are all remote. ,Customer Operations Manager,(866) 702 7303,,customercare@pipelinecrm.com,,http://www.pipelinecrm.com,,Vendor,lead,Had a great call. ,100 S. King St.,Suite 425 ,Seattle,WA,98104,USA,,,,,,,,,Inbound Call,Hot,Jane Doe,,pipelinedeals,pipelinedeals,,pipelinedeals,pipelinedeals,,`;


describe('Parsing CSV to Array', () => {
  it('should convert plain text to nexted array', () => {
    const parsedText = parseCSVText(stringText);
    expect(parsedText).toBeTruthy();
  });
  it('should have different nested array', () => {
    const parsedText = parseCSVText(stringText);
    const nested = parsedText[0][0];
    expect(nested).toBeTruthy();
  });

  it('should have different nested array items', () => {
    const parsedText = parseCSVText(stringText);
    const nestedItem = parsedText[0][0];
    expect(nestedItem).toBeTruthy();
  });

  it('should convert array to object', async () => {
    const parsedText = parseCSVText(stringText);
    const csvObj = renderCSVToObj(parsedText);
    expect(csvObj).toBeTruthy();
  });
});
