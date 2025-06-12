import { useEffect } from 'react';

export const useKeyboardNavigation = (elementRef, onEnter) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onEnter();
      }
    };

    const element = elementRef.current;
    if (element) {
      element.addEventListener('keypress', handleKeyPress);
      return () => element.removeEventListener('keypress', handleKeyPress);
    }
  }, [elementRef, onEnter]);
}; 