const post = (url: string, eventName: string, icon: string) => {
  // ⌛ slow function emulator
  const startTime = performance.now();
  while (performance.now() - startTime < 500) {}

  console.log(
    `🔷 ${icon} || POST made to: ${url} || The event name is: ${eventName}`
  );
};

export { post };
