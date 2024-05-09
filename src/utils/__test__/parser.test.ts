import { describe, expect, it } from 'vitest';
import { renderCSV, renderCSVToObj } from '../parser';
import { resolve } from 'path';

const csvFilePath = './src/utils/__test__/test-people.csv';

const mockRenderCSVToObj = async (csvFilePath: string) => {
  const csv = await renderCSV(csvFilePath).then(async (csv) => {
    const obj = await renderCSVToObj(csv);
    return obj;
  });
  return csv;
};

describe('Parsing CSV to Array', () => {
  it('should import csv file', async () => {
    await renderCSV(csvFilePath);
    expect(true).toBe(true);
  });

  it('should read and render CSV', async () => {
    const csv: [][] = await renderCSV(csvFilePath);
    expect(csv).toBeTruthy();
  });

  it('should render CSV to object array', async () => {
    const csvObjArr = await mockRenderCSVToObj(csvFilePath);
    expect(csvObjArr).toBeTruthy();
  });

  it('should not have empty array', async () => {
    const csvObjArr = await mockRenderCSVToObj(csvFilePath);
    expect(csvObjArr).not.toBe<[][]>([]);
  });

  it('should have a first_name called "John"', async () => {
    const csvObjArr = await mockRenderCSVToObj(csvFilePath);
    console.log(csvObjArr);
    expect.objectContaining({ first_name: 'John' });
  });
});
