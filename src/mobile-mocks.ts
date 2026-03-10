/**
 * Mobile Mocks — WASM/WebContainer Safe Shims
 * These mock the Capacitor native plugins so the preview engine doesn't crash.
 * The real plugins are injected only during native Android/iOS builds.
 */

export const Camera = {
  getPhoto: async () => ({ webPath: 'https://placehold.co/400x300?text=Camera+Mock', format: 'jpeg' }),
  checkPermissions: async () => ({ camera: 'granted' }),
  requestPermissions: async () => ({ camera: 'granted' }),
};

export const Geolocation = {
  getCurrentPosition: async () => ({
    coords: { latitude: 10.4806, longitude: -66.9036, accuracy: 10 },
  }),
  checkPermissions: async () => ({ location: 'granted' }),
  requestPermissions: async () => ({ location: 'granted' }),
};

export const Haptics = {
  impact: async (options?: { style: string }) => {},
  vibrate: async () => {},
};

// Default export for Vite alias resolution
export default { Camera, Geolocation, Haptics };
