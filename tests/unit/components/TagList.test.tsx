import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TagList } from '@/components/ui/TagList';

describe('<TagList />', () => {
  it('renders one list item per tag', () => {
    render(<TagList tags={['TypeScript', 'React', 'GraphQL']} />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
    expect(items.map((i) => i.textContent)).toEqual(['TypeScript', 'React', 'GraphQL']);
  });

  it('renders an empty list when given no tags', () => {
    render(<TagList tags={[]} />);
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });
});
