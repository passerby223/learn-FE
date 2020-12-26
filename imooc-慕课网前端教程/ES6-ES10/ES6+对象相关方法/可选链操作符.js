var user = {
    name: 'Kira',
    address: {
        city: 'beijing',
        other: {}
    }
}
console.log(user?.name);	// Kira
console.log(a?.b);// undefined
console.log(user?.address?.city);		// beijing
console.log(user?.address?.other?.a?.b);	// undefined
