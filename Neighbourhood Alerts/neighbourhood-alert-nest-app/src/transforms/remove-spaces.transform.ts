// transforms/remove-spaces.transform.ts
import { Transform } from 'class-transformer';

export const RemoveSpaces = () =>
  Transform(({ value }) => typeof value === 'string' ? value.replace(/\s+/g, '') : value);