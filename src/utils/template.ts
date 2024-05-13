export const templateComplier = (obj: any, body: string, subject?: string) => {
  for (const key in obj) {
    if (
      typeof obj === 'object' &&
      Object.prototype.hasOwnProperty.call(obj, key)
    ) {
      const regex = new RegExp(`{{${key}}}`, 'g');
      body = body.replace(regex, obj[key]);
      subject ? (subject = subject.replace(regex, obj[key])) : undefined;
    }
  }

  const output = { body: body, subject: subject };

  return output;
};

export const generateTags = (content: Record<string, string>) => {
  const output = [];
  for (const key in content) {
    if (Object.prototype.hasOwnProperty.call(content, key)) {
      output.push({ property: key, value: content[key] });
    }
  }
  return output;
};