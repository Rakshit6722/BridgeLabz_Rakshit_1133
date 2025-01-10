const obj1 = {
    user: {
        name: "Rakshit",
        address: {
            street: "123 Main St",
            city: "Anytown",
            country: "India",
            coordinates: {
                lat: 12.9716,
                long: 77.5946
            }
        },
        contact: {
            email: "rakshit@example.com",
            phone: "123-456-7890",
            social: {
                twitter: "@rakshit",
                linkedin: "linkedin.com/in/rakshit"
            }
        }
    }
}

console.log(obj1?.user?.name?.firstName);
console.log(obj1?.user?.address?.street);
console.log(obj1?.user?.address?.coordinates?.lat);
console.log(obj1?.user?.contact?.email);
console.log(obj1?.user?.contact?.social?.twitter);