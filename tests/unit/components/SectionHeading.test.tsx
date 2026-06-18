import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionHeading } from '@/components/ui/SectionHeading';

describe('<SectionHeading />', () => {
  it('renders the number and title', () => {
    render(<SectionHeading num="03" title="Selected Projects" />);
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('Selected Projects')).toBeInTheDocument();
  });
});
