const parseCSVText = (file: string): string[][] => {
  const data = file.split('\n').map((el) => {
    return el.split(",");
  });
  return data;
};

const renderCSVFromInput = (
  csvData: string | ArrayBuffer | null | undefined
): string[][] | null => {
  let csvObj;

  if (typeof csvData === 'string') csvObj = parseCSVText(csvData);
  else if (csvData instanceof ArrayBuffer) {
    const textDecode = new TextDecoder('utf-8');
    const csvString = textDecode.decode(csvData);
    csvObj = parseCSVText(csvString);
  } else {
    return null;
  }
  return csvObj
};


const renderCSVToObj = (file: string[][]) => {
  //  Start CSV Processing
  let data: string[][] = file;

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

export { renderCSVToObj, parseCSVText, renderCSVFromInput };
