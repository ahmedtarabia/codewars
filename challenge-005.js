function calculateYears(principal, interest, tax, desired) {
	let year = 0
	while(principal < desired){
		let totalGain = principal*interest
		let totalTaxed = interest*tax*principal
		let finalTotal = totalGain - totalTaxed;
		principal += finalTotal
		year++
	}
	return year
}