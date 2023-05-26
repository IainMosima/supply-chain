function searchNames(names: string[], searchTerm: string): number[] {
  const matchedIndices: number[] = [];

  for (let i = 0; i < names.length; i++) {
    const lowercaseName = names[i].toLowerCase();
    const lowercaseSearchTerm = searchTerm.toLowerCase();

    if (lowercaseName.includes(lowercaseSearchTerm)) {
      matchedIndices.push(i);
    }
  }

  return matchedIndices;
}
