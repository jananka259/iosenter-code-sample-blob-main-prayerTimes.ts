type Prayer = {
  name: string;
  time: string;
};

export function getNextPrayer(prayers: Prayer[], now = new Date()) {
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  return (
    prayers.find(({ time }) => {
      const [hours, minutes] = time.split(':').map(Number);
      return hours * 60 + minutes >= currentMinutes;
    }) ?? prayers[0] ?? null
  );
}
