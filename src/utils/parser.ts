import fs from 'fs';
import * as csv from 'csv';

const readCSVFile = async (file: string): Promise<[][]> => {
  return new Promise((resolve, reject: any) => {
    const readStream = fs.createReadStream(file, {
      encoding: 'utf8',
    }); // Reads local files
    const csvArr: [][] = [];

    readStream
      .pipe(
        csv.parse((err, data) => {
          if (err) console.error(err);
          else {
            const output: [][] = data;
            return output;
          }
        })
      )
      .on('data', (data) => {
        csvArr.push(data);
      })
      .on('end', () => resolve(csvArr))
      .on('error', (error: any) => reject(error));
  });
};

const renderCSV = async (file: string): Promise<[][]> => {
  try {
    const csv: [][] = await readCSVFile(file);
    return csv;
  } catch (error) {
    console.error(error);
    return [[]];
  }
};

const renderCSVToObj = async (file: string | [][]) => {
  //  Start CSV Processing
  let data: [][];
  if (typeof file === 'string') {
    const output = await renderCSV(file);
    data = output;
  } else {
    data = file;
  }

  const itemArr = data;
  const header = itemArr[0]?.map((el: string) => {
    return el.toLowerCase().replace(/ /g, '_');
  });
  const content = itemArr.slice(1);

  //  Converts CSV arrays into objects
  const csvPack = content.map((el) => {
    const csvObj: Record<string, string> = {};
    for (let i = 0; i < header.length; i++) {
      csvObj[header[i]] = el[i];
      if (header[i] === 'email' || header[i] === 'work_email')
        csvObj['cypheirClient'] = el[i];
    }
    return csvObj;
  });
  //  CSV Process completed

  return csvPack;
};

export { renderCSV, renderCSVToObj };
