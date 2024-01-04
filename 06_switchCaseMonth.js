function monthOfYear(month) {
  switch (month) {
    case 1:
      console.log(`Month ${month} is --> January`);
      break;
    case 2:
      console.log(`Month ${month} is --> February`);
      break;
    case 3:
      console.log(`Month ${month} is --> March`);
      break;
    case 4:
      console.log(`Month ${month} is --> April`);
      break;
    case 5:
      console.log(`Month ${month} is --> May`);
      break;
    case 6:
      console.log(`Month ${month} is --> June`);
      break;
    case 7:
      console.log(`Month ${month} is --> Jully`);
      break;
    case 8:
      console.log(`Month ${month} is --> August`);
      break;
    case 9:
      console.log(`Month ${month} is --> September`);
      break;
    case 10:
      console.log(`Month ${month} is --> Octomber`);
      break;
    case 11:
      console.log(`Month ${month} is --> November`);
      break;
    case 12:
      console.log(`Month ${month} is --> December`);
      break;

    default:
    console.log(`Invalid Input --> Month ${month} `);
      break;
  }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
