import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoItem from '../TodoItem';

describe('TodoItem', () => {
  it('allows editing and saving non-English characters', async () => {
    const handleSave = jest.fn();
    render(<TodoItem todo={{ id: 1, text: 'Test' }} onSave={handleSave} />);

    // Enter edit mode
    await userEvent.click(screen.getByLabelText('Edit'));
    const input = await screen.findByLabelText('Edit todo text');
    expect(input).toBeInTheDocument();

    // Type non-English character
    await userEvent.clear(input);
    await userEvent.type(input, 'á');
    expect(input).toHaveValue('á');

    // Save
    await userEvent.click(screen.getByLabelText('Save'));
    expect(handleSave).toHaveBeenCalledWith(1, 'á');
  });

  it('restores original text on cancel', async () => {
    const handleSave = jest.fn();
    render(<TodoItem todo={{ id: 2, text: 'Original' }} onSave={handleSave} />);

    await userEvent.click(screen.getByLabelText('Edit'));
    const input = await screen.findByLabelText('Edit todo text');
    await userEvent.clear(input);
    await userEvent.type(input, 'Changed');
    await userEvent.click(screen.getByLabelText('Cancel'));
    expect(screen.getByText('Original')).toBeInTheDocument();
    expect(handleSave).not.toHaveBeenCalled();
  });
});
