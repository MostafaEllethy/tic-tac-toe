import Board from './Board'
import { render, fireEvent, screen } from '@testing-library/react'

describe('Board Component Test', () => {
    const { queryAllByRole } = screen;

    const handleClick = jest.fn()
    let rerender, component;

    beforeEach(() => {
        component = render(<Board handleClick={handleClick} squares={Array(9).fill(null)} />)
        rerender = component.rerender;
    })

    test('Init Render', () => {
        expect(queryAllByRole('button').length).toBe(9)
    })

    test('Click Handler', () => {
        fireEvent.click(queryAllByRole('button')[0]);
        expect(handleClick).toHaveBeenCalledTimes(1);
        fireEvent.click(queryAllByRole('button')[0]);
        expect(handleClick).toHaveBeenCalledTimes(2);
        rerender(<Board handleClick={handleClick} squares={['X', null, null, null, null, null, null, null, null]} />)
        fireEvent.click(queryAllByRole('button')[0]);
        expect(handleClick).toHaveBeenCalledTimes(2);
    })

    test('If Winner', () => {
        const container = component.container
        rerender(<Board handleClick={handleClick} squares={['X', 'X', 'X', null, null, null, null, null, null]} winnerLines={[0, 1, 2]} />)
        expect(container.querySelectorAll('.winner').length).toBe(3)
    })
})