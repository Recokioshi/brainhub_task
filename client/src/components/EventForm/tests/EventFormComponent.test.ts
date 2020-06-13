import { setValueFromOnChangeWithFunction } from '../EventFormComponent';
import { render } from '@testing-library/react';
import EventForm from '../EventFormComponent';

const mockCallback = jest.fn((x) => x);

describe('EventFormComponent', () => {
  test('setValueFromOnChangeWithFunction calls function', () => {
    const fun = setValueFromOnChangeWithFunction(mockCallback);
    fun({ target: { value: '5' } } as React.ChangeEvent<HTMLInputElement>);
    expect(mockCallback.mock.calls.length).toBe(1);
  });

  test('setValueFromOnChangeWithFunction passes parameter on call', () => {
    const fun = setValueFromOnChangeWithFunction(mockCallback);
    fun({ target: { value: '6' } } as React.ChangeEvent<HTMLInputElement>);
    const calls = mockCallback.mock.calls.length;
    expect(mockCallback.mock.calls[calls - 1][0]).toBe('6');
  });
});
