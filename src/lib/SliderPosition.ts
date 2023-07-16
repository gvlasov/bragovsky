export type SliderPosition = 'start'|'middle'|'end'
export function indexToPosition(index: number, length: number): SliderPosition {
    if (index === 0) {
        return 'start'
    } else if (index === length - 1) {
        return 'end'
    } else {
        return 'middle'
    }
}
