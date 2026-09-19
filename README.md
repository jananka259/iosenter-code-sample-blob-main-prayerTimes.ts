# iosenter.no · Code Sample

A small TypeScript sample extracted from the prayer-times experience used on **iosenter.no**.

[**View the live website →**](https://www.iosenter.no)  
[**View the live prayer-times page →**](https://www.iosenter.no/prayer-times)

[![iosenter.no website preview](https://image.thum.io/get/width/1400/crop/850/https://www.iosenter.no)](https://www.iosenter.no)

## The idea

Given today's prayer times, this utility checks the user's current local time and returns the **next prayer**.

It is intentionally small. The full production application is private; this repository only exposes a sanitized example.

## Code

```ts
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
```

## Example

If the current time is **15:30** and the upcoming prayer is:

```ts
{ name: 'Asr', time: '16:45' }
```

the function returns **Asr**.

---

**Production:** [iosenter.no](https://www.iosenter.no)  
**Feature:** [Prayer Times](https://www.iosenter.no/prayer-times)  
**Language:** TypeScript
