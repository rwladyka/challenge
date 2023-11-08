import { fireEvent, render, screen } from '@testing-library/react';
import ClickOutside from './ClickOutside';

describe('ClickOutside', () => {
  it('calls onClickOutside when clicking outside the component', () => {
    const onClickOutsideMock = jest.fn();

    render(
      <>
        <div data-testid="outside-element">Outside Element</div>
        <ClickOutside onClickOutside={onClickOutsideMock}>
          <div>Inside Component</div>
        </ClickOutside>
      </>
    );

    fireEvent.click(screen.getByTestId('outside-element'));
    expect(onClickOutsideMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onClickOutside when clicking inside the component', () => {
    const onClickOutsideMock = jest.fn();

    render(
      <ClickOutside onClickOutside={onClickOutsideMock}>
        <div data-testid="inside-element">Inside Component</div>
      </ClickOutside>
    );

    fireEvent.click(screen.getByTestId('inside-element'));
    expect(onClickOutsideMock).not.toHaveBeenCalled();
  });
});
