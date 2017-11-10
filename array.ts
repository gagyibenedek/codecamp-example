export function getPointer(size: i32) : usize {
  return malloc(size);
}

export function sum(pointer: usize, length: i32): u8 {
  let sum: u8 = 0;
  for(let i: i32 = 0; i < length; i++) {
    let cursor : u8 = load<u8>(pointer + i);
    sum += cursor;
  }
  return sum;
}