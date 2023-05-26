function linearSearch(names: string[], searchTerm: string): string[] {
    const matchedNames: string[] = [];
  
    for (const name of names) {
      if (name.toLowerCase().startsWith(searchTerm.toLowerCase())) {
        matchedNames.push(name);
      }
    }
  
    return matchedNames;
}
  