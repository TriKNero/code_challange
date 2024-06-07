const parseInt = require('../tasks/first_task.js');

test('parses positive numbers correctly', () => {
    expect(parseInt("123")).toBe(123);
    expect(parseInt("0")).toBe(0);
    expect(parseInt("456789")).toBe(456789);
});

test('parses negative numbers correctly', () => {
    expect(parseInt("-123")).toBe(-123);
    expect(parseInt("-0")).toBe(0);
    expect(parseInt("-456789")).toBe(-456789);
});

test('parses numbers with plus sign correctly', () => {
    expect(parseInt("+123")).toBe(123);
    expect(parseInt("+0")).toBe(0);
    expect(parseInt("+456789")).toBe(456789);
});

test('parses strings with non-numeric characters correctly', () => {
    expect(parseInt("123abc")).toBe(123);
    expect(parseInt("-123abc")).toBe(-123);
    expect(parseInt("+123abc")).toBe(123);
    expect(parseInt("abc123")).toBe(0); // No valid digits at the start
});

test('handles empty strings and invalid inputs', () => {
    expect(parseInt("")).toBe(0);
    expect(parseInt("-")).toBe(0);
    expect(parseInt("+")).toBe(0);
    expect(parseInt("abc")).toBe(0);
});
