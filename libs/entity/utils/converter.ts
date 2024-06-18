export function AirtableConverter() {
  function convertSingleSelectToBoolean(input: string) {
    if (input === 'O' || input === 'X') {
      if (input === 'O') {
        return true;
      } else {
        return false;
      }
    } else {
      return input;
    }
  }

  return {
    convertSingleSelectToBoolean,
  };
}
