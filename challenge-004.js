function DNAStrand(dna){
	let dnaMain = {
		"A": "T",
		"T": "A",
		"C": "G",
		"G": "C"
	}

	let compdna = ''
	for( let i = 0; i<dna.length; i++){
		compdna += dnaMain[dna[i]]
	}
	return compdna
}