
export default function ConvertToTitleCase(sentence: string): string {
  return sentence
    .toLowerCase()
    .replace(/(^|\s)\S/g, (match) => match.toUpperCase());
}

