/** Little-endian reads over a Uint8Array slice (minimal `BufferReader`). */
export class BufferReader {
  constructor(
    private readonly buf: Uint8Array,
    private pos = 0,
  ) {}

  get position(): number {
    return this.pos;
  }

  set position(p: number) {
    this.pos = p;
  }

  readU8(): number {
    return this.buf[this.pos++]!;
  }

  readU16LE(): number {
    const v = this.buf[this.pos]! | (this.buf[this.pos + 1]! << 8);
    this.pos += 2;
    return v;
  }

  readI32LE(): number {
    const v = new DataView(
      this.buf.buffer,
      this.buf.byteOffset,
      this.buf.byteLength,
    ).getInt32(this.pos, true);
    this.pos += 4;
    return v;
  }

  readBytes(len: number): Uint8Array {
    const s = this.buf.subarray(this.pos, this.pos + len);
    this.pos += len;
    return s;
  }

  remaining(): number {
    return this.buf.length - this.pos;
  }
}
