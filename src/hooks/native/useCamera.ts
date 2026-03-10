import { useState, useCallback } from 'react';

/**
 * useCamera — Web-safe Camera abstraction.
 * Uses Capacitor Camera if available, falls back to <input type="file">.
 */
export function useCamera() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const takePhoto = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const cap = (window as any)?.Capacitor?.Plugins?.Camera;
      if (cap) {
        const permissions = await cap.checkPermissions();
        if (permissions.camera !== 'granted') {
          const req = await cap.requestPermissions();
          if (req.camera !== 'granted') throw new Error('Camera permission denied');
        }
        const result = await cap.getPhoto({ resultType: 'dataUrl', source: 'CAMERA', quality: 90 });
        setPhoto(result.dataUrl || result.webPath || null);
      } else {
        // Web fallback using file input
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.capture = 'environment';
        input.onchange = (e) => {
          const file = (e.target as HTMLInputElement).files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (re) => setPhoto(re.target?.result as string);
            reader.readAsDataURL(file);
          }
        };
        input.click();
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { photo, takePhoto, isLoading, error };
}
