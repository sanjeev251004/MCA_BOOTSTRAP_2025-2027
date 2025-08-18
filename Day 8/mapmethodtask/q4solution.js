const timestamps = [1630488000000, 1631179200000, 1633708800000];

const formattedTimes = timestamps.map(ts => {
  const date = new Date(ts);
  return date.toLocaleTimeString('en-US', { hour12: true });
});

console.log(formattedTimes);
