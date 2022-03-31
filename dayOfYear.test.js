const dayOfYear = require('./dayOfYear')

describe('dayOfYear', () => {
    test('ako je 1.1.2012 vrati 1', () => {
        expect(dayOfYear(2012, 1, 1)).toBe(1);
    });
    test('ako je 1.2.2012 vrati 32', () => {
        expect(dayOfYear(2012, 2, 1)).toBe(32);
    })
    test('ako je 1.3.2012 vrati 61', () => {
        expect(dayOfYear(2012, 3, 1)).toBe(61)
    })
    test('ako je 1.4.2012 vrati 92', () => {
        expect(dayOfYear(2012, 4, 1)).toBe(92)
    })
    test('ako je 1.5.2012 vrati 122', () => {
        expect(dayOfYear(2012, 5, 1)).toBe(122)
    })
    test('ako je 1.6.2012 vrati 153', () => {
        expect(dayOfYear(2012, 6, 1)).toBe(153)
    })
    test('ako je 1.7.2012 vrati 183', () => {
        expect(dayOfYear(2012, 7, 1)).toBe(183)
    })
    test('ako je 1.8.2012 vrati 214', () => {
        expect(dayOfYear(2012, 8, 1)).toBe(214)
    })
    test('ako je 1.9.2012 vrati 245', () => {
        expect(dayOfYear(2012, 9, 1)).toBe(245)
    })
    test('ako je 1.10.2012 vrati 275', () => {
        expect(dayOfYear(2012, 10, 1)).toBe(275)
    })
    test('ako je 1.11.2012 vrati 306', () => {
        expect(dayOfYear(2012, 11, 1)).toBe(306)
    })
    test('ako je 1.12.2012 vrati 336', () => {
        expect(dayOfYear(2012, 12, 1)).toBe(336)
    })
    test('ako je 1.3.2011 vrati 60', () => {
        expect(dayOfYear(2011, 3, 1)).toBe(60)
    })

})