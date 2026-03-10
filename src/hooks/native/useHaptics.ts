import { useCallback } from 'react';

/**
 * useHaptics — Web-safe Haptics abstraction.
 * Uses Capacitor Haptics if available, falls back to navigator.vibrate.
 */
export function useHaptics() {
  const impact = useCallback(async (style: 'light' | 'medium' | 'heavy' = 'medium') => {
    try {
      const cap = (window as any)?.Capacitor?.Plugins?.Haptics;
      if (cap) {
        await cap.impact({ style });
      } else if (navigator.vibrate) {
        navigator.vibrate(style === 'light' ? 20 : style === 'heavy' ? 80 : 40);
      }
    } catch {
      // Haptics not available — silently ignore
    }
  }, []);

  return { impact };
}
