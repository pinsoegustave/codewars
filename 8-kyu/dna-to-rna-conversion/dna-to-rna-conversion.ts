export function DNAtoRNA(dna: string): string {
  const arr = dna.split(' ');
​
    return arr.map((e) => e.replace(/T/g, 'U')).join();
}