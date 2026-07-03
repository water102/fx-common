import { BufferReader } from './buffer-reader';

describe('BufferReader', () => {
  test('reads little-endian primitives', () => {
    const buf = new Uint8Array([0x00, 0x01, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08]);
    const r = new BufferReader(buf, 1);

    expect(r.readU8()).toBe(1);
    expect(r.readU16LE()).toBe(0x0403);
    expect(r.readI32LE()).toBe(0x08070605);
    expect(r.remaining()).toBe(0);
  });

  test('readBytes advances position', () => {
    const buf = new Uint8Array([10, 20, 30]);
    const r = new BufferReader(buf);
    expect(r.readBytes(2)).toEqual(new Uint8Array([10, 20]));
    expect(r.remaining()).toBe(1);
  });
});
