function searchNames(names: string[], searchTerm: string): string[] {
  const filteredNames: string[] = [];

  for (const name of names) {
    if (name.toLowerCase().includes(searchTerm.toLowerCase())) {
      filteredNames.push(name);
    }
  }

  return filteredNames;
}
