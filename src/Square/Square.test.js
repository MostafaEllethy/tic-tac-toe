import Square from './Square'
import { render, fireEvent, screen } from '@testing-library/react'


describe('Square Component Test', () => {
    const { getByRole } = screen;

    const handleClick = jest.fn()
    let rerender;

    beforeEach(() => {
        rerender = render(<Square value={null} onClick={handleClick} winner={false} />).rerender;
    })

    test('Init Render', () => {
        const el = getByRole('button')
        expect(el).toBeInTheDocument()
        expect(el.innerHTML).toBe('')
        expect(el.className).toBe('square')
    })

    test('Handle Click & Set Square Value', () => {
        fireEvent.click(getByRole('button'))
        rerender(<Square value={'X'} onClick={handleClick} winner={false} />)
        expect(getByRole('button').innerHTML).toBe('X')
        expect(handleClick).toHaveBeenCalledTimes(1)
        fireEvent.click(getByRole('button'))
        expect(handleClick).toHaveBeenCalledTimes(1)

        rerender(<Square value={'O'} onClick={handleClick} winner={false} />)
        expect(getByRole('button').innerHTML).toBe('O')
        expect(handleClick).toHaveBeenCalledTimes(1)
        fireEvent.click(getByRole('button'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    test('Winner Class Toggable', () => {
        expect(getByRole('button').className).toBe('square')
        rerender(<Square value={null} onClick={handleClick} winner={true} />)
        expect(getByRole('button').className).toBe('square winner')
    })
})
