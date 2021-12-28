const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive && hasDriversLicense) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (shouldDrive && hasDriversLicense && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}