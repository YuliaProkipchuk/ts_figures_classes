export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'blue' | 'green';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle';

  constructor(
    public color: 'red' | 'blue' | 'green',
    public a: number,
    public b: number,
    public c: number,
  ) {
    const max = Math.max(a, b, c);

    if (a <= 0 || b <= 0 || c <= 0 || max >= b + c + a - max) {
      throw new Error('Data is not valid');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle';

  constructor(
    public color: 'red' | 'blue' | 'green',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Data is not valid');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle';

  constructor(
    public color: 'red' | 'blue' | 'green',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Data is not valid');
    }
    this.shape = 'rectangle';
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
