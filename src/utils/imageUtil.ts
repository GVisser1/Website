const IMAGE_PRELOAD_TIMEOUT_MS = 3000;

export const preloadImage = (src: string): Promise<void> =>
  new Promise((resolve) => {
    const img = new window.Image();
    const timeout = setTimeout(resolve, IMAGE_PRELOAD_TIMEOUT_MS);
    const done = (): void => {
      clearTimeout(timeout);
      resolve();
    };
    img.onload = done;
    img.onerror = done;
    img.src = src;
  });
