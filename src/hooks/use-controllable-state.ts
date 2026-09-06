import { useEffectEvent, useState } from "react";

interface UseControllableStateOptions<T> {
  value: T | undefined;
  defaultValue: T | undefined;
  onChange: ((value: T) => void) | undefined;
}

export function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: UseControllableStateOptions<T>): [T | undefined, (value: T) => void] {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const emitChange = useEffectEvent((next: T) => {
    onChange?.(next);
  });

  function setValue(next: T) {
    if (!isControlled) {
      setInternalValue(next);
    }
    emitChange(next);
  }

  return [currentValue, setValue];
}
